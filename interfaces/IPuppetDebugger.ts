import Protocol from 'devtools-protocol';
import SearchMatch = Protocol.Debugger.SearchMatch;
import SetBreakpointResponse = Protocol.Debugger.SetBreakpointResponse;

export default interface IPuppetDebugger {
  modifyStacktraces(
    excludeScriptUrls: string[],
    ...exceptionHandlers: IExceptionRewriter[]
  ): Promise<void>;

  searchScript(
    scriptId: string,
    search: RegExp | string,
    lineNumber?: number,
  ): Promise<SearchMatch[]>;

  setBreakpoint(
    scriptId: string,
    lineNumber: number,
    condition?: string,
    columnNumber?: number,
  ): Promise<SetBreakpointResponse>;
}

export interface IExceptionRewriter {
  matchCondition: (variableName: string) => string;
  callbackFn: (args: ICatchBreakpointCallbackArgs) => Promise<void>;
}

export interface ICatchBreakpointCallbackArgs {
  sourceLocation: {
    scriptId: string;
    lineNumber: number;
    position: number;
  };
  callFunctionOnError: (functionDeclaration: string) => Promise<any>;
  evaluateOnCallFrame: (expression: string) => Promise<any>;
  searchSource: (search: string, lineNumber?: number) => Promise<SearchMatch[]>;
  error: Error;
}
