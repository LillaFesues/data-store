import { NdbDocument } from '@normalized-db/core';
export declare class ListResult<DbItem extends NdbDocument> {
    private readonly _items;
    private _total;
    private readonly _offset;
    private readonly _limit;
    static readonly DEFAULT_OFFSET: number;
    static readonly DEFAULT_LIMIT: number;
    constructor(_items?: DbItem[], _total?: number, _offset?: number, _limit?: number);
    readonly items: DbItem[];
    readonly first: DbItem | null;
    readonly total: number;
    readonly offset: number;
    readonly limit: number;
    readonly isEmpty: boolean;
    readonly hasItems: boolean;
    readonly hasBoundaries: boolean;
    push(item: DbItem): void;
    unshift(item: DbItem): void;
    remove(item: DbItem): void;
    removeAt(index: number): void;
}
