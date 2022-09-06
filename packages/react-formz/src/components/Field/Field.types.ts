import React from "react";
import { FormzChangeEventHandler } from "../../types/events";
import { FieldValidator, FieldValue } from "../../types/field";
import { FormzError } from "../../types/form";

type NativeElementProps<T> = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<T>, T>,
  "color" | "ref"
>;

export interface BaseFieldComponentProps<
  Key extends string = string,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement
> {
  ref?: React.Ref<Element>;
  input: {
    name: Key;
    onChange: FormzChangeEventHandler<any>;
    value?: Exclude<Value, boolean | null>;
    checked?: boolean;
    type?: React.HTMLInputTypeAttribute;
    onBlur: React.FocusEventHandler;
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
  };
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

export type FieldComponentProps<
  Key extends string = string,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement,
  Component extends React.ComponentType<{}> = React.ComponentType<{}>
> = BaseFieldComponentProps<Key, Value, Element> &
  React.ComponentProps<Component>;

export interface BaseFieldProps<
  Key extends string = string,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement
> {
  name: Key;
  as?:
    | "input"
    | "select"
    | "textarea"
    | React.ComponentType<
        FieldComponentProps<Key, Value, Element> & NativeElementProps<Element>
      >;
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
  ref?: React.Ref<Element>
}

export type FieldProps<
  Key extends string = string,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement,
  Component extends React.ComponentType<{}> = React.ComponentType<{}>
> = BaseFieldProps<Key, Value, Element> & React.ComponentProps<Component>;