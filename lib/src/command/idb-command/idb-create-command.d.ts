import { NdbDocument } from '@normalized-db/core';
import { IdbContext } from '../../context/idb-context/idb-context';
import { Parent } from '../../model/parent';
import { CreateCommand } from '../create-command';
import { IdbBaseWriteCommand } from './idb-base-write-command';
export declare class IdbCreateCommand<T extends NdbDocument> extends IdbBaseWriteCommand<T> implements CreateCommand<T> {
    constructor(context: IdbContext<any>, type: string);
    execute(data: T | T[], parent?: Parent | Parent[]): Promise<boolean>;
    private setKey(item);
}
