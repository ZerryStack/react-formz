import useSelector from "../../hooks/utils/useSelector";
import { FieldId } from "../../types/field";
import { FormzValues } from "../../types/form";
import makeSelectFieldValue from "../selectors/makeSelectFieldValue";
import { useFormz } from "../store";

/**
 * Returns the store value for a field.
 */
function useFieldValue<
  Key extends FieldId = FieldId,
  Values extends FormzValues = FormzValues
>(formId: string, fieldId: Key) {
  const selectFieldValue = useSelector(makeSelectFieldValue<Key, Values>(formId, fieldId));

  const value = useFormz(selectFieldValue);

  return value;
}

export default useFieldValue;
