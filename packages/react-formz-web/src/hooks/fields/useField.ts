import {
  useField,
  UseFieldResult,
  FieldValue,
  UseFieldOptions,
  LiteralUnion,
} from "../../../../react-formz";

export interface UseWebFieldOptions<Value extends FieldValue = FieldValue>
  extends Omit<UseFieldOptions<Value>, "type"> {
  type?: LiteralUnion<React.HTMLInputTypeAttribute>;
}

/**
 * Custom hook to plugin to the state of a specific input field. You can use this to build your own input primitives if you so desire.
 * @param name — The name of the input field.
 * @param options — Options to customize behaviour.
 */
function useWebField<
  Key extends string = string,
  Value extends FieldValue = FieldValue
>(name: Key, options: UseWebFieldOptions<Value>): UseFieldResult<Value> {
  return useField<Key, Value>(name, options);
}

export default useWebField;
