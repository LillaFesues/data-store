import { BaseEvent } from '../base-event';
import { EventPipe } from './event-pipe';
export declare class EventQueue {
    private readonly _eventPipe;
    private readonly _queue;
    constructor(_eventPipe: EventPipe<any>);
    enqueue(event: BaseEvent<any, any>): void;
    notify(): void;
}
