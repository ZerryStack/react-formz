import { useFormIdContext } from "../../providers/FormIdProvider";
import { useFormz } from "../../store";

/**
 * Custom hook that returns whether or not a field has been touched.
 * @param field The name of the input field.
 */
function useFieldTouched(field: string) {
  const id = useFormIdContext();

  const touched = useFormz((state) => state.forms[id].touched[field]);

  return touched ?? false;
}

export default useFieldTouched;
