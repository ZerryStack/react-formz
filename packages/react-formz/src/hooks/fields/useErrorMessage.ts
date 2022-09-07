import { useFormIdContext } from "../../providers/FormIdProvider";
import { useFormz } from "../../store";
import makeSelectFieldError from "../../store/selectors/makeSelectFieldError";
import useSelector from "../utils/useSelector";

/**
 * Returns the error object for a form field.
 * @param field The name of the input field.
 */
function useErrorMessage(field: string) {
  const id = useFormIdContext();

  const selector = useSelector(makeSelectFieldError(id, field));

  const error = useFormz(selector);

  return error;
}

export default useErrorMessage;
