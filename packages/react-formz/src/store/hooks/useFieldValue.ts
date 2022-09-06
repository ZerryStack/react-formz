import { FieldValue } from "../../types/field";
import { FormzState } from "../../types/form";
import { useFormz } from "../store";

/**
 * Returns the store value for a field.
 */
function useFieldValue<
  Key extends string = string,
  Value extends FieldValue = FieldValue
>(formId: string, fieldId: Key): Value {
  const value = useFormz((state) => {
    const form = state.forms[formId] as FormzState<Record<Key, Value>>;

    const value = form?.values[fieldId];

    return value;
  });

  return value;
}

export default useFieldValue;
