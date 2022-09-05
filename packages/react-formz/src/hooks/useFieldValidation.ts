import { useFormz, actions } from "../store";
import { FieldValidator, FieldValue } from "../types/field";
import { FormzError } from "../types/form";
import { isEmpty, isNotEmpty as isDefined, isNumber, isString } from "../utils/is";
import doesNotMatchPattern from "../validations/doesNotMatchPattern";
import isAboveMax from "../validations/isAboveMax";
import isBelowMin from "../validations/isBelowMin";
import useEventCallback from "./useEventCallback";

export interface UseFieldValidationOptions<
  Value extends FieldValue = FieldValue
> {
  validate?: FieldValidator<Value>;
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
}

function useFieldValidation<
  Key extends string = string,
  Value extends FieldValue = FieldValue
>(formId: string, name: Key, options: UseFieldValidationOptions<Value>) {
  const error = useFormz((state) => state.forms[formId].errors[name]);

  const getErrorMessage = async (): Promise<FormzError | null> => {
    const value = actions.getFieldStoreValue<Value>(formId, name);

    if (options.required && isEmpty(value)) {
      return {
        type: "required",
        message: `${name} is required.`,
      };
    }

    if (
      isDefined(options.max) &&
      isNumber(value) &&
      isAboveMax(value, options.max)
    ) {
      return {
        type: "max",
        message: `${name} is above the maximum value of  ${options.max}.`,
      };
    }

    if (
      isDefined(options.min) &&
      isNumber(value) &&
      isBelowMin(value, options.min)
    ) {
      return {
        type: "min",
        message: `${name} is below the minimum value of  ${options.min}.`,
      };
    }

    if (
      isDefined(options.pattern) &&
      isString(value) &&
      doesNotMatchPattern(value, options.pattern)
    ) {
      return {
        type: "pattern",
        message: `${name} does not match pattern ${options.pattern}.`,
      };
    }

    if (isDefined(options.validate)) {
      const result = await options.validate(value);

      return {
        type: "custom",
        message: result,
      };
    }

    return null;
  };

  const validate = useEventCallback(async () => {
    const message = await getErrorMessage();

    if (message) {
      actions.setFieldError(formId, name, message);
      return false;
    } else {
      actions.resetFieldError(formId, name);
      return true;
    }
  });

  return { validate, error };
}

export default useFieldValidation;
