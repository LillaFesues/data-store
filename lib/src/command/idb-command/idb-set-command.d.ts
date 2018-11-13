import { ValidKey } from '@normalized-db/core';
import { SetCommand } from '../set-command';
import { IdbBaseUpdateCommand } from './idb-base-update-command';
export declare class IdbSetCommand<T extends object> extends IdbBaseUpdateCommand<T> implements SetCommand<T> {
    execute(key: ValidKey, data: T): Promise<boolean>;
}
