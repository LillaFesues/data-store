import { DataStoreTypes } from '../../model/data-store-types';
import { BaseEvent } from '../base-event';
import { EventRegistrationBuilder } from './event-registration.builder';
import { OnDataChanged } from './on-data-changed';
export declare class EventPipe<Types extends DataStoreTypes> {
    private readonly _registrations;
    register(listener: OnDataChanged): EventRegistrationBuilder<Types>;
    unregister(listener: OnDataChanged): void;
    notify(event: BaseEvent<Types, any>): void;
}
