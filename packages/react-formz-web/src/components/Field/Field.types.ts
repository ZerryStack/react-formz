import {
  FieldActions,
  FieldEvents,
  FieldId,
  FieldProps,
  FieldValue,
  FormzError,
  LiteralUnion,
} from "../../../../react-formz";

export interface FieldInputProps<
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue
> extends FieldEvents<Value> {
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

export interface FieldComponentProps<
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = HTMLInputElement
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

export interface WebFieldProps<
  Value extends FieldValue = FieldValue,
  Key extends string = string,
  Ref = HTMLInputElement
> extends Omit<FieldProps<Value, Key, Ref>, "type"> {
  type?: LiteralUnion<React.HTMLInputTypeAttribute>;
  /**
   * The component to render the ui of the field.
   */
  as?: React.ComponentType<FieldComponentProps<Value, Key, Ref>>;
}
