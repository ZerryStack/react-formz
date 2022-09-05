import { useFormIdContext } from "../../providers/FormIdProvider";
import { useFormz } from "../../store";

/**
 * Returns the error object for a form field.
 * @param field The name of the input field.
 */
function useErrorMessage(field: string) {
  const id = useFormIdContext();

  const error = useFormz((state) => state.forms[id].errors[field]);

  return error;
}

export default useErrorMessage;
