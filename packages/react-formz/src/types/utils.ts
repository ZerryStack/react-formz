export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint;

/**
 * Type to query whether an array type T is a tuple type.
 * @typeParam T - type which may be an array or tuple
 * @example
 * ```
 * IsTuple<[number]> = true
 * IsTuple<number[]> = false
 * ```
 */
 export type IsTuple<T extends ReadonlyArray<any>> = number extends T['length']
 ? false
 : true;

 /**
 * Type which given a tuple type returns its own keys, i.e. only its indices.
 * @typeParam T - tuple type
 * @example
 * ```
 * TupleKeys<[number, string]> = '0' | '1'
 * ```
 */
export type TupleKeys<T extends ReadonlyArray<any>> = Exclude<
keyof T,
keyof any[]
>;

export type IsNot<T, U> = Exclude<T, U>;

/**
 * Type which defines a string or number union with the option of
 * specifying any string as well
 */
export type LiteralUnion<T extends string | number> = T extends string ? (string & {}) | T : (number & {}) | T;