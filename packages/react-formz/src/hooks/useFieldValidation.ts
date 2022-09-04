import { clearFieldError, getFieldStoreValue, setFieldError, useFormz } from "../store/store";
import { FieldValidator, FieldValue } from "../types/field";
import { isPromiseLike } from "../utils/is";
import useEventCallback from "./useEventCallback";

export interface UseFieldValidationOptions<Value extends FieldValue> {
  validator?: FieldValidator<Value>;
  required?: boolean;
}

function useFieldValidation<
  Key extends string = string,
  Value extends FieldValue = FieldValue
>(formId: string, name: Key, options: UseFieldValidationOptions<Value>) {
  const error = useFormz((state) => state.forms[formId].errors[name]);

  const getErrorMessage = async () => {
    const value = getFieldStoreValue(formId, name);

    const valueIsEmpty = value === undefined || value === null || value === "";

    if (options.required && valueIsEmpty) {
      return `${name} is required.`;
    }

    if (options.validator) {
      const result = (isPromiseLike(options.validator)
        ? await options.validator(value)
        : options.validator(value));

      return result;
    }

    return null;
  };

  const validate = useEventCallback(async () => {
    const message = await getErrorMessage();

    if (message) {
      setFieldError(formId, name, message);
      return false;
    }

    clearFieldError(formId, name);

    return true;
  });

  return { validate, error };
}

export default useFieldValidation;
