import { NdbDocument } from '@normalized-db/core';
import { UpdateCommand } from '../update-command';
import { IdbBaseUpdateCommand } from './idb-base-update-command';
export declare class IdbUpdateCommand<T extends NdbDocument> extends IdbBaseUpdateCommand<T> implements UpdateCommand<T> {
    execute(data: T | T[], isPartialUpdate?: boolean): Promise<boolean>;
}
