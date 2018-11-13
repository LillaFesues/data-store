import { NdbDocument } from '@normalized-db/core';
import { Predicate } from '../../model/predicate';
export declare class Filter<DbItem extends NdbDocument> {
    private readonly _predicate;
    readonly requiresDenormalization: boolean;
    constructor(_predicate: Predicate<DbItem>, requiresDenormalization?: boolean);
    test(item: DbItem): boolean | Promise<boolean>;
}
