import { IStoreTargetItem, Parent, ValidKey } from '@normalized-db/core';
import { DenormalizerBuilder } from '@normalized-db/denormalizer';
import { NormalizerBuilder } from '@normalized-db/normalizer';
import { Cursor, ObjectStore } from 'idb';
import { IndexedDb } from './indexed-db';
export declare class IndexedDbRr extends IndexedDb {
    addNested<Key extends ValidKey, T>(key: Key, type: string, nestedItem: T, field: string): Promise<boolean>;
    removeNested<Key extends ValidKey, T>(key: Key, type: string, nestedItem: T, field: string): Promise<boolean>;
    protected buildNormalizer(): NormalizerBuilder;
    protected buildDenormalizer(): DenormalizerBuilder;
    protected persist(objectStore: ObjectStore, data: any[], type: string): Promise<void>;
    protected persistItem(objectStore: ObjectStore, item: any, key: ValidKey, cursor?: Cursor): Promise<void>;
    protected persistRemoveNested(key: ValidKey, type: string, parent: Parent): Promise<void>;
    protected removeTarget(parent: Parent, targetKeys: ValidKey | ValidKey[], target: IStoreTargetItem): Promise<void>;
}
