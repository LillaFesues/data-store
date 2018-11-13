import { IdbContext } from '../../context/idb-context';
import { CommandFactory } from '../command-factory';
import { CreateCommand } from '../create-command';
import { RemoveCommand } from '../remove-command';
import { UpdateCommand } from '../update-command';
export declare class IdbCommandFactory implements CommandFactory {
    private readonly _context;
    private static _instance;
    static instance(context: IdbContext): IdbCommandFactory;
    private constructor();
    createCommand<Item>(type: string): CreateCommand<Item>;
    updateCommand<Item>(type: string): UpdateCommand<Item>;
    removeCommand<Item>(type: string): RemoveCommand<Item>;
}
