import { ValidKey } from '@normalized-db/core';
export declare class NotFoundError extends Error {
    constructor(type: string, key: ValidKey);
}
