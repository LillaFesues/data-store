import { NdbDocument } from '@normalized-db/core';
export declare type MapFunc<Input extends NdbDocument, Result> = (item: Input, idx: number, array: Input[]) => Result | Promise<Result>;
