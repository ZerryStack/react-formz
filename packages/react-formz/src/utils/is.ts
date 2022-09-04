export function isString(value: any): value is string {
  return typeof value === "string";
}

export function isFunction(value: any): value is Function {
  return typeof value === "function";
}

export function isBoolean(value: any): value is boolean {
  return typeof value === "boolean";
}

export function isCheckbox(
  element: HTMLInputElement
): element is HTMLInputElement {
  return element.type === "checkbox";
}

export function isCheckboxType(type: string): type is "checkbox" {
  return type === "checkbox";
}

export function isPromiseLike<T, S>(obj: Promise<T> | S): obj is Promise<T> {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    "then" in obj &&
    typeof obj.then === "function"
  );
}

export function isNotEmpty<T>(
  value: T | null | undefined
): value is NonNullable<T> {
  return value !== null && value !== undefined;
}
