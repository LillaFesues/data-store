import { NdbDocument } from '@normalized-db/core';
export interface SingleItemQueryRunner<Result extends NdbDocument> {
    execute(): Promise<Result>;
}
