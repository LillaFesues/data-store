export interface Command<T> {
    execute(item: T): Promise<boolean>;
}
