import { ISchema, ValidKey } from '@normalized-db/core';
import { IDenormalizerBuilder } from '@normalized-db/denormalizer';
import { INormalizer, INormalizerBuilder } from '@normalized-db/normalizer';
import { CommandFactory } from '../command/command-factory';
import { EventPipe } from '../event/utility/event-pipe';
import { Logger } from '../logging/logger';
import { DataStoreTypes } from '../model/data-store-types';
import { QueryRunnerFactory } from '../query/runner/query-runner-factory';
export declare abstract class Context<Types extends DataStoreTypes> {
    protected readonly _schema: ISchema;
    protected readonly _normalizerBuilder: INormalizerBuilder;
    protected readonly _denormalizerBuilder: IDenormalizerBuilder;
    readonly eventPipe: EventPipe<Types>;
    private readonly _normalizer;
    private readonly _uniqueKeyCallback;
    protected constructor(_schema: ISchema, _normalizerBuilder: INormalizerBuilder, _denormalizerBuilder: IDenormalizerBuilder);
    abstract isReady(): boolean;
    abstract open(): Promise<void>;
    abstract close(): Promise<void>;
    schema(): ISchema;
    normalizer(): INormalizer;
    denormalizerBuilder(): IDenormalizerBuilder;
    newKey(type: string): ValidKey | Promise<ValidKey> | undefined;
    abstract queryRunnerFactory(): QueryRunnerFactory;
    abstract commandFactory(): CommandFactory;
    abstract logger(): Logger<Types, Context<Types>>;
}
