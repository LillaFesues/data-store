import { ValidKey } from '@normalized-db/core';
import { Subject } from 'rxjs/Subject';
import { DataStore } from './data-store';
import { ObserveResult } from './model/observe-result';
export declare class ObservedDataStore extends DataStore {
    readonly onPut: Subject<ObserveResult>;
    readonly onRemoved: Subject<ObserveResult>;
    readonly onCleared: Subject<ObserveResult>;
    readonly onChanged: Subject<ObserveResult>;
    put<T>(data: T | T[], type: string): Promise<void>;
    remove<Key extends ValidKey>(keys: Key | Key[], type: string): Promise<Key[]>;
    protected clearType(type: string): Promise<void>;
    private notify(action, type, data?);
}
