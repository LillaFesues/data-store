import { ISchema } from '@normalized-db/core';
import { IDenormalizerBuilder } from '@normalized-db/denormalizer';
import { INormalizerBuilder } from '@normalized-db/normalizer';
import { DB, Transaction } from 'idb';
import { CommandFactory } from '../../command/command-factory';
import { IdbLogger } from '../../logging/idb-logging/idb-logger';
import { Logger } from '../../logging/logger';
import { DataStoreTypes } from '../../model/data-store-types';
import { QueryRunnerFactory } from '../../query/runner/query-runner-factory';
import { Context } from '../context';
import { IdbConfig } from './idb-config';
export declare class IdbContext<Types extends DataStoreTypes> extends Context<Types> {
    private readonly dbConfig;
    protected readonly _logger: IdbLogger<Types>;
    protected _db: DB;
    constructor(schema: ISchema, normalizerBuilder: INormalizerBuilder, denormalizerBuilder: IDenormalizerBuilder, dbConfig: IdbConfig);
    isReady(): boolean;
    open(): Promise<void>;
    close(): Promise<void>;
    queryRunnerFactory(): QueryRunnerFactory;
    commandFactory(): CommandFactory;
    logger(): Logger<Types, IdbContext<Types>>;
    objectStoreNames(autoCloseContext?: boolean): Promise<string[]>;
    read(stores?: string | string[]): Promise<Transaction>;
    write(stores?: string | string[]): Promise<Transaction>;
    private onUpgradeNeeded(upgradeDb);
}
