import { ISchema, UniqueKeyCallback } from '@normalized-db/core';
import { IDenormalizer } from '@normalized-db/denormalizer';
import { INormalizer } from '@normalized-db/normalizer';
import { CommandFactory } from '../command/command-factory';
import { QueryConfig } from '../query/query-config';
import { QueryRunner } from '../query/runner/query-runner';
export declare abstract class Context {
    protected readonly _schema: ISchema;
    protected readonly _normalizer: INormalizer;
    protected readonly _denormalizer: IDenormalizer;
    protected abstract _isReady: boolean;
    protected _keyGenerator: UniqueKeyCallback;
    constructor(_schema: ISchema, _normalizer: INormalizer, _denormalizer: IDenormalizer);
    init(): Promise<void>;
    readonly isReady: boolean;
    schema(): ISchema;
    normalizer(): INormalizer;
    denormalizer(): IDenormalizer;
    withKeyGenerator(keyGenerator: UniqueKeyCallback): this;
    abstract queryRunner<Result>(config: QueryConfig): QueryRunner<Result>;
    abstract commandFactory(): CommandFactory;
}
