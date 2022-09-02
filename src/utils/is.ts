export function isString(value: any): value is string {
    return typeof value === "string";
}

export function isFunction(value: any): value is Function {
    return typeof value === "function";
}