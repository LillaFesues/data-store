import { ValidKey } from '@normalized-db/core';
import { Command } from './command';
export interface SetCommand<T extends object> extends Command<T> {
    execute(key: ValidKey, data: T): Promise<boolean>;
}
