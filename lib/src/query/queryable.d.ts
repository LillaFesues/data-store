export interface Queryable<Result> {
    result(noCache?: boolean): Promise<Result>;
    invalidateCachedResult(): Promise<void>;
}
