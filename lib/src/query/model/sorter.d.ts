import { NdbDocument } from '@normalized-db/core';
import { OrderBy } from './order-by';
export declare class Sorter<Item extends NdbDocument> {
    private readonly orderBy;
    constructor(orderBy: OrderBy);
    compare(item1: Item, item2: Item): number;
    private compareFields(field, item1, item2);
    private getNestedValue(fieldParts, depth, item);
    private compareValues(field, value1, value2);
}
