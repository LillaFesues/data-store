import { ISchema } from '@normalized-db/core';
import { IndexedDb } from '../../implementation/indexed-db/indexed-db';
import { LoggingConfig } from './logging-config';
export declare class IndexedDbConfig {
    private readonly name;
    private readonly version;
    private readonly upgrade;
    constructor(name: string, version: number, upgrade?: (UpgradeDB) => void);
    build(schema: ISchema, useReverseReferences?: boolean, logging?: LoggingConfig): Promise<IndexedDb>;
    readonly isValid: boolean;
}
