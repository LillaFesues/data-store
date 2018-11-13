import { IdbContext } from '../../context/idb-context/idb-context';
import { BaseCommand } from '../base-command';
import { Command } from '../command';
export declare abstract class IdbBaseCommand<T> extends BaseCommand<T, IdbContext<any>> implements Command<T> {
    constructor(context: IdbContext<any>, type: string, typeIsOptional?: boolean);
}
