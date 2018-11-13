import { NdbDocument, ValidKey } from '@normalized-db/core';
import { DataStoreTypes } from '../model/data-store-types';
import { CountQuery } from '../query/count-query';
import { Query } from '../query/query';
import { SingleItemQuery } from '../query/single-item-query';
import { ClearOptions } from './options/clear-options';
import { CountOptions } from './options/count-options';
import { CreateOptions } from './options/create-options';
import { FindByKeyOptions } from './options/find-by-key-options';
import { FindOptions } from './options/find-options';
import { PutOptions } from './options/put-options';
import { RemoveOptions } from './options/remove-options';
import { SetOptions } from './options/set-options';
import { UpdateOptions } from './options/update-options';
export interface IDataStore<Types extends DataStoreTypes> {
    count<Item extends NdbDocument>(type: Types, options?: CountOptions): CountQuery<Item>;
    find<Result extends NdbDocument>(type: Types, options?: FindOptions): Query<Result>;
    findByKey<Result extends NdbDocument>(type: Types, key: ValidKey, options?: FindByKeyOptions): SingleItemQuery<Result>;
    create<Item extends NdbDocument>(type: Types, item: Item | Item[], options?: CreateOptions): Promise<boolean>;
    update<Item extends NdbDocument>(type: Types, item: Item | Item[], options?: UpdateOptions): Promise<boolean>;
    set<Data extends object>(type: Types, key: ValidKey, data: Data, options?: SetOptions): Promise<boolean>;
    put<Item extends NdbDocument>(type: Types, item: Item | Item[], options?: PutOptions): Promise<boolean>;
    remove<Item extends NdbDocument>(type: Types, item: Item | ValidKey, options?: RemoveOptions): Promise<boolean>;
    clear(type: string | string[], options?: ClearOptions): Promise<boolean>;
}
