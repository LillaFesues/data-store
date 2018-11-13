export interface CountQueryRunner {
    execute(): Promise<number>;
}
