import { UpgradeDB } from 'idb';
import { IdbContext } from '../../context/idb-context/idb-context';
import { BaseEvent } from '../../event/base-event';
import { OnDataChanged } from '../../event/utility/on-data-changed';
import { DataStoreTypes } from '../../model/data-store-types';
import { ClearLogsOptions } from '../clear-command/clear-logs-options';
import { Logger } from '../logger';
import { LogQueryConfig } from '../query/log-query-config';
import { LogQueryRunner } from '../query/log-query-runner';
export declare class IdbLogger<Types extends DataStoreTypes> extends Logger<Types, IdbContext<Types>> implements OnDataChanged {
    static readonly OBJECT_STORE: string;
    static readonly IDX_TIME: string;
    static readonly IDX_ACTION: string;
    static readonly IDX_TYPE: string;
    static readonly IDX_KEY: string;
    constructor(idbContext: IdbContext<Types>);
    onUpgradeNeeded(upgradeDb: UpgradeDB): void;
    queryRunner(config: LogQueryConfig): LogQueryRunner<Types>;
    ndbOnDataChanged(event: BaseEvent<Types, any>): Promise<void>;
    clear(options?: ClearLogsOptions<Types>): Promise<boolean>;
    private autoCloseContext(options);
}
