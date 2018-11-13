import { NdbDocument } from '@normalized-db/core';
import { ListResult } from '../list-result/list-result';
export interface QueryRunner<Result extends NdbDocument> {
    execute(): Promise<ListResult<Result>>;
}
