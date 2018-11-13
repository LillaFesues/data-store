import { EventSelection, EventType, ValidKey } from '@normalized-db/core';
import { DataStoreTypes } from '../../model/data-store-types';
import { BaseEvent } from '../base-event';
import { OnDataChanged } from './on-data-changed';
export declare class EventRegistration<Types extends DataStoreTypes> {
    private readonly _listener;
    private _eventSelection;
    private _dataStoreType;
    private _itemKey;
    constructor(_listener: OnDataChanged, _eventSelection?: EventSelection, _dataStoreType?: Types | Types[], _itemKey?: ValidKey | ValidKey[]);
    addEventType(type: EventType): void;
    removeEventType(type: EventType): void;
    addDataStoreType(type: Types): void;
    removeDataStoreType(type: Types): void;
    addItemKey(key: ValidKey): void;
    removeItemKey(key: ValidKey): void;
    isMatching(event: BaseEvent<Types, any>): boolean;
    notify(event: BaseEvent<Types, any>): void;
}
