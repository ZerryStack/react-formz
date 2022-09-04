import { Maybe } from "./common";

export type TextFieldValue = string | number | undefined | readonly string[];

export type FieldValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | readonly string[];

export type FieldElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

/**
 * The validate function for a field. Always returns a boolean
 * but the validator can be async/return a Promise.
 */
export type FieldValidator<Value extends FieldValue = FieldValue> =
  | ((value: Maybe<Value>) => Maybe<string>)
  | ((value: Maybe<Value>) => Promise<Maybe<string>>);
