import { v1 as uuidv1 } from 'uuid';
import Log from '@secret-agent/commons/Logger';
import ICreateTabOptions from '@secret-agent/interfaces/ICreateSessionOptions';
import RequestSession, {
  IRequestSessionHttpErrorEvent,
  IRequestSessionRequestEvent,
  IRequestSessionResponseEvent,
  IResourceStateChangeEvent,
  ISocketEvent,
} from '@secret-agent/mitm/handlers/RequestSession';
import IPuppetContext, { IPuppetContextEvents } from '@secret-agent/interfaces/IPuppetContext';
import IUserProfile from '@secret-agent/interfaces/IUserProfile';
import { IPuppetPage } from '@secret-agent/interfaces/IPuppetPage';
import IHumanEmulator from '@secret-agent/interfaces/IHumanEmulator';
import IHumanEmulatorClass from '@secret-agent/interfaces/IHumanEmulatorClass';
import IBrowserEmulator from '@secret-agent/interfaces/IBrowserEmulator';
import IBrowserEmulatorClass from '@secret-agent/interfaces/IBrowserEmulatorClass';
import IBrowserEngine from '@secret-agent/interfaces/IBrowserEngine';
import IConfigureSessionOptions from '@secret-agent/interfaces/IConfigureSessionOptions';
import { TypedEventEmitter } from '@secret-agent/commons/eventUtils';
import ICoreEventPayload from '@secret-agent/interfaces/ICoreEventPayload';
import ISessionMeta from '@secret-agent/interfaces/ISessionMeta';
import { IPuppetWorker } from '@secret-agent/interfaces/IPuppetWorker';
import IHttpResourceLoadDetails from '@secret-agent/interfaces/IHttpResourceLoadDetails';
import { CanceledPromiseError } from '@secret-agent/commons/interfaces/IPendingWaitEvent';
import { MitmProxy } from '@secret-agent/mitm/index';
import SessionState from './SessionState';
import AwaitedEventListener from './AwaitedEventListener';
import GlobalPool from './GlobalPool';
import Tab from './Tab';
import UserProfile from './UserProfile';
import BrowserEmulators from './BrowserEmulators';
import HumanEmulators from './HumanEmulators';
import InjectedScripts from './InjectedScripts';

const { log } = Log(module);

