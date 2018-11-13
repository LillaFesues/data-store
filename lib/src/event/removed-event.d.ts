import { NdbDocument, ValidKey } from '@normalized-db/core';
import { DataStoreTypes } from '../model/data-store-types';
import { Parent } from '../model/parent';
import { BaseEvent } from './base-event';
export declare class RemovedEvent<Types extends DataStoreTypes, T extends NdbDocument> extends BaseEvent<Types, T> {
    readonly parent: Parent;
    constructor(type: Types, item: T, itemKey: ValidKey, parent?: Parent);
}
