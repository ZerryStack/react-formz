import React from "react";
import { FieldActions } from "../../hooks/fields/useFieldActions";
import { FieldEevents } from "../../hooks/fields/useFieldEvents";
import { FieldId, FieldValidator, FieldValue } from "../../types/field";
import { FormzError } from "../../types/form";
import { LiteralUnion } from "../../types/utils";

export interface FieldInputProps<
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue
> extends FieldEevents<Value> {
  name: Key;
  /**
   * If the `value` is not a valid value that can be passed to the native html input
   * the `value` will be undefined. You will then need to use `storeValue` instead.
   */
  value?: Value extends boolean ? undefined : Value;
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
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = unknown
> {
  ref?: React.Ref<Ref>;
  input: FieldInputProps<Key, Value>;
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
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = unknown
> = BaseFieldComponentProps<Value, Key, Ref>;

export interface BaseFieldProps<
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = unknown
> {
  /**
   * The unique name/id of the field.
   */
  name: Key;
  /**
   * The component to render the ui of the field.
   */
  as?: React.ComponentType<
    FieldComponentProps<Value, Key, Ref>
  >;
  children?: React.ReactNode;
  /**
   * CSS Styles to pass to the rendered component.
   */
  style?: React.CSSProperties;
  /**
   * HTML input type.
   */
  type?: LiteralUnion<React.HTMLInputTypeAttribute>;
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
  ref?: React.Ref<Ref>;
}

export type FieldProps<
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = unknown
> = BaseFieldProps<Value, Key, Ref>;
