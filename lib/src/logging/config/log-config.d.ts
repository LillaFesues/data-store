import { EventType, ILogConfig, IStoreLogConfig, LogMode, ValidKey } from '@normalized-db/core';
import { DataStoreTypes } from '../../model/data-store-types';
export declare class LogConfig<Types extends DataStoreTypes> implements ILogConfig {
    private readonly _defaultConfig;
    private readonly _types;
    constructor(types: Map<Types, IStoreLogConfig>, defaultConfig?: IStoreLogConfig);
    hasType(type: Types): boolean;
    getConfig(type: Types): IStoreLogConfig;
    getLogMode(type: Types, orDefault?: LogMode.Disabled): LogMode;
    getEventTypes(type: Types, orDefault?: EventType[]): EventType[];
    getKeys(type: Types, orDefault?: ValidKey[]): ValidKey[];
    isLoggingEnabled(type: Types, eventType?: EventType, key?: ValidKey): boolean;
}
