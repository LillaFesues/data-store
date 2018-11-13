import { IdbContext } from '../../context/idb-context';
import { QueryConfig } from '../query-config';
import { QueryRunner } from './query-runner';
export declare class IdbQueryRunner<Result> implements QueryRunner<Result> {
    private readonly _context;
    private readonly _config;
    private readonly _schema;
    constructor(_context: IdbContext, _config: QueryConfig);
    execute(): Promise<Result[]>;
    private findAll(type?, transaction?);
    private findAllByKeys(keys, type?, transaction?);
    private findByKey(type?, key?, transaction?);
    private findInParent();
}
