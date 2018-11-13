import { IdbContext } from '../../../context/idb-context/index';
import { QueryConfig } from '../../model/query-config';
import { IdbBaseQueryRunner } from './idb-base-query-runner';
export declare class IdbCountQueryRunner extends IdbBaseQueryRunner implements IdbCountQueryRunner {
    private result;
    constructor(context: IdbContext<any>, config: QueryConfig);
    execute(): Promise<number>;
    private processCursorValue(value);
}
