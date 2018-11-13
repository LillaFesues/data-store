import { IStoreLogConfig } from '@normalized-db/core';
import { DataStoreTypes } from '../../model/data-store-types';
import { LogConfig } from './log-config';
export declare class LogConfigBuilder<Types extends DataStoreTypes> {
    private readonly _types;
    private _defaultConfig;
    setDefault(config: IStoreLogConfig): this;
    hasType(type: Types): boolean;
    setType(type: Types, config: IStoreLogConfig): this;
    removeType(type: Types): this;
    build(): LogConfig<Types>;
}
