import { FieldId, FieldValue } from "../../types/field";
import { FormzState } from "../../types/form";
import get from "../../utils/get";
import { useFormz } from "../store";

/**
 * Returns the store value for a field.
 */
function useFieldValue<
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue
>(formId: string, fieldId: Key): Value {
  const value = useFormz((state) => {
    const form = state.forms[formId] as FormzState<Record<Key, Value>>;

    return get<Key, Record<Key, Value>, Value>(form?.values ?? {}, fieldId);
  });

  return value as Value;
}

export default useFieldValue;
