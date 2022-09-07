import useSelector from "../../hooks/utils/useSelector";
import { FieldId, FieldValue } from "../../types/field";
import makeSelectFieldValue from "../selectors/makeSelectFieldValue";
import { useFormz } from "../store";

/**
 * Returns the store value for a field.
 */
function useFieldValue<
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue
>(formId: string, fieldId: Key): Value {
  const selectFieldValue = useSelector(makeSelectFieldValue(formId, fieldId));

  const value = useFormz(selectFieldValue);

  return value as Value;
}

export default useFieldValue;
