import { NdbDocument, ValidKey } from '@normalized-db/core';
import { IdbContext } from '../../context/idb-context/idb-context';
import { RemoveCommand } from '../remove-command';
import { IdbBaseCommand } from './idb-base-command';
export declare class IdbRemoveCommand<T extends NdbDocument> extends IdbBaseCommand<T | ValidKey> implements RemoveCommand<T> {
    constructor(context: IdbContext<any>, type: string);
    execute(data: T | ValidKey): Promise<boolean>;
    private executeRecursive(type, item, transaction, objectStore);
    private cascadeRemoval(transaction, targets, type, oldItem);
    private removeTarget(transaction, parentType, parentKey, targetType, targetKeys);
    private updateParents(transaction, oldItemType, oldItem);
    private getParentFields(oldItemType, parentConfig);
    private removeFromParent(oldItemType, oldItem, oldItemKey, parentObjectStore, parentKey, fields);
}
