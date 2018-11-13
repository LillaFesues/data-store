import { NdbDocument } from '@normalized-db/core';
import { Parent } from '../model/parent';
import { Command } from './command';
export interface CreateCommand<T extends NdbDocument> extends Command<T | T[]> {
    execute(data: T | T[], parent?: Parent | Parent[]): Promise<boolean>;
}
