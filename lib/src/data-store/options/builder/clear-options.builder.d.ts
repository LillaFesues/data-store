import { ClearOptions } from '../clear-options';
import { BaseOptionsBuilder } from './base-options.builder';
export declare class ClearOptionsBuilder extends BaseOptionsBuilder<ClearOptions> {
    private _includeLogs;
    includeLogs(value: boolean): this;
    build(): ClearOptions;
}
