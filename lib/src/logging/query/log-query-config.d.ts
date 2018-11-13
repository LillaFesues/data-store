import { ValidKey } from '@normalized-db/core/lib/src/model/valid-key';
import { Parent } from '../../model/parent';
import { Predicate } from '../../model/predicate';
import { LogAction } from '../model/log-action';
import { LogEntry } from '../model/log-entry';
export declare class LogQueryConfig {
    dateRange: IDBKeyRange;
    type: string;
    key: ValidKey;
    action: LogAction;
    parent: Parent;
    filter: Predicate<LogEntry<any>>;
}
