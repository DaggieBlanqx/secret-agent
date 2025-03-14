import { Database as SqliteDatabase } from 'better-sqlite3';
import SqliteTable from '@secret-agent/commons/SqliteTable';
import { IScrollEvent } from '@secret-agent/interfaces/IScrollEvent';

export default class ScrollEventsTable extends SqliteTable<IScrollRecord> {
  constructor(readonly db: SqliteDatabase) {
    super(db, 'ScrollEvents', [
      ['tabId', 'INTEGER'],
      ['scrollX', 'INTEGER'],
      ['scrollY', 'INTEGER'],
      ['commandId', 'INTEGER'],
      ['timestamp', 'INTEGER'],
    ]);
  }

  public insert(tabId: number, commandId: number, scrollEvent: IScrollEvent) {
    const [scrollX, scrollY, timestamp] = scrollEvent;
    const record = [tabId, scrollX, scrollY, commandId, timestamp];
    this.queuePendingInsert(record);
  }
}

export interface IScrollRecord {
  tabId: number;
  scrollX: number;
  scrollY: number;
  commandId: number;
  timestamp: number;
}
