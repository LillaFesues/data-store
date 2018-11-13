import { ValidKey } from '@normalized-db/core';
import { Context } from './context/context';
import { DataStoreTypes } from './model/data-store-types';
import { Query } from './query/query';
import { SingleItemQuery } from './query/single-item-query';
export declare class DataStore<Types extends DataStoreTypes> {
    private readonly _context;
    constructor(_context: Context);
    find<Result>(type: Types): Query<Result>;
    findByKey<Result>(type: Types, key: ValidKey): SingleItemQuery<Result>;
    create<Item>(type: Types, item: Item): Promise<boolean>;
    update<Item>(type: Types, item: Item): Promise<boolean>;
    remove<Item>(type: Types, item: Item): Promise<boolean>;
}
