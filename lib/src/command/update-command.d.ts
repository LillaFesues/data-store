import { NdbDocument } from '@normalized-db/core';
import { Command } from './command';
export interface UpdateCommand<T extends NdbDocument> extends Command<T | T[]> {
    execute(data: T | T[], isPartialUpdate?: boolean): Promise<boolean>;
}
