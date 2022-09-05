import { useFormIdContext } from "../providers/FormIdProvider";
import { useFormz, actions } from "../store";
import { FormzChangeEvent } from "../types/events";
import { FieldValue } from "../types/field";
import { FormzError, FormzState, FormzValues } from "../types/form";
import { isBoolean } from "../utils/is";
import useStableCallback from "./useStableCallback";
import useFieldValidation, {
  UseFieldValidationOptions,
} from "./useFieldValidation";

export interface UseFieldOptions<Value extends FieldValue>
  extends UseFieldValidationOptions<Value> {
  type?: React.HTMLInputTypeAttribute;
}

export interface UseFieldResult<Value extends FieldValue> {
  value: Value;
  onChange: (event: FormzChangeEvent<any>) => void;
  onBlur: (event: React.FocusEvent<any>) => void;
  error: FormzError | undefined;
  checked?: boolean;
}

function useField<
  Key extends string = string,
  Value extends FieldValue = FieldValue,
  Values extends FormzValues = FormzValues
>(name: Key, options: UseFieldOptions<Value>): UseFieldResult<Value> {
  const { required, type, max, min, pattern } = options;

  const id = useFormIdContext();

  const { validate, error } = useFieldValidation<Key, Value>(id, name, {
    validate: options.validate,
    required,
    max,
    min,
    pattern
  });

  const value = useFormz((state) => {
    const form = state.forms[id] as FormzState<Record<Key, Value>>;

    const value = form?.values[name];

    return value;
  });

  const handleChange = useStableCallback((event: FormzChangeEvent<any>) => {
    actions.updateFormValue(event, id, name);

    validate();
  });

  const handleBlur = useStableCallback((_: React.FocusEvent<any>) => {
    validate();
  });

  return {
    value,
    checked: type === "checkbox" && isBoolean(value) ? value : undefined,
    onChange: handleChange,
    onBlur: handleBlur,
    error,
  };
}

export default useField;
