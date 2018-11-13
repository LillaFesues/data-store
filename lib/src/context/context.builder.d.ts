import { ISchema, ISchemaConfig } from '@normalized-db/core';
import { IDenormalizerBuilder } from '@normalized-db/denormalizer';
import { INormalizerBuilder } from '@normalized-db/normalizer';
import { LogConfig } from '../logging/config/log-config';
import { DataStoreTypes } from '../model/data-store-types';
import { Context } from './context';
export declare abstract class ContextBuilder<Types extends DataStoreTypes, Ctx extends Context<Types>> {
    protected _schema: ISchema;
    protected _normalizerBuilder: INormalizerBuilder;
    protected _denormalizerBuilder: IDenormalizerBuilder;
    protected _enableLogging?: boolean | LogConfig<Types>;
    schema(value: ISchema): this;
    schemaConfig(value: ISchemaConfig): this;
    normalizerBuilder(value: INormalizerBuilder): this;
    denormalizerBuilder(value: IDenormalizerBuilder): this;
    enableLogging(value?: boolean | LogConfig<Types>): this;
    abstract build(): Ctx;
}
