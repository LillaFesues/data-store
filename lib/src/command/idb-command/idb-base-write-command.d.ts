import { NdbDocument } from '@normalized-db/core';
import { IdbContext } from '../../context/idb-context/idb-context';
import { Parent } from '../../model/parent';
import { IdbBaseCommand } from './idb-base-command';
export declare abstract class IdbBaseWriteCommand<T extends NdbDocument> extends IdbBaseCommand<T | T[]> {
    constructor(context: IdbContext<any>, type: string);
    write(data: T | T[], parent?: Parent | Parent[], isPartialUpdate?: boolean): Promise<boolean>;
    private updateCursor(cursor, newItem, isPartialUpdate);
    private addToParents(transaction, parent, keys);
    private addToParent(transaction, parent, keys);
    private addKeysToParentsHelper(transaction, parent, parentItem, keys);
    private getLatestKey(objectStore);
}
