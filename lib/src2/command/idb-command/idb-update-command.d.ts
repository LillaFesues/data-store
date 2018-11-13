import { BaseCommand } from '../base-command';
import { UpdateCommand } from '../update-command';
export declare class IdbUpdateCommand<T> extends BaseCommand<T> implements UpdateCommand<T> {
    execute(item: T): Promise<boolean>;
    private updateRefs(oldItem, newItem);
}
