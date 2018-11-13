import { NdbDocument } from '@normalized-db/core';
import { IdbContext } from '../../context/idb-context/idb-context';
import { Parent } from '../../model/parent';
import { PutCommand } from '../put-command';
import { IdbBaseWriteCommand } from './idb-base-write-command';
export declare class IdbPutCommand<T extends NdbDocument> extends IdbBaseWriteCommand<T> implements PutCommand<T> {
    constructor(context: IdbContext<any>, type: string);
    execute(data: T | T[], parent?: Parent | Parent[], isPartialUpdate?: boolean): Promise<boolean>;
    private setKey(item);
}
