import { formzFieldsStore } from "../../store";
import useStableCallback from "../utils/useStableCallback";

/**
 * Custom hook that returns a function that executes
 * all field level validations for fields within
 * a form. The returned function returns true if all
 * fields are valid.
 * @param id The id of the form
 */
function useExecuteFieldValidations(id: string) {
  const executeFieldValidations = useStableCallback(async () => {
    const { forms } = formzFieldsStore.getState();
    const { fields } = forms[id];

    let valid = true;

    for (const id in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, id)) {
        const field = fields[id];

        const result = await field.validate();

        if (result === false) valid = false;
      }
    }

    return valid;
  });

  return executeFieldValidations;
}

export default useExecuteFieldValidations;
