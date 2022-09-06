import { useFormIdContext } from "../../providers/FormIdProvider";
import useFieldValue from "../../store/hooks/useFieldValue";
import { FormzChangeEvent } from "../../types/events";
import { FieldValue } from "../../types/field";
import { FormzError } from "../../types/form";
import { isBoolean } from "../../utils/is";
import useFieldEvents from "./useFieldEvents";
import useFieldRegistration from "./useFieldRegistration";
import useFieldValidation, {
  UseFieldValidationOptions,
} from "./useFieldValidation";

export interface UseFieldOptions<Value extends FieldValue>
  extends UseFieldValidationOptions<Value> {
  type?: React.HTMLInputTypeAttribute;
  label?: string;
}

export interface UseFieldResult<Value extends FieldValue> {
  value: Value;
  onChange: (event: FormzChangeEvent<any>) => void;
  onBlur: (event: React.FocusEvent<any>) => void;
  error: FormzError | undefined;
  checked?: boolean;
}

/**
 * Custom hook to plugin to the state of a specific input field. You can use this to
 * build your own input primitives if you so desire.
 * @param name The name of the input field.
 * @param options Options to customize behaviour.
 */
function useField<
  Key extends string = string,
  Value extends FieldValue = FieldValue
>(name: Key, options: UseFieldOptions<Value>): UseFieldResult<Value> {
  const { required, type, max, min, pattern, label } = options;

  const id = useFormIdContext();
  const value = useFieldValue<Key, Value>(id, name)

  const { validate, error } = useFieldValidation<Key, Value>(id, name, {
    validate: options.validate,
    required,
    max,
    min,
    pattern,
    label
  });

  const { onChange, onBlur } = useFieldEvents(id, name, validate);

  useFieldRegistration(id, name, validate);

  return {
    value,
    checked: type === "checkbox" && isBoolean(value) ? value : undefined,
    onChange,
    onBlur,
    error,
  };
}

export function useNumberField<Key extends string = string>(name: Key, options: UseFieldOptions<number>) {
  return useField<Key, number>(name, options);
}

export function useBooleanField<Key extends string = string>(name: Key, options: UseFieldOptions<boolean>) {
  return useField<Key, boolean>(name, options);
}

export default useField;
