import { ISchema } from '@normalized-db/core';
import { IDenormalizer } from '@normalized-db/denormalizer';
import { INormalizer } from '@normalized-db/normalizer';
import { Transaction } from 'idb';
import { CommandFactory } from '../command/command-factory';
import { QueryConfig } from '../query/query-config';
import { QueryRunner } from '../query/runner/query-runner';
import { Context } from './context';
export interface IdbConfig {
    name: string;
    version: number;
    upgrade?: (UpgradeDB) => void;
}
export declare class IdbContext extends Context {
    private readonly dbConfig;
    protected _isReady: boolean;
    private _db;
    constructor(schema: ISchema, normalizer: INormalizer, denormalizer: IDenormalizer, dbConfig: IdbConfig);
    init(): Promise<void>;
    queryRunner<Result>(config: QueryConfig): QueryRunner<Result>;
    commandFactory(): CommandFactory;
    read(stores?: string | string[]): Transaction;
    write(stores?: string | string[]): Transaction;
    private onUpgradeNeeded(upgradeDb);
}
