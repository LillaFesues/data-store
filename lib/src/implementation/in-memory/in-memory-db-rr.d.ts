import { IStoreTargetItem, Parent, ValidKey } from '@normalized-db/core';
import { DenormalizerBuilder } from '@normalized-db/denormalizer';
import { NormalizerBuilder } from '@normalized-db/normalizer';
import { InMemoryDb } from './in-memory-db';
export declare class InMemoryDbRr extends InMemoryDb {
    protected buildNormalizer(): NormalizerBuilder;
    protected buildDenormalizer(): DenormalizerBuilder;
    protected overrideItem(typeResult: any[], index: number, item: any): void;
    protected removeTarget(parent: Parent, keys: ValidKey | ValidKey[], target: IStoreTargetItem): Promise<void>;
}
