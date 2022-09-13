import { useFormz, actions, useFormSchemaValidator } from "../../store";
import makeSelectFieldError from "../../store/selectors/makeSelectFieldError";
import { FieldId, FieldValidator, FieldValue } from "../../types/field";
import { FormzError } from "../../types/form";
import { isEmpty, isNotEmpty as isDefined, isNumber, isString } from "../../utils/is";
import doesNotMatchPattern from "../../validations/doesNotMatchPattern";
import isAboveMax from "../../validations/isAboveMax";
import isBelowMin from "../../validations/isBelowMin";
import useSelector from "../utils/useSelector";
import useStableCallback from "../utils/useStableCallback";

export interface UseFieldValidationOptions<
  Value extends FieldValue = FieldValue
> {
  validate?: FieldValidator<Value>;
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  label?: string;
}

/**
 * Custom hook that creates a validation api for an input field.
 * @param formId The id of the form.
 * @param name The name of the input field.
 * @param options Options to customize the way a field is validated.
 */
function useFieldValidation<
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue
>(formId: string, name: Key, options: UseFieldValidationOptions<Value>) {
  const { label = name } = options;

  const schemaValidator = useFormSchemaValidator(formId);

  const selectFieldError = useSelector(makeSelectFieldError(formId, name));

  const error = useFormz(selectFieldError);

  const getErrorMessage = async (): Promise<FormzError | null> => {
    const value = actions.getFieldStoreValue<Value>(formId, name);

    if (isDefined(schemaValidator)) {
      const { errors } = await schemaValidator.validate(actions.getFormState(formId).values);

      if (errors && errors[name]) {
        const error = errors[name];

        if (error) return error;
      }
    }

    if (options.required && isEmpty(value)) {
      return {
        type: "required",
        message: `${label} is required.`,
      };
    }

    if (
      isDefined(options.max) &&
      isNumber(value) &&
      isAboveMax(value, options.max)
    ) {
      return {
        type: "max",
        message: `${label} is above the maximum value of ${options.max}.`,
      };
    }

    if (
      isDefined(options.min) &&
      isNumber(value) &&
      isBelowMin(value, options.min)
    ) {
      return {
        type: "min",
        message: `${label} is below the minimum value of ${options.min}.`,
      };
    }

    if (
      isDefined(options.pattern) &&
      isString(value) &&
      doesNotMatchPattern(value, options.pattern)
    ) {
      return {
        type: "pattern",
        message: `${label} does not match pattern ${options.pattern}.`,
      };
    }

    if (isDefined(options.validate)) {
      const message = await options.validate(value);

      if (message) {
        return {
          type: "custom",
          message,
        };
      }
      
    }

    return null;
  };

  const validate = useStableCallback(async () => {
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
