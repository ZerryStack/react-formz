const toString = Object.prototype.toString;

type StringToTag = string;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @param value The value to query.
 * @returns Returns the `toString` tag which is a string value..
 */
function getTag(value: any): StringToTag {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value);
}

export default getTag