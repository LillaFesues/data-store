import { NdbDocument } from '@normalized-db/core';
import { Parent } from '../model/parent';
export declare class RefsWriteUtility {
    static add(item: NdbDocument, parent: Parent | Parent[]): void;
    private static addKey(refs, type, key);
}
