import { BaseOptions } from '../base-options';
export declare abstract class BaseOptionsBuilder<Options extends BaseOptions> {
    protected _autoCloseContext: boolean;
    autoCloseContext(value: boolean): this;
    abstract build(): Options;
    protected buildBase(): BaseOptions;
    protected assignBase(options: Options): Options;
}
