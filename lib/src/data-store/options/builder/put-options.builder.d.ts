import { Parent } from '../../../model/parent';
import { PutOptions } from '../put-options';
import { BaseOptionsBuilder } from './base-options.builder';
export declare class PutOptionsBuilder extends BaseOptionsBuilder<PutOptions> {
    private _parent;
    private _isPartialUpdate;
    parent(value: Parent): this;
    isPartialUpdate(value: boolean): this;
    build(): PutOptions;
}
