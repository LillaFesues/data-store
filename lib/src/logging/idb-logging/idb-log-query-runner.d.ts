import { IdbContext } from '../../context/idb-context/idb-context';
import { DataStoreTypes } from '../../model/data-store-types';
import { LogEntry } from '../model/log-entry';
import { LogQueryConfig } from '../query/log-query-config';
import { LogQueryRunner } from '../query/log-query-runner';
export declare class IdbLogQueryRunner<Types extends DataStoreTypes> implements LogQueryRunner<DataStoreTypes> {
    private readonly _context;
    private readonly _config;
    private readonly result;
    private transaction;
    private logStore;
    constructor(_context: IdbContext<Types>, _config: LogQueryConfig);
    execute(): Promise<LogEntry<Types>[]>;
    private start();
    private stop();
    private validate(logEntry);
}
