import { NdbDocument } from '@normalized-db/core';
import { IdbContext } from '../../context/idb-context/idb-context';
import { ClearCommand } from '../clear-command';
import { CommandFactory } from '../command-factory';
import { CreateCommand } from '../create-command';
import { PutCommand } from '../put-command';
import { RemoveCommand } from '../remove-command';
import { SetCommand } from '../set-command';
import { UpdateCommand } from '../update-command';
export declare class IdbCommandFactory implements CommandFactory {
    private readonly _context;
    private static _instance;
    static instance(context: IdbContext<any>): IdbCommandFactory;
    private constructor();
    createCommand<Item extends NdbDocument>(type: string): CreateCommand<Item>;
    updateCommand<Item extends NdbDocument>(type: string): UpdateCommand<Item>;
    setCommand<Data extends object>(type: string): SetCommand<Data>;
    putCommand<Item extends NdbDocument>(type: string): PutCommand<Item>;
    removeCommand<Item extends NdbDocument>(type: string): RemoveCommand<Item>;
    clearCommand(includeLogs?: boolean): ClearCommand;
}
