import { ValidKey } from '@normalized-db/core';
import { Parent } from '../query/model/parent';
export declare class ChildNotFoundError extends Error {
    constructor(parent: Parent, key?: ValidKey);
}
