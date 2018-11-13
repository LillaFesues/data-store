import { ISchema, ValidKey } from '@normalized-db/core';
import { IDenormalizer } from '@normalized-db/denormalizer';
import { IdbContext } from '../../../context/idb-context/index';
import { QueryConfig } from '../../model/query-config';
export declare abstract class IdbBaseQueryRunner {
    protected readonly _context: IdbContext<any>;
    protected readonly _config: QueryConfig;
    protected readonly _schema: ISchema;
    protected _isRunning: boolean;
    protected _denormalizer: IDenormalizer;
    constructor(_context: IdbContext<any>, _config: QueryConfig);
    protected start(): void;
    protected stop(): void;
    protected fetchCallback(type: string, keys: ValidKey | ValidKey[]): Promise<any | any[]>;
}
