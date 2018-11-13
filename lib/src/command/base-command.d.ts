import { ISchema, IStore, IStoreConfig, NdbDocument, NormalizedData, ValidKey } from '@normalized-db/core';
import { Context } from '../context/context';
import { EventQueue } from '../event/utility/event-queue';
import { Command } from './command';
export declare abstract class BaseCommand<T, Ctx extends Context<any>> implements Command<T> {
    protected readonly _context: Ctx;
    protected readonly _type: string;
    protected readonly _typeConfig: IStore;
    protected readonly _eventQueue: EventQueue;
    constructor(_context: Ctx, _type: string, typeIsOptional?: boolean);
    protected readonly schema: ISchema;
    protected hasKey(item: NdbDocument, config?: IStoreConfig): boolean;
    protected getKey(item: NdbDocument, config?: IStoreConfig, isNullAllowed?: boolean): ValidKey | null;
    protected getTypes(normalizedData: NormalizedData): string[];
    protected onSuccess(): void;
}
