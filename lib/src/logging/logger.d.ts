import { LogMode } from '@normalized-db/core';
import { Context } from '../context/context';
import { BaseEvent } from '../event/base-event';
import { EventRegistration } from '../event/utility/event-registration';
import { OnDataChanged } from '../event/utility/on-data-changed';
import { DataStoreTypes } from '../model/data-store-types';
import { ClearLogsOptions } from './clear-command/clear-logs-options';
import { LogConfig } from './config/log-config';
import { LogQuery } from './query/log-query';
import { LogQueryConfig } from './query/log-query-config';
import { LogQueryRunner } from './query/log-query-runner';
export declare abstract class Logger<Types extends DataStoreTypes, Ctx extends Context<Types>> implements OnDataChanged {
    protected readonly _context: Ctx;
    private readonly _eventPipe;
    private readonly _schemaLogConfig;
    private _config;
    constructor(_context: Ctx);
    enable(enable?: boolean | LogConfig<Types>): EventRegistration<Types> | undefined;
    disable(): void;
    logs(autoCloseContext?: boolean): LogQuery<Types>;
    abstract queryRunner(config: LogQueryConfig): LogQueryRunner<Types>;
    abstract ndbOnDataChanged(event: BaseEvent<Types, any>): void | Promise<void>;
    abstract clear(options?: ClearLogsOptions<Types>): Promise<boolean>;
    protected isLoggingEnabled(type: Types, event: BaseEvent<Types, any>): boolean;
    protected getLogMode(type: Types): LogMode;
}
