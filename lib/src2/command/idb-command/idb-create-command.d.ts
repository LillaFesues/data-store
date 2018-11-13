import { BaseCommand } from '../base-command';
import { CreateCommand } from '../create-command';
export declare class IdbCreateCommand<T> extends BaseCommand<T> implements CreateCommand<T> {
    execute(item: T): Promise<boolean>;
    private setKey(item);
}
