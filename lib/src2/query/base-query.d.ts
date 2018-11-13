import { ISchema } from '@normalized-db/core';
import { Context } from '../context/context';
import { QueryConfig } from './query-config';
import { Queryable } from './queryable';
export declare abstract class BaseQuery<Result> implements Queryable<Result> {
    protected readonly _context: Context;
    protected readonly _type: string;
    protected _cachedResult?: Result;
    constructor(_context: Context, _type: string);
    abstract result(noCache?: boolean): Promise<Result>;
    invalidateCachedResult(): Promise<void>;
    protected getQueryConfig(): QueryConfig;
    protected readonly schema: ISchema;
}
