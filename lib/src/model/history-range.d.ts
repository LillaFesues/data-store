export declare class HistoryRange {
    readonly from: Date;
    readonly to: Date;
    constructor(from?: Date, to?: Date);
    readonly idbRange: IDBKeyRange;
}
