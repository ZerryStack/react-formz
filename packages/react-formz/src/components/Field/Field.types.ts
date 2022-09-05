import React from "react";
import { FormzChangeEventHandler } from "../../types/events";
import { FieldValidator, TextFieldValue } from "../../types/field";
import { FormzError } from "../../types/form";

export interface FieldComponentProps<
  Key extends string = string,
  Value extends TextFieldValue = TextFieldValue
> {
  name: Key;
  onChange: FormzChangeEventHandler<any>;
  value?: Value;
  checked?: boolean;
  /**
   * The react formz error object.
   */
  error?: FormzError;
  /**
   * Data attributes
   */
  [key: `data-${string}`]: string | undefined;
  /**
   * The aria-invalid state indicates the entered value 
   * does not conform to the format expected by the application.
   */
  ["aria-invalid"]?: boolean;
  /**
   * The aria-required attribute informs assistive technologies about
   * required controls so that they are appropriately announced to the
   * users (as opposed to validating the input).
   */
  ["aria-required"]?: boolean;
}

export interface FieldProps<
  Key extends string = string,
  Value extends TextFieldValue = TextFieldValue
> {
  name: Key;
  as?:
    | "input"
    | "select"
    | ((props: FieldComponentProps<Key, Value>) => JSX.Element | null);
  children?: React.ReactNode;
  style?: React.CSSProperties;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  validate?: FieldValidator<Value>;
  min?: number;
  max?: number;
  pattern?: RegExp;
}
