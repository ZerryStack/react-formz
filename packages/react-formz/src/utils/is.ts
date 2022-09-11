import { MAX_SAFE_INTEGER } from "../constants";
import { AnyObject, Empty } from "../types/common";
import { FormzChangeEvent } from "../types/events";
import { FieldValue } from "../types/field";
import {
  HTMLCheckboxInputElement,
  HTMLDateInputElement,
  HTMLNumberInputElement,
} from "../types/input";
import { IsNot } from "../types/utils";
import getTag from "./getTag";

export function isString(value: any): value is string {
  return typeof value === "string";
}

export function isFunction(value: any): value is Function {
  return typeof value === "function";
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

export function isNull(value: unknown): value is null {
  return value === null;
}

export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

export function isNumber(value: any): value is number {
  return typeof value === "number";
}

export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp;
}

export function isObject(value: unknown): value is AnyObject {
  return (
    !isNull(value) &&
    !isUndefined(value) &&
    !isArray(value) &&
    typeof value === "object"
  );
}

export function isArray(value: unknown): value is Array<any> {
  return Array.isArray(value);
}

export function isKey(value: string) {
  return /^\w*$/.test(value);
}

export function isValidInputValue<Value extends FieldValue>(
  value: Value
): value is Exclude<Value, boolean | null | AnyObject | Array<any>> {
  return !isBoolean(value) && !isNull(value);
}

export function isCheckboxInput(
  element: HTMLInputElement
): element is HTMLCheckboxInputElement {
  return element.type === "checkbox";
}

export function isNumberInput(
  element: HTMLInputElement
): element is HTMLNumberInputElement {
  return element.type === "number";
}

export function isDateInput(
  element: HTMLInputElement
): element is HTMLDateInputElement {
  return element.type === "date";
}

export function isCheckboxInputType(type: string): type is "checkbox" {
  return type === "checkbox";
}

export function isPromiseLike<T>(obj: any): obj is PromiseLike<T> {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    "then" in obj &&
    typeof obj.then === "function"
  );
}

export function isAsync<T>(obj: any): obj is PromiseLike<T> {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    "then" in obj &&
    typeof obj.then === "function"
  );
}

export function isEmpty(value: unknown): value is Empty {
  return value == undefined || value === null || value === "";
}

export function isNotEmpty<T extends unknown>(
  value: T
): value is IsNot<T, Empty> {
  if (typeof value === "string") return value !== "";
  return value !== undefined && value !== null;
}

export function isSymbol(value: unknown) {
  const type = typeof value
  return type == 'symbol' || (type === 'object' && value != null && getTag(value) == '[object Symbol]')
}

export function isIndex(value: any, length?: number) {
  const type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return (
    !!length &&
    (type === "number" ||
      (type !== "symbol" && /^(?:0|[1-9]\d*)$/.test(value))) &&
    value > -1 &&
    value % 1 == 0 &&
    value < length
  );
}

export function isChangeEvent(value: any): value is FormzChangeEvent {
  return 'target' in value;
}
