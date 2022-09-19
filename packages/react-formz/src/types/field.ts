import { FieldActions } from "../hooks/fields/useFieldActions";
import { AnyObject, Maybe } from "./common";
import { FormzValues } from "./form";

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

export interface FieldProps<
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = unknown
> {
  /**
   * The unique name/id of the field.
   */
  name: Key;
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