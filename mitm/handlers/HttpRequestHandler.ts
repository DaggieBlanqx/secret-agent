import * as http from 'http';
import Log, { hasBeenLoggedSymbol } from '@secret-agent/commons/Logger';
import { ClientHttp2Stream, Http2ServerRequest, Http2ServerResponse } from 'http2';
import { CanceledPromiseError } from '@secret-agent/commons/interfaces/IPendingWaitEvent';
import IMitmRequestContext from '../interfaces/IMitmRequestContext';
import HeadersHandler from './HeadersHandler';
import MitmRequestContext from '../lib/MitmRequestContext';
import { parseRawHeaders } from '../lib/Utils';
import BaseHttpHandler from './BaseHttpHandler';
import HttpResponseCache from '../lib/HttpResponseCache';
import ResourceState from '../interfaces/ResourceState';

const { log } = Log(module);

export default class HttpRequestHandler extends BaseHttpHandler {
  protected static responseCache = new HttpResponseCache();

  constructor(
    request: Pick<
      IMitmRequestContext,
      'requestSession' | 'isSSL' | 'clientToProxyRequest' | 'proxyToClientResponse'
    >,
  ) {
    super(request, false, HttpRequestHandler.responseCache);
    this.context.setState(ResourceState.ClientToProxyRequest);

    // register error listeners first
    this.bindErrorListeners();
  }

  public async onRequest(): Promise<void> {
    const { clientToProxyRequest } = this.context;

    try {
      clientToProxyRequest.pause();

      const proxyToServerRequest = await this.createProxyToServerRequest();
      if (!proxyToServerRequest) return;

      type HttpServerResponse = [
        response: IMitmRequestContext['serverToProxyResponse'],
        flags?: number,
        rawHeaders?: string[],
      ];
      const responsePromise = new Promise<HttpServerResponse>(resolve =>
        proxyToServerRequest.once('response', (r, flags, headers) => resolve([r, flags, headers])),
      );

      clientToProxyRequest.resume();

      const socketClosedPromise = this.context.proxyToServerMitmSocket.closedPromise.promise;

      // now write request - make sure socket doesn't exit before writing
      const didWriteRequest = await Promise.race([this.writeRequest(), socketClosedPromise]);

      if (didWriteRequest instanceof Date) {
        throw new Error('Socket closed before request written');
      }

      // wait for response and make sure socket doesn't exit before writing
      const response = await Promise.race([responsePromise, socketClosedPromise]);

      if (response instanceof Date) {
        throw new Error('Socket closed before response received');
      }
      await this.onResponse(...response);
    } catch (err) {
      this.onError('ClientToProxy.HandlerError', err);
    }
  }

  protected async onResponse(
    response: IMitmRequestContext['serverToProxyResponse'],
    flags?: number,
    rawHeaders?: string[],
  ): Promise<void> {
    const context = this.context;

    context.setState(ResourceState.ServerToProxyOnResponse);

    if (response instanceof http.IncomingMessage) {
      MitmRequestContext.readHttp1Response(context, response);
    } else {
      MitmRequestContext.readHttp2Response(
        context,
        context.proxyToServerRequest as ClientHttp2Stream,
        response[':status'],
        rawHeaders,
      );
    }
    // wait for MitmRequestContext to read this
    context.serverToProxyResponse.on(
      'error',
      this.onError.bind(this, 'ServerToProxy.ResponseError'),
    );

    try {
      context.cacheHandler.onResponseHeaders();
    } catch (err) {
      return this.onError('ServerToProxy.ResponseHeadersHandlerError', err);
    }

    /////// WRITE CLIENT RESPONSE //////////////////

    if (!context.proxyToClientResponse) {
      log.warn('Error.NoProxyToClientResponse', {
        sessionId: context.requestSession.sessionId,
      });
      context.setState(ResourceState.PrematurelyClosed);
      return;
    }

    await context.requestSession.willSendResponse(context);

    try {
      this.writeResponseHead();
    } catch (err) {
      return this.onError('ServerToProxyToClient.WriteResponseHeadError', err);
    }

    try {
      await this.writeResponse();
    } catch (err) {
      return this.onError('ServerToProxyToClient.ReadWriteResponseError', err);
    }
    context.setState(ResourceState.End);
  }

