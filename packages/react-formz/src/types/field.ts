import { FieldActions } from "../hooks/fields/useFieldActions";
import { FieldEevents } from "../hooks/fields/useFieldEvents";
import { AnyObject, Maybe } from "./common";
import { FormzError, FormzValues } from "./form";

export type FieldId = string;

/** Native HTMLField Values */
export type TextFieldValue = string | number | undefined | readonly string[];

export type FieldValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Array<any>
  | AnyObject
  | Date
  | readonly string[];

/**
 * The validate function for a field. Always returns a boolean
 * but the validator can be async/return a Promise.
 */
export type FieldValidator<Value extends FieldValue = FieldValue> = (
  value: Maybe<Value>
) => Maybe<string> | Promise<Maybe<string>>;

export type DependentFieldValidator<
  Value extends FieldValue = FieldValue,
  DependentValues extends FormzValues = FormzValues
> = (
  value: Maybe<Value>,
  dependencies: DependentValues
) => Maybe<string> | Promise<Maybe<string>>;

export type DependentFieldChangeCallback<
  Value extends FieldValue = FieldValue,
  DependentValues extends FormzValues = FormzValues
> = (dependencies: DependentValues, actions: FieldActions<Value>) => void;

export type FieldValueFormatter<
  Value,
  Values extends FormzValues,
  ReturnValue
> = (value: Value, formValues: Values) => ReturnValue;

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
  type?: string;
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
   * The input type.
   */
  type?: string;
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