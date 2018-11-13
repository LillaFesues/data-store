import { NdbDocument } from '@normalized-db/core';
import { IdbContext } from '../../../context/idb-context/index';
import { ListResult } from '../../list-result/index';
import { QueryConfig } from '../../model/query-config';
import { QueryRunner } from '../query-runner';
import { IdbBaseDocumentQueryRunner } from './idb-base-document-query-runner';
export declare class IdbQueryRunner<Result extends NdbDocument> extends IdbBaseDocumentQueryRunner<Result> implements QueryRunner<Result> {
    constructor(context: IdbContext<any>, config: QueryConfig);
    execute(): Promise<ListResult<Result>>;
    private findAll(type?);
}
