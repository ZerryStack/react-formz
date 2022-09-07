import { AnyObject } from "../types/common";
import { isArray, isIndex, isObject } from "./is";
import stringToPath from "./stringToPath";
import toKey from "./toKey";

function set<Value extends unknown, Values extends AnyObject>(
  object: Values,
  path: string,
  value?: Value
) {
  if (!isObject(object)) {
    return object;
  }

  const pathArray = stringToPath(path);

  const length = pathArray.length;
  const lastIndex = length - 1;

  let index = -1;
  let nested: any = object;

  while (nested != null && ++index < length) {
    const key = toKey(pathArray[index]);

    let newValue = value;

    if (index != lastIndex) {
      const objValue = nested[key];
      const nextValue: any = isObject(objValue) || isArray(objValue)
      ? objValue
      : isIndex(path[index + 1])
      ? []
      : {}

      newValue = nextValue;
    }
    
    nested[key] = newValue;
    nested = nested[key];
  }
  return object;
}

export default set;
