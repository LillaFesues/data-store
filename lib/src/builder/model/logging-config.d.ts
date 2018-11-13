import { ValidKey } from '@normalized-db/core';
import { LoggingCallback } from './logging-callback';
export declare class LoggingConfig {
    readonly prefix: string;
    readonly preCallback: LoggingCallback<ValidKey, any>;
    isActive: boolean;
    private static readonly DEFAULT_PREFIX;
    constructor(prefix?: string, preCallback?: LoggingCallback<ValidKey, any>, isActive?: boolean);
}
