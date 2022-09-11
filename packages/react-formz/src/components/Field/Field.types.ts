import React from "react";
import { FieldActions } from "../../hooks/fields/useFieldActions";
import { FieldEevents } from "../../hooks/fields/useFieldEvents";
import { AnyObject } from "../../types/common";
import { FieldId, FieldValidator, FieldValue } from "../../types/field";
import { FormzError } from "../../types/form";

type NativeElementProps<T> = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<T>, T>,
  "color" | "ref"
>;

export interface FieldInputProps<
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue
> extends FieldEevents<Value> {
  name: Key;
  /**
   * If the `value` is not a valid value that can be passed to the native html input
   * the `value` will be undefined. You will then need to use `storeValue` instead.
   */
  value?: Exclude<Value, boolean | null | AnyObject | Array<any>>;
  /**
   * This will be a boolean if the `value` type is checkbox.
   */
  checked?: boolean;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  label?: string;
  id: Key;
  /**
   * The aria-invalid state indicates the entered value
   * does not conform to the format expected by the application.
   */
  "aria-invalid"?: boolean;
  /**
   * The aria-required attribute informs assistive technologies about
   * required controls so that they are appropriately announced to the
   * users (as opposed to validating the input).
   */
  "aria-required"?: boolean;
  /**
   * An auto generated id for the form error. If using the `ErrorMessage` component
   * this id will automatically be applied.
   */
  "aria-describedby": string;
}

export interface BaseFieldComponentProps<
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement
> {
  ref?: React.Ref<Element>;
  input: FieldInputProps<Key, Value>;
  /**
   * The value of the field in the form data store. This value is useful
   * for non-native html input values like lists or objects.
   */
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
  placeholder?: string;
  actions: FieldActions<Value>;
}

export type FieldComponentProps<
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement
> = BaseFieldComponentProps<Key, Value, Element>;

export interface BaseFieldProps<
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement
> {
  /**
   * The unique name/id of the field.
   */
  name: Key;
  /**
   * The component to render the ui of the field.
   */
  as?:
    | "input"
    | "select"
    | "textarea"
    | React.ComponentType<
        FieldComponentProps<Key, Value, Element> & NativeElementProps<Element>
      >;
  children?: React.ReactNode;
  /**
   * CSS Styles to pass to the rendered component.
   */
  style?: React.CSSProperties;
  /**
   * HTML input type.
   */
  type?: React.HTMLInputTypeAttribute;
  /**
   * If true, the field must have a value to not be in an error state.
   */
  required?: boolean;
  validate?: FieldValidator<Value>;
  min?: number;
  max?: number;
  pattern?: RegExp;
  placeholder?: string;
  multiple?: boolean;
  label?: string;
  ref?: React.Ref<Element>;
}

export type FieldProps<
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement
> = BaseFieldProps<Key, Value, Element>;
