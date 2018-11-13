import { IdbContext } from '../../../context/idb-context/idb-context';
import { QueryConfig } from '../../model/query-config';
import { SingleItemQueryRunner } from '../single-item-query-runner';
import { IdbBaseDocumentQueryRunner } from './idb-base-document-query-runner';
export declare class IdbSingleItemQueryRunner<Result> extends IdbBaseDocumentQueryRunner<Result> implements SingleItemQueryRunner<Result> {
    constructor(context: IdbContext<any>, config: QueryConfig);
    execute(): Promise<Result>;
}
