import { ValidKey } from '@normalized-db/core/lib/src/model/valid-key';
import { BaseEvent } from '../../event/base-event';
import { DataStoreTypes } from '../../model/data-store-types';
import { Parent } from '../../model/parent';
import { LogAction } from './log-action';
export declare class LogEntry<Types extends DataStoreTypes> {
    readonly id: number;
    readonly time: Date;
    readonly action: LogAction;
    readonly type: Types;
    readonly key: ValidKey;
    readonly item?: any;
    readonly parent?: Parent;
    constructor(event: BaseEvent<Types, any>, includeData?: boolean);
}