export default class Session extends TypedEventEmitter<{
  closing: void;
  closed: void;
  'awaited-event': ICoreEventPayload;
}> {
  private static readonly byId: { [id: string]: Session } = {};

  public awaitedEventListener: AwaitedEventListener;
  public readonly id: string;
  public readonly baseDir: string;
  public browserEngine: IBrowserEngine;
  public browserEmulator: IBrowserEmulator;
  public humanEmulator: IHumanEmulator;
  public upstreamProxyUrl: string | null;
  public readonly mitmRequestSession: RequestSession;
  public sessionState: SessionState;
  public browserContext?: IPuppetContext;
  public userProfile?: IUserProfile;

  public tabs: Tab[] = [];

  public readonly humanEmulatorId: string;
  public readonly browserEmulatorId: string;
  public get isClosing() {
    return this._isClosing;
  }

  private isolatedMitmProxy?: MitmProxy;
  private _isClosing = false;

  private tabIdCounter = 0;

  constructor(readonly options: ICreateTabOptions) {
    super();
    this.id = uuidv1();
    Session.byId[this.id] = this;
    this.logger = log.createChild(module, { sessionId: this.id });
    this.awaitedEventListener = new AwaitedEventListener(this);
    this.browserEmulator = BrowserEmulators.createInstance(options, this.id, options.browserEmulatorId);
    this.browserEmulatorId = (this.browserEmulator.constructor as IBrowserEmulatorClass).id;
    this.browserEngine = (this.browserEmulator.constructor as IBrowserEmulatorClass).engine;
    if (options.userProfile) {
      this.userProfile = options.userProfile;
    }
    this.upstreamProxyUrl = options.upstreamProxyUrl;

    this.humanEmulator = HumanEmulators.createInstance(options.humanEmulatorId);
    this.humanEmulatorId = (this.humanEmulator.constructor as IHumanEmulatorClass).id;

    this.baseDir = GlobalPool.sessionsDir;
    this.sessionState = new SessionState(
      this.baseDir,
      this.id,
      options.sessionName,
      options.scriptInstanceMeta,
      this.browserEmulatorId,
      this.humanEmulatorId,
      this.browserEmulator.viewport,
      this.browserEmulator.timezoneId,
    );
    this.mitmRequestSession = new RequestSession(
      this.id,
      this.browserEmulator.userAgentString,
      this.upstreamProxyUrl,
      this.browserEmulator,
    );
  }

  public getTab(id: number): Tab {
    return this.tabs.find(x => x.id === id);
  }

  public async configure(options: IConfigureSessionOptions) {
    if (options.upstreamProxyUrl !== undefined) {
      this.upstreamProxyUrl = options.upstreamProxyUrl;
      this.mitmRequestSession.upstreamProxyUrl = options.upstreamProxyUrl;
    }
    if (options.blockedResourceTypes !== undefined) {
      for (const tab of this.tabs) await tab.setBlockedResourceTypes(options.blockedResourceTypes);
    }

    if (options.userProfile !== undefined) {
      this.userProfile = options.userProfile;
    }
    this.browserEmulator.configure(options);
  }

  public getMitmProxy(): { address: string; password?: string } {
    return {
      address: this.isolatedMitmProxy ? `localhost:${this.isolatedMitmProxy.port}` : null,
      password: this.isolatedMitmProxy ? null : this.id,
    };
  }

  public async registerWithMitm(
    sharedMitmProxy: MitmProxy,
    doesPuppetSupportBrowserContextProxy: boolean,
  ): Promise<void> {
    let mitmProxy = sharedMitmProxy;
    if (doesPuppetSupportBrowserContextProxy) {
      this.isolatedMitmProxy = await MitmProxy.start();
      mitmProxy = this.isolatedMitmProxy;
    }

    mitmProxy.registerSession(this.mitmRequestSession, !!this.isolatedMitmProxy);
  }

  public async initialize(context: IPuppetContext) {
    this.browserContext = context;
    context.on('devtools-message', this.onDevtoolsMessage.bind(this));
    if (this.userProfile) {
      await UserProfile.install(this);
    }

    context.defaultPageInitializationFn = InjectedScripts.install;

    const requestSession = this.mitmRequestSession;
    requestSession.willWriteResponseBody = this.beforeSendingMitmHttpResponse.bind(this);
    requestSession.on('request', this.onMitmRequest.bind(this));
    requestSession.on('response', this.onMitmResponse.bind(this));
    requestSession.on('http-error', this.onMitmError.bind(this));
    requestSession.on('resource-state', this.onResourceStates.bind(this));
    requestSession.on('socket-close', this.onSocketClose.bind(this));
    requestSession.on('socket-connect', this.onSocketConnect.bind(this));
  }

  public nextTabId(): number {
    return (this.tabIdCounter += 1);
  }

  public async createTab() {
    const page = await this.newPage();

    // if first tab, install session storage
    if (!this.tabs.length && this.userProfile?.storage) {
      await UserProfile.installSessionStorage(this, page);
    }

    const tab = Tab.create(this, page);
    this.sessionState.captureTab(tab.id, page.id, page.devtoolsSession.id);
    this.registerTab(tab, page);
    await tab.isReady;
    return tab;
  }

  public async close() {
    delete Session.byId[this.id];
    if (this._isClosing) return;
    this.emit('closing');
    this._isClosing = true;
    const start = log.info('Session.Closing', {
      sessionId: this.id,
    });

    try {
      this.awaitedEventListener.close();
      await Promise.all(this.tabs.map(x => x.close()));
      this.mitmRequestSession.close();
      if (this.isolatedMitmProxy) this.isolatedMitmProxy.close();
    } catch (error) {
      log.error('Session.CloseMitmError', { error, sessionId: this.id });
    }

    try {
      await this.browserContext?.close();
    } catch (error) {
      log.error('Session.CloseBrowserContextError', { error, sessionId: this.id });
    }
    log.stats('Session.Closed', {
      sessionId: this.id,
      parentLogId: start,
    });
    this.emit('closed');
    // should go last so we can capture logs
    this.sessionState.close();
  }

  public onAwaitedEvent(payload: ICoreEventPayload) {
    this.emit('awaited-event', payload);
  }

  private async beforeSendingMitmHttpResponse(resource: IHttpResourceLoadDetails): Promise<void> {
    // wait for share and service worker "envs" to load before returning response
    const secFetchDest = (resource.requestHeaders['sec-fetch-dest'] ??
      resource.requestHeaders['Sec-Fetch-Dest']) as string;

    // NOTE: not waiting for "workers" because the worker isn't attached until the response comes in
    if (!secFetchDest || !['sharedworker', 'serviceworker'].includes(secFetchDest)) {
      return;
    }

    const workerType = secFetchDest.replace('worker', '_worker');

    function match(worker: IPuppetWorker): boolean {
      if (worker.hasLoadedResponse) return false;
      return workerType === worker.type && worker.url === resource.url.href;
    }
    let worker: IPuppetWorker;
    try {
      for (const value of this.browserContext.workersById.values()) {
        if (match(value)) worker = value;
      }

      if (!worker) {
        ({ worker } = await this.browserContext.waitOn(
          'worker',
          event => match(event.worker),
          5e3,
        ));
      }
      await worker.isReady;
      worker.hasLoadedResponse = true;
    } catch (error) {
      if (error instanceof CanceledPromiseError) return;
      throw error;
    }
  }

  private onDevtoolsMessage(event: IPuppetContextEvents['devtools-message']) {
    this.sessionState.captureDevtoolsMessage(event);
  }

  private onMitmRequest(event: IRequestSessionRequestEvent) {
    // don't know the tab id at this point
    this.sessionState.captureResource(null, event, false);
  }

  private onMitmResponse(event: IRequestSessionResponseEvent) {
    const tabId = this.mitmRequestSession.browserRequestMatcher.requestIdToTabId.get(
      event.browserRequestId,
    );
    let tab = this.tabs.find(x => x.id === tabId);
    if (!tab && !tabId) {
      // if we can't place it, just use the first active tab
      tab = this.tabs.find(x => !x.isClosing) ?? this.tabs[0];
    }

    const resource = this.sessionState.captureResource(tab?.id ?? tabId, event, true);
    if (!event.didBlockResource) {
      tab?.emit('resource', resource);
    }
    tab?.checkForResolvedNavigation(event.browserRequestId, resource);
  }

  private onMitmError(event: IRequestSessionHttpErrorEvent) {
    const tabId = this.mitmRequestSession.browserRequestMatcher.requestIdToTabId.get(
      event.request.browserRequestId,
    );

    const resource = this.sessionState.captureResourceError(tabId, event.request, event.error);
    if (event.request?.resourceType === 'Document') {
      const tab = this.tabs.find(x => x.id === tabId);
      tab?.checkForResolvedNavigation(event.request.browserRequestId, resource, event.error);
    }
  }

  private onResourceStates(event: IResourceStateChangeEvent) {
    this.sessionState.captureResourceState(event.context.id, event.context.stateChanges);
  }

  private onSocketClose(event: ISocketEvent) {
    this.sessionState.captureSocketEvent(event);
  }

  private onSocketConnect(event: ISocketEvent) {
    this.sessionState.captureSocketEvent(event);
  }

  private async onNewTab(
    parentTab: Tab,
    page: IPuppetPage,
    openParams: { url: string; windowName: string } | null,
  ) {
    const tab = Tab.create(this, page, parentTab, {
      ...openParams,
      loaderId: page.mainFrame.isDefaultUrl ? null : page.mainFrame.activeLoaderId,
    });
    this.sessionState.captureTab(tab.id, page.id, page.devtoolsSession.id, parentTab.id);
    this.registerTab(tab, page);

    await tab.isReady;

    parentTab.emit('child-tab-created', tab);
    return tab;
  }

  private registerTab(tab: Tab, page: IPuppetPage) {
    this.tabs.push(tab);
    tab.on('close', this.removeTab.bind(this, tab));
    page.popupInitializeFn = this.onNewTab.bind(this, tab);
    return tab;
  }

  private removeTab(tab: Tab) {
    const tabIdx = this.tabs.indexOf(tab);
    if (tabIdx >= 0) this.tabs.splice(tabIdx, 1);
    if (this.tabs.length === 0) {
      return this.close();
    }
  }

  private async newPage() {
    if (this._isClosing) throw new Error('Cannot create tab, shutting down');
    return await this.browserContext.newPage();
  }

  public static get(sessionId: string): Session {
    return this.byId[sessionId];
  }

  public static getTab(meta: ISessionMeta): Tab | undefined {
    if (!meta) return undefined;
    return this.get(meta.sessionId)?.getTab(meta.tabId);
  }
}