  protected onError(kind: string, error: Error): void {
    const isCanceled = error instanceof CanceledPromiseError;

    const url = this.context.url.href;
    const { method, requestSession, proxyToClientResponse } = this.context;
    const sessionId = requestSession.sessionId;

    this.context.setState(ResourceState.Error);
    requestSession.emit('http-error', {
      request: MitmRequestContext.toEmittedResource(this.context),
      error,
    });

    let status = 504;
    if (isCanceled) {
      status = 444;
    }
    if (!isCanceled && !requestSession.isClosing && !error[hasBeenLoggedSymbol]) {
      log.info(`MitmHttpRequest.${kind}`, {
        sessionId,
        request: `${method}: ${url}`,
        error,
      });
    }

    try {
      if (!proxyToClientResponse.headersSent) {
        proxyToClientResponse.writeHead(status);
        proxyToClientResponse.end(error.stack);
      } else if (!proxyToClientResponse.finished) {
        proxyToClientResponse.end();
      }
    } catch (e) {
      // drown errors
    }
  }

  private bindErrorListeners(): void {
    const { clientToProxyRequest, proxyToClientResponse } = this.context;
    clientToProxyRequest.on('error', this.onError.bind(this, 'ClientToProxy.RequestError'));
    proxyToClientResponse.on('error', this.onError.bind(this, 'ProxyToClient.ResponseError'));

    if (clientToProxyRequest instanceof Http2ServerRequest) {
      const stream = clientToProxyRequest.stream;
      this.bindHttp2ErrorListeners('ClientToProxy', stream, stream.session);
    }

    if (proxyToClientResponse instanceof Http2ServerResponse) {
      const stream = proxyToClientResponse.stream;
      this.bindHttp2ErrorListeners('ProxyToClient', stream, stream.session);
    }
  }

  private async writeRequest(): Promise<void> {
    this.context.setState(ResourceState.WriteProxyToServerRequestBody);
    const { proxyToServerRequest, clientToProxyRequest } = this.context;

    const onWriteError = (error): void => {
      if (error) {
        this.onError('ProxyToServer.WriteError', error);
      }
    };

    const data: Buffer[] = [];
    for await (const chunk of clientToProxyRequest) {
      data.push(chunk);
      proxyToServerRequest.write(chunk, onWriteError);
    }

    HeadersHandler.sendRequestTrailers(this.context);
    await new Promise(resolve => proxyToServerRequest.end(resolve));
    this.context.requestPostData = Buffer.concat(data);
  }

  private writeResponseHead(): void {
    const context = this.context;
    const { serverToProxyResponse, proxyToClientResponse } = context;

    proxyToClientResponse.statusCode = context.status;
    // write individually so we properly write header-lists
    for (const [key, value] of Object.entries(context.responseHeaders)) {
      proxyToClientResponse.setHeader(key, value);
    }

    serverToProxyResponse.once('trailers', headers => {
      context.responseTrailers = headers;
    });

    proxyToClientResponse.writeHead(proxyToClientResponse.statusCode);
  }

  private async writeResponse(): Promise<void> {
    const context = this.context;
    const { serverToProxyResponse, proxyToClientResponse } = context;

    context.setState(ResourceState.WriteProxyToClientResponseBody);

    if (context.requestSession.willWriteResponseBody) {
      await context.requestSession.willWriteResponseBody(context);
    }

    for await (const chunk of serverToProxyResponse) {
      const data = context.cacheHandler.onResponseData(chunk as Buffer);
      this.safeWriteToClient(data);
    }

    if (context.cacheHandler.shouldServeCachedData) {
      this.safeWriteToClient(context.cacheHandler.cacheData);
    }

    if (serverToProxyResponse instanceof http.IncomingMessage) {
      context.responseTrailers = parseRawHeaders(serverToProxyResponse.rawTrailers);
    }
    if (context.responseTrailers) {
      proxyToClientResponse.addTrailers(context.responseTrailers);
    }
    await new Promise<void>(resolve => proxyToClientResponse.end(resolve));

    context.requestSession.requestAgent.freeSocket(context);
    context.cacheHandler.onResponseEnd();

    // wait for browser request id before resolving
    await context.browserHasRequested;
    context.requestSession.emit('response', MitmRequestContext.toEmittedResource(context));
  }

  private safeWriteToClient(data: Buffer): void {
    if (!data || this.isClientConnectionDestroyed()) return;

    this.context.proxyToClientResponse.write(data, error => {
      if (error && !this.isClientConnectionDestroyed())
        this.onError('ServerToProxy.WriteResponseError', error);
    });
  }

  private isClientConnectionDestroyed(): boolean {
    const proxyToClientResponse = this.context.proxyToClientResponse;
    return (
      (proxyToClientResponse as Http2ServerResponse).stream?.destroyed ||
      proxyToClientResponse.socket?.destroyed ||
      proxyToClientResponse.connection?.destroyed
    );
  }

  public static async onRequest(
    request: Pick<
      IMitmRequestContext,
      'requestSession' | 'isSSL' | 'clientToProxyRequest' | 'proxyToClientResponse'
    >,
  ): Promise<void> {
    const handler = new HttpRequestHandler(request);
    await handler.onRequest();
  }
}
