import { EventSelection, ValidKey } from '@normalized-db/core';
import { DataStoreTypes } from '../../model/data-store-types';
import { EventRegistration } from './event-registration';
import { OnDataChanged } from './on-data-changed';
export declare class EventRegistrationBuilder<Types extends DataStoreTypes> {
    private readonly _registrations;
    private readonly _listener;
    private _eventSelection;
    private _dataStoreType;
    private _itemKey;
    constructor(_registrations: Map<OnDataChanged, EventRegistration<Types>>, _listener: OnDataChanged);
    eventType(value: EventSelection): this;
    type(value: Types | Types[]): this;
    itemKey(value: ValidKey | ValidKey[]): this;
    build(): EventRegistration<Types>;
}
