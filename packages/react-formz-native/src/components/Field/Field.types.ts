import {
  FieldComponentProps as FormzFieldComponentProps,
  FieldProps as FormzFieldProps,
  FieldInputProps as FormzFieldInputProps,
  FieldValue,
} from "@zerry/react-formz";
import { KeyboardTypeOptions } from "react-native";

export interface FieldInputProps<
  Key extends string = string,
  Value extends FieldValue = FieldValue
> extends Omit<FormzFieldInputProps<Key, Value>, "onChange"> {
    onChangeText: (value: Value) => void;
}

export interface FieldComponentProps<
  Value extends FieldValue = FieldValue,
  Key extends string = string,
  Ref = unknown
> extends Omit<FormzFieldComponentProps<Value, Key, Ref>, "input"> {
  input: FieldInputProps<Key, Value>;
}

export interface FieldProps<
  Value extends FieldValue = FieldValue,
  Key extends string = string,
  Ref = unknown
> extends Omit<FormzFieldProps<Value, Key, Ref>, "type" | "as"> {
  /**
   * The component to render the ui of the field.
   */
  as: React.ComponentType<FieldComponentProps<Value, Key, Ref>>;
  /**
   * The react native keyboard type to apply to the field.
   */
  type?: KeyboardTypeOptions;
}
