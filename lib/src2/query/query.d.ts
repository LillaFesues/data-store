import { Depth, ValidKey } from '@normalized-db/core';
import { Predicate } from '../model/predicate';
import { BaseQuery } from './base-query';
import { MapFunc } from './map-reduce/map-func';
import { Mapper } from './map-reduce/mapper';
import { ReducerFunc } from './map-reduce/reduce-func';
import { Reducer } from './map-reduce/reducer';
import { QueryConfig } from './query-config';
import { Queryable } from './queryable';
export declare class Query<DbItem> extends BaseQuery<DbItem[]> implements Queryable<DbItem[]> {
    private _offset?;
    private _limit?;
    private _filter?;
    private _parent?;
    private _depth;
    offset(offset: number): Query<DbItem>;
    limit(limit: number): Query<DbItem>;
    filter(callback: Predicate<DbItem>): Query<DbItem>;
    parent(key: ValidKey, field: string): Query<DbItem>;
    depth(depth: Depth): Query<DbItem>;
    map<Result>(callback: MapFunc<DbItem, Result>): Mapper<DbItem, Result>;
    reduce<Result>(callback: ReducerFunc<DbItem, Result>, initialValue?: Result): Reducer<DbItem, void, Result>;
    result(noCache?: boolean): Promise<DbItem[]>;
    count(noCache?: boolean): Promise<number>;
    isEmpty(noCache?: boolean): Promise<boolean>;
    first(noCache?: boolean): Promise<DbItem>;
    firstOrDefault(defaultResult?: DbItem, noCache?: boolean): Promise<DbItem | null>;
    protected getQueryConfig(): QueryConfig;
}
