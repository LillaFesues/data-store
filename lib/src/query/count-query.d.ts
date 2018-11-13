import { Depth, NdbDocument } from '@normalized-db/core';
import { Predicate } from '../model/predicate';
import { BaseQuery } from './base-query';
import { QueryConfig } from './model/query-config';
import { Queryable } from './queryable';
export declare class CountQuery<DbItem extends NdbDocument> extends BaseQuery<number> implements Queryable<number> {
    private _filter?;
    private _depth;
    filter(predicate: Predicate<DbItem>, requiresDenormalization?: boolean): this;
    depth(depth: number | Depth): this;
    result(noCache?: boolean): Promise<number>;
    protected getQueryConfig(): QueryConfig;
}
