import { ListResult } from '../list-result/list-result';
import { Query } from '../query';
import { Queryable } from '../queryable';
import { Mapper } from './mapper';
import { ReducerFunc } from './reduce-func';
export declare class Reducer<QueryResult, MapperResult, Result> implements Queryable<Result> {
    readonly query: Query<QueryResult>;
    readonly mapper: Mapper<QueryResult, MapperResult>;
    private readonly _callback;
    private readonly _initialValue;
    private _cachedResult?;
    constructor(query: Query<QueryResult>, mapper: Mapper<QueryResult, MapperResult>, _callback: ReducerFunc<MapperResult, Result>, _initialValue?: Result);
    result(noCache?: boolean): Promise<Result>;
    invalidateCachedResult(): Promise<void>;
    readonly parent: Queryable<ListResult<any>>;
    queryResult(noCache?: boolean): Promise<ListResult<QueryResult>>;
    mapResult(noCache?: boolean): Promise<ListResult<QueryResult | MapperResult>>;
}
