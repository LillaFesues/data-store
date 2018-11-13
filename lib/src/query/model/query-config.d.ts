import { Depth, ValidKey } from '@normalized-db/core';
import { NdbDocument } from '@normalized-db/core/lib/src/model/ndb-document';
import { Parent } from '../../model/parent';
import { Filter } from './filter';
import { OrderBy } from './order-by';
export declare class QueryConfig {
    static readonly DEFAULT_OFFSET: number;
    static readonly DEFAULT_LIMIT: number;
    type: string;
    parent?: Parent;
    depth?: number | Depth;
    singleItem?: ValidKey;
    offset?: number;
    limit?: number;
    keys?: ValidKey[];
    filter?: Filter<NdbDocument>;
    orderBy?: OrderBy;
}
