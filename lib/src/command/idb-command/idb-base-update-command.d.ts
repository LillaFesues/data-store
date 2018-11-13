import { NdbDocument } from '@normalized-db/core';
import { IdbBaseWriteCommand } from './idb-base-write-command';
export declare abstract class IdbBaseUpdateCommand<T extends NdbDocument> extends IdbBaseWriteCommand<T> {
    protected executeHelper(data: T | T[], isPartialUpdate?: boolean): Promise<boolean>;
    private checkExistence(objectStore, item);
}
