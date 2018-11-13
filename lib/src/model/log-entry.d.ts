import { ValidKey } from '@normalized-db/core';
export declare class NestedValue<Key extends ValidKey> {
    readonly key: Key;
    readonly nestedKey: ValidKey;
    readonly field: string;
    readonly type: string;
    constructor(key: Key, nestedKey: ValidKey, field: string, type: string);
}
export declare class LogEntry<Key extends ValidKey, T> {
    readonly store: string;
    readonly action: 'create' | 'update' | 'remove' | 'addNested' | 'removedNested';
    readonly key: Key;
    readonly value: T | NestedValue<Key>;
    readonly time: Date;
    readonly id: number;
    constructor(store: string, action: 'create' | 'update' | 'remove' | 'addNested' | 'removedNested', key: Key, value?: T | NestedValue<Key>, time?: Date);
}
