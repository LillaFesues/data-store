import { ValidKey } from '@normalized-db/core';
import { BaseOptionsBuilder } from '../../data-store/options/builder/base-options.builder';
import { DataStoreTypes } from '../../model/data-store-types';
import { ClearLogsOptions } from './clear-logs-options';
export declare class ClearLogsOptionsBuilder<Types extends DataStoreTypes> extends BaseOptionsBuilder<ClearLogsOptions<Types>> {
    private _types?;
    private _key?;
    types(value: Types | Types[]): this;
    key(value: ValidKey): this;
    build(): ClearLogsOptions<Types>;
}
