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
  error?: FormzError;
  [key: `data-${string}`]: string | undefined;
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
