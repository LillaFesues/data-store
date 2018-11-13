import { EventType, ValidKey } from '@normalized-db/core';
import { DataStoreTypes } from '../model/data-store-types';
export declare abstract class BaseEvent<Types extends DataStoreTypes, T> {
    readonly eventType: EventType;
    readonly dataStoreType: Types;
    readonly item: T;
    readonly itemKey: ValidKey;
    readonly time: Date;
    constructor(eventType: EventType, dataStoreType: Types, item: T, itemKey: ValidKey);
}
