import { ISchema, ISchemaConfig, UniqueKeyCallback, ValidKey } from '@normalized-db/core';
import { DataStore } from '../data-store';
import { InMemoryDb } from '../implementation/in-memory/in-memory-db';
import { IndexedDb } from '../implementation/indexed-db/indexed-db';
import { LoggingCallback } from './model/logging-callback';
export declare class DataStoreBuilder {
    private schema;
    private useReverseReferences;
    private uniqueKeyCallback;
    private useObservers;
    private indexedDb;
    private logging;
    withSchema(schema: ISchema): DataStoreBuilder;
    withSchemaConfig(schemaConfig: ISchemaConfig): DataStoreBuilder;
    withReverseReferences(useReverseReferences: boolean): DataStoreBuilder;
    withUniqueKeyCallback(uniqueKeyCallback: UniqueKeyCallback): DataStoreBuilder;
    withObservers(useObservers: boolean): DataStoreBuilder;
    withIndexedDb(name: string, version: number, upgrade?: (UpgradeDB) => void): DataStoreBuilder;
    withLogging(prefix?: string, preCallback?: LoggingCallback<ValidKey, any>, isActive?: boolean): DataStoreBuilder;
    build(): Promise<DataStore>;
    protected buildIndexedDbImplementation(): Promise<IndexedDb>;
    protected buildInMemoryImplementation(): Promise<InMemoryDb>;
}
