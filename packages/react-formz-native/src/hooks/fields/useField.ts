import {
  useField,
  UseFieldResult,
  FieldValue,
  UseFieldOptions,
} from "../../../../react-formz";
import { KeyboardType } from "react-native";

export interface UseNativeFieldOptions<Value extends FieldValue = FieldValue>
  extends Omit<UseFieldOptions<Value>, "type"> {
  type?: KeyboardType;
}

/**
 * Custom hook to plugin to the state of a specific input field. You can use this to build your own input primitives if you so desire.
 * @param name — The name of the input field.
 * @param options — Options to customize behaviour.
 */
function useNativeField<
  Key extends string = string,
  Value extends FieldValue = FieldValue
>(name: Key, options: UseNativeFieldOptions<Value>): UseFieldResult<Value> {
  return useField<Key, Value>(name, options);
}

export default useNativeField;
