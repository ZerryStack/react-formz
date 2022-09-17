import { useFormIdContext } from "../../providers/FormIdProvider";
import useFieldValue from "../../store/hooks/useFieldValue";
import { FieldId, FieldValue } from "../../types/field";
import { FormzError } from "../../types/form";
import { LiteralUnion } from "../../types/utils";
import { isBoolean } from "../../utils/is";
import useFieldActions, { FieldActions } from "./useFieldActions";
import useFieldEvents, { FieldEevents } from "./useFieldEvents";
import useFieldRegistration from "./useFieldRegistration";
import useFieldValidation, {
  UseFieldValidationOptions,
} from "./useFieldValidation";

export interface UseFieldOptions<Value extends FieldValue>
  extends UseFieldValidationOptions<Value> {
  type?: LiteralUnion<React.HTMLInputTypeAttribute>;
  label?: string;
}

export interface UseFieldResult<Value extends FieldValue> extends FieldEevents<Value> {
  value: Value;
  error: FormzError | undefined;
  checked?: boolean;
  formId: string;
  actions: FieldActions<Value>;
}

/**
 * Custom hook to plugin to the state of a specific input field. You can use this to
 * build your own input primitives if you so desire.
 * @param name The name of the input field.
 * @param options Options to customize behaviour.
 */
function useField<
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue
>(name: Key, options: UseFieldOptions<Value>): UseFieldResult<Value> {
  const { required, type = "text", max, min, pattern, label } = options;

  const id = useFormIdContext();
  const value = useFieldValue<Key>(id, name) as Value;
  const actions = useFieldActions<Value>(id, name);

  const { validate, error } = useFieldValidation<Key, Value>(id, name, {
    validate: options.validate,
    required,
    max,
    min,
    pattern,
    label
  });

  const { onChange, onBlur } = useFieldEvents(id, name, validate);

  useFieldRegistration(id, name, validate, type);

  return {
    value,
    checked: type === "checkbox" && isBoolean(value) ? value : undefined,
    onChange,
    onBlur,
    error,
    formId: id,
    actions
  };
}

export function useTextField<Key extends FieldId = FieldId>(name: Key, options: UseFieldOptions<string | undefined>) {
  return useField<Key, string | undefined>(name, { type: "text", ...options});
}

export function useNumberField<Key extends FieldId = FieldId>(name: Key, options: UseFieldOptions<number | undefined>) {
  return useField<Key, number | undefined>(name, { ...options, type: "number" });
}

export function useBooleanField<Key extends FieldId = FieldId>(name: Key, options: UseFieldOptions<boolean | undefined>) {
  return useField<Key, boolean | undefined>(name, { ...options, type: "checkbox"});
}

export function useRadioField<Key extends FieldId = FieldId>(name: Key, options: UseFieldOptions<string | undefined>) {
  return useField<Key, string | undefined>(name, { ...options, type: "radio"});
}

export function useSelectField<Key extends FieldId = FieldId>(name: Key, options: UseFieldOptions<string | undefined>) {
  return useField<Key, string | undefined>(name, { ...options, type: "select"});
}

export function useDateField<Key extends FieldId = FieldId>(name: Key, options: UseFieldOptions<string | undefined>) {
  return useField<Key, string | undefined>(name, { ...options, type: "date"});
}

export function useCustomField<Value extends FieldValue, Key extends FieldId = FieldId>(name: Key, options: UseFieldOptions<Value>) {
  return useField<Key, Value>(name, options);
}

export default useField;
