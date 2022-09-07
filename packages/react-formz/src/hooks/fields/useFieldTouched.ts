import { useFormIdContext } from "../../providers/FormIdProvider";
import { useFormz } from "../../store";
import makeSelectFieldTouched from "../../store/selectors/makeSelectFieldTouched";
import useSelector from "../utils/useSelector";

/**
 * Custom hook that returns whether or not a field has been touched.
 * @param field The name of the input field.
 */
function useFieldTouched(field: string) {
  const id = useFormIdContext();

  const selector = useSelector(makeSelectFieldTouched(id, field));
  
  const touched = useFormz(selector);

  return touched ?? false;
}

export default useFieldTouched;
