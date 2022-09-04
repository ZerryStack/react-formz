export function isString(value: any): value is string {
    return typeof value === "string";
}

export function isFunction(value: any): value is Function {
    return typeof value === "function";
}

export function isBoolean(value: any): value is boolean {
    return typeof value === "boolean";
}

export function isCheckbox(element: HTMLInputElement): element is HTMLInputElement {
    return element.type === "checkbox";
}

export function isCheckboxType(type: string): type is "checkbox" {
    return type === "checkbox";
}