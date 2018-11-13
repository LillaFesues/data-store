import { NdbDocument } from '@normalized-db/core';
import { ListResult } from './list-result';
export declare class ListResultBuilder<DbItem extends NdbDocument> {
    protected _items: DbItem[];
    protected _total: number;
    protected _offset: number;
    protected _limit: number;
    items(value: DbItem[]): this;
    total(value: number): this;
    offset(value: number): this;
    limit(value: number): this;
    build(): ListResult<DbItem>;
}
