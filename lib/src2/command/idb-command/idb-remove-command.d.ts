import { ValidKey } from '@normalized-db/core';
import { BaseCommand } from '../base-command';
import { RemoveCommand } from '../remove-command';
export declare class IdbRemoveCommand<T> extends BaseCommand<T | ValidKey> implements RemoveCommand<T | ValidKey> {
    execute(item: T | ValidKey): Promise<boolean>;
    private cascadeRemoval(oldItem);
    private updateRefs(oldItem);
    private updateParents(oldItem);
}
