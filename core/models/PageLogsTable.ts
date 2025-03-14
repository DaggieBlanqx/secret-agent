import { Database as SqliteDatabase } from 'better-sqlite3';
import SqliteTable from '@secret-agent/commons/SqliteTable';

export default class PageLogsTable extends SqliteTable<IPageLogRecord> {
  constructor(readonly db: SqliteDatabase) {
    super(db, 'PageLogs', [
      ['tabId', 'INTEGER'],
      ['frameId', 'TEXT'],
      ['type', 'TEXT'],
      ['message', 'TEXT'],
      ['timestamp', 'INTEGER'],
      ['location', 'TEXT'],
    ]);
  }

  public insert(
    tabId: number,
    frameId: string,
    type: string,
    message: string,
    date: Date,
    location?: string,
  ) {
    return this.queuePendingInsert([tabId, frameId, type, message, date.getTime(), location]);
  }
}

export interface IPageLogRecord {
  tabId: number;
  frameId: string;
  type: string;
  message: string;
  timestamp: number;
  location?: string;
}
