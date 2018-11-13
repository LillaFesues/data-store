import { DataStoreTypes } from '../../model/data-store-types';
import { ContextBuilder } from '../context.builder';
import { IdbContext } from './idb-context';
export declare class IdbContextBuilder<Types extends DataStoreTypes> extends ContextBuilder<Types, IdbContext<Types>> {
    protected _dbName: string;
    protected _dbVersion: number;
    protected _dbUpgrade: (UpgradeDB) => void;
    dbName(value: string): this;
    dbVersion(value: number): this;
    dbUpgrade(value: (UpgradeDB) => void): this;
    build(): IdbContext<Types>;
    protected isValid(): boolean;
}
