import { NdbDocument } from '@normalized-db/core';
import { ListResult } from '../list-result/list-result';
import { Query } from '../query';
import { Queryable } from '../queryable';
import { MapFunc } from './map-func';
import { ReducerFunc } from './reduce-func';
import { Reducer } from './reducer';
export declare class Mapper<QueryResult extends NdbDocument, Result> implements Queryable<ListResult<Result>> {
    readonly query: Query<QueryResult>;
    private readonly _callback;
    private _cachedResult?;
    constructor(query: Query<QueryResult>, _callback: MapFunc<QueryResult, Result>);
    reduce<ReducerResult>(callback: ReducerFunc<Result, ReducerResult>, initialValue?: ReducerResult): Reducer<QueryResult, Result, ReducerResult>;
    result(noCache?: boolean): Promise<ListResult<Result>>;
    invalidateCachedResult(): Promise<void>;
    queryResult(noCache?: boolean): Promise<ListResult<QueryResult>>;
}
