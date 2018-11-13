import { Parent } from '../../../model/parent';
import { CreateOptions } from '../create-options';
import { BaseOptionsBuilder } from './base-options.builder';
export declare class CreateOptionsBuilder extends BaseOptionsBuilder<CreateOptions> {
    private _parent;
    parent(value: Parent): this;
    build(): CreateOptions;
}
