import { Depth, NdbDocument, ValidKey } from '@normalized-db/core';
import { Context } from '../context/context';
import { BaseQuery } from './base-query';
import { QueryConfig } from './model/query-config';
import { Queryable } from './queryable';
export declare class SingleItemQuery<DbItem extends NdbDocument> extends BaseQuery<DbItem | null> implements Queryable<DbItem | null> {
    private readonly _key;
    private _parent?;
    private _default?;
    private _depth;
    constructor(_context: Context<any>, _autoCloseContext: boolean, _type: string, _key: ValidKey);
    nested(key: ValidKey, field: string): this;
    reverse(sourceItem: NdbDocument): this;
    depth(depth: number | Depth): this;
    defaultValue(value: DbItem): this;
    result(noCache?: boolean): Promise<DbItem>;
    orDefault(noCache?: boolean): Promise<DbItem | null>;
    hasResult(noCache?: boolean): Promise<boolean>;
    protected getQueryConfig(): QueryConfig;
}
