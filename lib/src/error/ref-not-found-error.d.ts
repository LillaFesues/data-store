import { ValidKey } from '@normalized-db/core';
export declare class RefNotFoundError extends Error {
    constructor(refType: string, key?: ValidKey);
}
