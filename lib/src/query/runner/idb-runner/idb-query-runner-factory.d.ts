import { NdbDocument } from '@normalized-db/core';
import { IdbContext } from '../../../context/idb-context/idb-context';
import { QueryConfig } from '../../model/query-config';
import { CountQueryRunner } from '../count-query-runner';
import { QueryRunner } from '../query-runner';
import { QueryRunnerFactory } from '../query-runner-factory';
import { SingleItemQueryRunner } from '../single-item-query-runner';
export declare class IdbQueryRunnerFactory implements QueryRunnerFactory {
    private readonly _context;
    private static _instance;
    static instance(context: IdbContext<any>): IdbQueryRunnerFactory;
    private constructor();
    countQueryRunner(config: QueryConfig): CountQueryRunner;
    queryRunner<Result extends NdbDocument>(config: QueryConfig): QueryRunner<Result>;
    singleItemQueryRunner<Result extends NdbDocument>(config: QueryConfig): SingleItemQueryRunner<Result>;
}
