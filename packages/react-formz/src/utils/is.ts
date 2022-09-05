import { Empty } from "../types/common";
import { HTMLCheckboxInputElement, HTMLDateInputElement, HTMLNumberInputElement } from "../types/input";
import { IsNot, Primitive } from "../types/utils";

export function isString(value: any): value is string {
  return typeof value === "string";
}

export function isFunction(value: any): value is Function {
  return typeof value === "function";
}

export function isBoolean(value: any): value is boolean {
  return typeof value === "boolean";
}

export function isNumber(value: any): value is number {
  return typeof value === "number";
}

export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp;
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
