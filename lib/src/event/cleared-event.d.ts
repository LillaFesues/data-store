import { DataStoreTypes } from '../model/data-store-types';
import { BaseEvent } from './base-event';
export declare class ClearedEvent<Types extends DataStoreTypes> extends BaseEvent<Types, void> {
    constructor(type: Types);
}
