/**
 * Type which can be used to index an array or tuple type.
 */
export type ArrayKey = number;

/**
 * Type which can be used to index an object.
 */
export type Key = string;

/**
 * Type to assert that a type is a {@link Key}.
 * @typeParam T - type which may be a {@link Key}
 */
export type AsKey<T> = Extract<T, Key>;

/**
 * Type to convert a type to a {@link Key}.
 * @typeParam T - type which may be converted to a {@link Key}
 */
export type ToKey<T> = T extends ArrayKey ? `${T}` : AsKey<T>;

export type ValidKey<T, K> = K extends keyof T ? K : never;

/**
 * Type to access a type by a key.
 *  - Returns undefined if it can't be indexed by that key.
 *  - Returns null if the type is null.
 *  - Returns undefined if the type is not traversable.
 * @typeParam T - type which is indexed by the key
 * @typeParam K - key into the type
 *
 * ```ts
 * type GetFoo = TryAccess<{foo: string}, 'foo'> = string
 * type UndefinedKey = TryAccess<{foo: string}, 'bar'> = undefined
 * type NullKey = TryAccess<null, 'foo'> = null
 * type UndefinedKey = TryAccess<string, 'foo'> = undefined
 * ```
 */
export type TryAccess<T, K> = K extends keyof T
  ? T[K]
  : T extends null
  ? null
  : undefined;

export type Maybe<T> = T | null | undefined;

export type NotEmpty<T> = Exclude<T, null | undefined>;
