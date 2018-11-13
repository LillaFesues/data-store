import { IStoreConfig, ValidKey } from '@normalized-db/core';
import { IdbContext } from '../context/idb-context';
import { Command } from './command';
export declare abstract class BaseCommand<T> implements Command<T> {
    protected readonly _context: IdbContext;
    protected readonly _type: string;
    protected readonly _typeConfig: IStoreConfig;
    constructor(_context: IdbContext, _type: string);
    abstract execute(item: T): Promise<boolean>;
    protected hasKey(item: any): boolean;
    protected getKey(item: any): ValidKey;
    private readonly schema;
}
