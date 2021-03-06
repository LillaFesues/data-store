import { Depth, isNull, ValidKey } from '@normalized-db/core';
import { Context } from '../context/context';
import { ChildNotFoundError } from '../error/child-not-found-error';
import { NotFoundError } from '../error/not-found-error';
import { BaseQuery } from './base-query';
import { Parent } from './model/parent';
import { QueryConfig } from './query-config';
import { Queryable } from './queryable';

export class SingleItemQuery<DbItem> extends BaseQuery<DbItem | null> implements Queryable<DbItem | null> {

  private _parent?: Parent;
  private _default?: DbItem;

  private _depth: Depth;

  constructor(_context: Context, _type: string, private readonly _key: ValidKey) {
    super(_context, _type);
  }

  /**
   * Set the parent-object which is supposed to contain a reference on the object of interest.
   * The `type` argument of the queries constructor determines the type of the parent.
   *
   * @param {ValidKey} key
   * @param {string} field
   * @returns {Query<DbItem>}
   */
  public parent(key: ValidKey, field: string): SingleItemQuery<DbItem | null> {
    this._parent = new Parent(this._type, key, field);
    return this;
  }

  /**
   * Set the default value to be returned when the item is not found in the given type or parent.
   *
   * @param {DbItem} value
   * @returns {SingleItemQuery<DbItem>}
   */
  public defaultValue(value: DbItem): SingleItemQuery<DbItem | null> {
    this._default = value;
    return this;
  }

  /**
   * Set the `Depth` determining how far an object has to be denormalized.
   *
   * @param {Depth} depth
   * @returns {Query<DbItem>}
   */
  public depth(depth: Depth): SingleItemQuery<DbItem | null> {
    this._depth = depth;
    return this;
  }

  /**
   * @inheritDoc
   *
   * If no object with the given key was found this will either return the `defaultValue` (if set) or otherwise throw
   * a `NotFoundError` or, if a `parent` was used`, a `ChildNotFoundError`.
   *
   * @param {boolean} noCache
   * @returns {DbItem}
   * @throws {NotFoundError} when now `defaultValue` is available
   * @throws {ChildNotFoundError} when no `defaultValue` is available and a `parent`-item was used
   */
  public async result(noCache = false): Promise<DbItem | null> {
    if (this._cachedResult && !noCache) {
      return this._cachedResult || this._default;
    }

    const runner = this._context.queryRunner<DbItem>(this.getQueryConfig());
    const result = await runner.execute();

    if (!result || result.length === 0) {
      if (isNull(this._default)) {
        return this._default;
      } else if (this._parent) {
        throw new ChildNotFoundError(this._parent, this._key);
      } else {
        throw new NotFoundError(this._type, this._key);
      }
    }

    return this._cachedResult = result[0];
  }

  /**
   * Check whether an object was found or not. If `noCache` is `true` the query will be re-run.
   *
   * @param {boolean} noCache
   * @returns {Promise<boolean>}
   */
  public async hasResult(noCache = false): Promise<boolean> {
    await this.result(noCache);
    return !isNull(this._cachedResult);
  }

  protected getQueryConfig(): QueryConfig {
    return Object.assign({
      singleItem: this._key,
      parent: this._parent,
      depth: this._depth
    }, super.getQueryConfig());
  }
}
