import { Depth, ValidKey } from '@normalized-db/core';
import { Predicate } from '../model/predicate';
import { Parent } from './model/parent';
export declare class QueryConfig {
    static readonly DEFAULT_OFFSET: number;
    static readonly DEFAULT_LIMIT: number;
    type: string;
    singleItem?: ValidKey;
    offset?: number;
    limit?: number;
    filter?: Predicate<any>;
    parent?: Parent;
    depth?: Depth;
}
