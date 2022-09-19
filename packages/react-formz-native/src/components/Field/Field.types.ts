import {
  FieldActions,
  FieldId,
  FieldProps,
  FieldValue,
  FormzError,
} from "../../../../react-formz";
import { KeyboardType, TextInput } from "react-native";
export interface FieldInputProps<
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue
> {
  name: Key;
  type?: string;
  required?: boolean;
  label?: string;
  nativeID: Key;
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
  /**
   * The `onChange` callback should be called when the value of a field
   * changes. This will update the form state.
   */
  onChangeText: (value: Value) => void;
  /**
   * The `onBlur` callback should be called when the field loses focuses
   * i.e. the `onBlur` event is called.
   * 
   * If using a `Field` within an `ArrayField` this calback must be called to synchornize
   * the values.
   */
  onBlur: () => void;
  /**
   * The `onEndEditing` should be called when the text editing is ended by the user.
   * If using a `Field` within an `ArrayField` this calback must be called to synchornize
   * the values.
   */
  onEndEditing: () => void;
  /**
   * The `onSubmitEditing` should be called when the text editing is ended by the user.
   * If using a `Field` within an `ArrayField` this calback must be called to synchornize
   * the values.
   */
  onSubmitEditing: () => void;
  /**
   * The current value of the input.
   */
  value?: Value extends boolean ? undefined : Value;
}

export interface FieldComponentProps<
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = TextInput
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

export interface NativeFieldProps<
  Value extends FieldValue = FieldValue,
  Key extends string = string,
  Ref = TextInput
> extends Omit<FieldProps<Value, Key, Ref>, "type"> {
  type?: KeyboardType;
  /**
   * The component to render the ui of the field.
   */
  as?: React.ComponentType<FieldComponentProps<Value, Key, Ref>>;
}
