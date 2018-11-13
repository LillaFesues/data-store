import { Command } from './command';
export interface ClearCommand extends Command<void> {
    execute(type?: string | string[]): Promise<boolean>;
}
