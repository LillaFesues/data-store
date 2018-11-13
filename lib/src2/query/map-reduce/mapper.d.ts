import { Query } from '../query';
import { Queryable } from '../queryable';
import { MapFunc } from './map-func';
import { ReducerFunc } from './reduce-func';
import { Reducer } from './reducer';
export declare class Mapper<QueryResult, Result> implements Queryable<Result[]> {
    readonly query: Query<QueryResult>;
    private readonly _callback;
    private _cachedResult?;
    constructor(query: Query<QueryResult>, _callback: MapFunc<QueryResult, Result>);
    reduce<ReducerResult>(callback: ReducerFunc<Result, ReducerResult>, initialValue?: ReducerResult): Reducer<QueryResult, Result, ReducerResult>;
    result(noCache?: boolean): Promise<Result[]>;
    invalidateCachedResult(): Promise<void>;
    queryResult(noCache?: boolean): Promise<QueryResult[]>;
}
