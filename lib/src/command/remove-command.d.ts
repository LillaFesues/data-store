import { NdbDocument, ValidKey } from '@normalized-db/core';
import { Command } from './command';
export interface RemoveCommand<T extends NdbDocument> extends Command<T | ValidKey> {
    execute(data: T | ValidKey): Promise<boolean>;
}
