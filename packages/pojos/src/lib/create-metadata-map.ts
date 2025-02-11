import type { Dictionary } from '@automapper/core';
import { pojosSymbolStorage } from './storages';

/**
 *
 * createMetadataMap('Bar', {
 *   baz: String
 * })
 *
 * createMetadataMap('Foo', {
 *   foo: String,
 *   bar: 'Bar'
 * })
 */

export function createMetadataMap<TModel extends Dictionary<TModel> = any>(
  key: string,
  metadata: {
    [key in keyof TModel]?:
      | StringConstructor
      | DateConstructor
      | NumberConstructor
      | BooleanConstructor
      | typeof File.prototype.constructor
      | string
      | null;
  }
): void;
export function createMetadataMap<TModel extends Dictionary<TModel> = any>(
  key: string,
  existMetadataMap: string,
  metadata?: {
    [key in keyof TModel]?:
      | StringConstructor
      | DateConstructor
      | NumberConstructor
      | BooleanConstructor
      | typeof File.prototype.constructor
      | string
      | null
      | false;
  }
): void;
export function createMetadataMap<TModel extends Dictionary<TModel> = any>(
  key: string,
  metadataOrMetadataMap:
    | string
    | {
        [key in keyof TModel]?:
          | StringConstructor
          | DateConstructor
          | NumberConstructor
          | BooleanConstructor
          | typeof File.prototype.constructor
          | string
          | null;
      },
  metadata?: {
    [key in keyof TModel]?:
      | StringConstructor
      | DateConstructor
      | NumberConstructor
      | BooleanConstructor
      | typeof File.prototype.constructor
      | string
      | null
      | false;
  }
) {
  const toMergeSymbol =
    typeof metadataOrMetadataMap === 'string'
      ? Symbol.for(metadataOrMetadataMap)
      : '';

  metadata =
    typeof metadataOrMetadataMap === 'string'
      ? metadata || {}
      : metadataOrMetadataMap;

  const toMergeMetadata = toMergeSymbol
    ? pojosSymbolStorage.get(toMergeSymbol)
    : [];

  const symbol = Symbol.for(key);

  const entries = Object.entries(metadata);
  if (!entries.length) {
    pojosSymbolStorage.set(symbol, toMergeMetadata);
    return;
  }

  const result: unknown[] = [];
  for (const [existProp, existMeta] of toMergeMetadata) {
    if (entries.some(([entryProp]) => existProp === entryProp)) {
      continue;
    }

    result.push([existProp, existMeta]);
  }

  result.push(...entries);
  pojosSymbolStorage.set(
    symbol,
    result.filter(([, meta]: any) => meta !== false) as []
  );
}
