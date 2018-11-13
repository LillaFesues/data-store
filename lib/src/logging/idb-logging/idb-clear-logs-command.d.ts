import { IdbContext } from '../../context/idb-context/idb-context';
import { DataStoreTypes } from '../../model/data-store-types';
import { ClearLogsCommand } from '../clear-command/clear-logs-command';
import { ClearLogsOptions } from '../clear-command/clear-logs-options';
export declare class IdbClearLogsCommand<Types extends DataStoreTypes> implements ClearLogsCommand<Types> {
    private readonly _context;
    constructor(_context: IdbContext<Types>);
    execute(options?: ClearLogsOptions<Types>): Promise<boolean>;
    private clearTypes(options?);
    private clearItem(options?);
    private getWritableObjectStore();
}
