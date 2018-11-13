import { Depth, ValidKey } from '@normalized-db/core';
import { Context } from '../context/context';
import { BaseQuery } from './base-query';
import { QueryConfig } from './query-config';
import { Queryable } from './queryable';
export declare class SingleItemQuery<DbItem> extends BaseQuery<DbItem | null> implements Queryable<DbItem | null> {
    private readonly _key;
    private _parent?;
    private _default?;
    private _depth;
    constructor(_context: Context, _type: string, _key: ValidKey);
    parent(key: ValidKey, field: string): SingleItemQuery<DbItem | null>;
    defaultValue(value: DbItem): SingleItemQuery<DbItem | null>;
    depth(depth: Depth): SingleItemQuery<DbItem | null>;
    result(noCache?: boolean): Promise<DbItem | null>;
    hasResult(noCache?: boolean): Promise<boolean>;
    protected getQueryConfig(): QueryConfig;
}
