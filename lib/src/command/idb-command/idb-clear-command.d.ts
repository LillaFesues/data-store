import { IdbContext } from '../../context/idb-context/idb-context';
import { ClearCommand } from '../clear-command';
import { IdbBaseCommand } from './idb-base-command';
export declare class IdbClearCommand extends IdbBaseCommand<IdbContext<any>> implements ClearCommand {
    private readonly _includeLogs;
    constructor(context: IdbContext<any>, _includeLogs?: boolean);
    execute(type?: string | string[]): Promise<boolean>;
}
