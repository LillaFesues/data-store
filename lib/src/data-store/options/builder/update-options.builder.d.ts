import { PutOptions } from '../put-options';
import { UpdateOptions } from '../update-options';
import { BaseOptionsBuilder } from './base-options.builder';
export declare class UpdateOptionsBuilder extends BaseOptionsBuilder<UpdateOptions> {
    private _isPartialUpdate;
    isPartialUpdate(value: boolean): this;
    build(): PutOptions;
}
