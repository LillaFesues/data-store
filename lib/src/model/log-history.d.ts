import { ValidKey } from '@normalized-db/core';
import { LogEntry } from './log-entry';
export declare class LogHistory<Key extends ValidKey, T> {
    private readonly map;
    entries(key?: Key): LogEntry<Key, T>[] | Map<Key, LogEntry<Key, T>[]>;
    add(logEntry: LogEntry<Key, T>): void;
}
