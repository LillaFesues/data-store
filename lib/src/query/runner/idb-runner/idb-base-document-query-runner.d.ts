import { NdbDocument, ValidKey } from '@normalized-db/core';
import { Transaction } from 'idb';
import { ListResult } from '../../list-result/index';
import { IdbBaseQueryRunner } from './idb-base-query-runner';
export declare abstract class IdbBaseDocumentQueryRunner<Result extends NdbDocument> extends IdbBaseQueryRunner {
    protected _transaction: Transaction;
    protected findAllByKeys(keys: ValidKey[], type?: string): Promise<ListResult<Result>>;
    protected findByKey(type?: string, key?: ValidKey): Promise<Result>;
    protected findInParent(): Promise<Result | ListResult<Result>>;
    protected createListResult(items: Result[], total: number): ListResult<Result>;
}
