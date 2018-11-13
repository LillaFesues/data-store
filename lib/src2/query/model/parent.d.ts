import { ValidKey } from '@normalized-db/core';
export declare class Parent {
    readonly type: string;
    readonly key: ValidKey;
    readonly field: string;
    constructor(type: string, key: ValidKey, field: string);
}
