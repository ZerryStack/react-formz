import React from "react";
import { FormzChangeEventHandler } from "../../types/events";
import { FieldValidator, FieldValue } from "../../types/field";
import { FormzError } from "../../types/form";

type FieldComponentElementProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

export interface FieldComponentProps<
  Key extends string = string,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement
> {
  input: {
    name: Key;
    onChange: FormzChangeEventHandler<any>;
    value?: Exclude<Value, boolean | null>;
    checked?: boolean;
    type?: React.HTMLInputTypeAttribute;
    onBlur?: React.FocusEventHandler;
    onFocus?: React.FocusEventHandler;
    required?: boolean;
    label?: string;
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
  } & FieldComponentElementProps<Element>;
  storeValue?: Value;
  /**
   * The react formz error object.
   */
  error?: FormzError;
  /**
   * Data attributes
   */
  [key: `data-${string}`]: string | undefined;

  children?: React.ReactNode;
}

export interface FieldProps<
  Key extends string = string,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement
> {
  name: Key;
  as?:
    | "input"
    | "select"
    | ((props: FieldComponentProps<Key, Value, Element>) => JSX.Element | null);
  children?: React.ReactNode;
  style?: React.CSSProperties;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  validate?: FieldValidator<Value>;
  min?: number;
  max?: number;
  pattern?: RegExp;
  placeholder?: string;
  multiple?: boolean;
  label?: string;
}
