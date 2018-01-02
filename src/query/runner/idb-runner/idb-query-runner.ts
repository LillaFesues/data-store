import { NdbDocument } from '@normalized-db/core';
import { IdbContext } from '../../../context/idb-context/index';
import { InvalidQueryRunnerStatusError } from '../../../error/index';
import { ListResult } from '../../list-result/index';
import { QueryConfig } from '../../query-config';
import { QueryRunner } from '../query-runner';
import { IdbBaseDocumentQueryRunner } from './idb-base-document-query-runner';

export class IdbQueryRunner<Result extends NdbDocument>
    extends IdbBaseDocumentQueryRunner<Result>
    implements QueryRunner<Result> {

  constructor(context: IdbContext<any>, config: QueryConfig) {
    super(context, config);
  }

  /**
   * @inheritDoc
   *
   * @returns {Promise<ListResult<Result>>}
   * @throws {InvalidQueryRunnerStatusError}
   */
  public async execute(): Promise<ListResult<Result>> {
    this.start();
    let result: ListResult<Result>;
    if (this._config.parent) {
      result = (await this.findInParent()) as ListResult<Result>;
    } else if (this._config.keys) {
      result = await this.findAllByKeys(this._config.keys);
    } else {
      if (this._config.singleItem) {
        console.warn(
            'The query configuration has a key for a single-item-query but is run as list-query. The key will be ignored');
      }

      result = await this.findAll();
    }

    this.stop();
    return result;
  }

  /**
   * Find all items of a given type. Paging and filter will be applied as defined in the query-config.
   *
   * @param {string} type
   * @returns {Promise<ListResult<Result>>}
   */
  private async findAll(type = this._config.type): Promise<ListResult<Result>> {
    if (!this._transaction) {
      this._transaction = await this._context.read(type);
    }

    const objectStore = this._transaction.objectStore(type);
    const hasRange = this._config.offset > 0 || this._config.limit < Infinity;
    const hasFilter = !!this._config.filter;

    if (!hasRange && !hasFilter) {
      const data = await objectStore.getAll();
      const denormalizedData = await this._denormalizer.applyAll<Result>(type, data, this._config.depth);
      return this.createListResult(denormalizedData, data.length);
    } else {
      const items = [];
      let index = 0;
      let cursor = await objectStore.openCursor();
      while (cursor) {
        let denormalizedData, isValid = true;
        if (hasFilter) {
          if (this._config.filter.requiresDenormalization) {
            denormalizedData = await this._denormalizer.apply<Result>(type, cursor.value, this._config.depth);
            isValid = this._config.filter.test(denormalizedData);
          } else {
            isValid = this._config.filter.test(cursor.value);
          }
        }

        if (isValid) {
          if (index >= this._config.offset && items.length < this._config.limit) {
            if (!denormalizedData) {
              denormalizedData = await this._denormalizer.apply<Result>(type, cursor.value, this._config.depth);
            }

            items.push(denormalizedData);
          }

          index++;
        }

        cursor = await cursor.continue();
      }

      return this.createListResult(items, index);
    }
  }
}
