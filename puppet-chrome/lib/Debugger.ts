import IDevtoolsSession from '@secret-agent/interfaces/IDevtoolsSession';
import Protocol from 'devtools-protocol';
import IPuppetDebugger, {
  ICatchBreakpointCallbackArgs,
} from '@secret-agent/interfaces/IPuppetDebugger';
import PausedEvent = Protocol.Debugger.PausedEvent;
import SearchMatch = Protocol.Debugger.SearchMatch;
import SetBreakpointResponse = Protocol.Debugger.SetBreakpointResponse;
import CallFrame = Protocol.Debugger.CallFrame;

export default class Debugger implements IPuppetDebugger {
  public urlsByScriptId = new Map<string, string>();
  private onNewScriptFns: ((url: string, scriptId: string) => Promise<any>)[] = [];
  private devtoolsSession: IDevtoolsSession;
  private isActivated = false;

  private catchBreakpointIdsToHandlers = new Map<
    string,
    {
      matchCondition: (variableName: string) => string;
      callbackFn: (args: ICatchBreakpointCallbackArgs) => Promise<void>;
    }[]
  >();

  constructor(devtoolsSession: IDevtoolsSession) {
    this.devtoolsSession = devtoolsSession;
    this.devtoolsSession.on('Debugger.paused', this.onPaused.bind(this));
  }

  public async modifyStacktraces(
    excludeScriptUrls: string[],
    ...exceptionHandlers: {
      matchCondition: (variableName: string) => string;
      callbackFn: (args: ICatchBreakpointCallbackArgs) => Promise<void>;
    }[]
  ): Promise<void> {
    await this.activate();
    await this.devtoolsSession.send('Debugger.setInstrumentationBreakpoint', {
      instrumentation: 'beforeScriptExecution',
    });
    this.onNewScriptFns.push(
      this.registerCatchBlockBreakpoints.bind(this, excludeScriptUrls, exceptionHandlers),
    );
  }

  public setBreakpoint(
    scriptId: string,
    lineNumber: number,
    condition?: string,
    columnNumber?: number,
  ): Promise<SetBreakpointResponse> {
    return this.devtoolsSession.send('Debugger.setBreakpoint', {
      location: {
        scriptId,
        lineNumber,
        columnNumber,
      },
      condition,
    });
  }

  public async searchScript(
    scriptId: string,
    search: RegExp | string,
    lineNumber?: number,
  ): Promise<SearchMatch[]> {
    let isRegex = false;
    let query = search as string;
    if (search instanceof RegExp) {
      query = search.source;
      isRegex = true;
    }
    const points = await this.devtoolsSession.send('Debugger.searchInContent', {
      scriptId,
      isRegex,
      query,
    });
    if (lineNumber !== undefined) {
      return points.result.filter(x => x.lineNumber === lineNumber);
    }
    return points.result;
  }

  private async activate(): Promise<void> {
    if (this.isActivated) return;
    this.isActivated = true;

    await this.devtoolsSession.send('Debugger.enable');
  }

  private async onPaused(event: PausedEvent): Promise<void> {
    if (event.reason === 'instrumentation') {
      const { url, scriptId } = event.data;
      this.urlsByScriptId.set(scriptId, url);
      await Promise.all(this.onNewScriptFns.map(x => x(url, scriptId)));
    }

    if (event.reason === 'other' && event.hitBreakpoints?.length) {
      await this.onBreakpointHit(event.callFrames[0], event.hitBreakpoints);
    }
    await this.devtoolsSession.send('Debugger.resume');
  }

  private async registerCatchBlockBreakpoints(
    excludeScriptUrls: string[],
    exceptionHandlers: {
      matchCondition: (variableName: string) => string;
      callbackFn: (callback: ICatchBreakpointCallbackArgs) => Promise<void>;
    }[],
    url: string,
    scriptId: string,
  ): Promise<void> {
    if (excludeScriptUrls.includes(url)) return;

    const searchResults = await this.searchScript(scriptId, new RegExp(/\s*catch\s*\(/));
    for (const result of searchResults) {
      const matches = result.lineContent.match(/\s*catch\s*\((\w+)[)|\s*=>]/);
      const variableName = matches ? matches[1].replace(/\(\)/g, '') : null;
      if (!variableName) {
        console.log('no match', result.lineContent);
        continue;
      }

      const conditions = exceptionHandlers.map(x => x.matchCondition(variableName)).join(' || ');
      const breakpoint = await this.setBreakpoint(scriptId, result.lineNumber, conditions).catch(
        () => null,
      );
      if (breakpoint) {
        this.catchBreakpointIdsToHandlers.set(breakpoint.breakpointId, exceptionHandlers);
      }
    }
  }

  private async onBreakpointHit(callFrame: CallFrame, breakpoints: string[]): Promise<void> {
    const callFrameId = callFrame.callFrameId;

    for (const breakpoint of breakpoints) {
      const handlers = this.catchBreakpointIdsToHandlers.get(breakpoint);
      if (handlers?.length) {
        const objectId = callFrame.scopeChain[0]?.object?.objectId;
        if (!objectId) return;

        const conditions = handlers.map(x => x.matchCondition('error'));
        const { result } = await this.devtoolsSession.send('Runtime.callFunctionOn', {
          functionDeclaration: `function(){
          const error = Object.values(this)[0];
          const matchingIndex = [${conditions.join(', ')}].findIndex(Boolean);
          return JSON.stringify({
            matchingIndex,
            error: {
                stack: error.stack,
                message: error.message,
                name: error.name,
                constructor: error.constructor ? error.constructor.name : '',
                ...error
             }
           });
          }`,
          objectId,
          returnByValue: true,
        });

        const { error, matchingIndex } = JSON.parse(result.value);

        const catchBreakpoint = handlers[matchingIndex];

        const [lineNumber, position] = error.stack
          .split(/\r?\n/)[1]
          .split(':')
          .slice(-2)
          .map(x => x.replace(/[^\d]/g, ''))
          .map(Number);

        const scriptId = callFrame.location.scriptId;
        await catchBreakpoint.callbackFn({
          // line reports 1 spot off from where search finds them
          sourceLocation: {
            scriptId,
            lineNumber: lineNumber - 1,
            position,
          },
          callFunctionOnError: (functionDeclaration: string): Promise<any> => {
            return this.devtoolsSession.send('Runtime.callFunctionOn', {
              functionDeclaration: `function(){
          const error = Object.values(this)[0];
          (${functionDeclaration}).call(error);
      }`,
              objectId,
            });
          },
          evaluateOnCallFrame: async (expression: string): Promise<any> => {
            const response = await this.devtoolsSession.send('Debugger.evaluateOnCallFrame', {
              callFrameId,
              expression,
            });
            return response.result.value;
          },
          searchSource: (search, lineNumber1) => {
            return this.searchScript(scriptId, search, lineNumber1);
          },
          error,
        });
      }
    }
  }
}
