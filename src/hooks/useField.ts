import { useFormIdContext } from "../providers/FormIdProvider";
import { updateFormValue, useFormz } from "../store";
import { FieldValue } from "../types/field";
import { FormzState } from "../types/form";
import useEventCallback from "./useEventCallback";

export interface UseFieldOptions {
  type: React.HTMLInputTypeAttribute;
}

export interface UseFieldResult<Value extends FieldValue> {
  value: Value;
  onChange: (event: React.ChangeEvent<any>) => void;
}

function useField<
  Key extends string = string,
  Value extends FieldValue = FieldValue
>(name: Key, options?: UseFieldOptions): UseFieldResult<Value> {
  const id = useFormIdContext();

  const value = useFormz((state) => {
    const form = state.forms[id] as FormzState<Record<Key, Value>>;

    const value = form?.values[name];

    return value;
  });

  const handleChange = useEventCallback((event: React.ChangeEvent<any>) => {
    updateFormValue(event, id, name);
  });

  return { value, onChange: handleChange };
}

export default useField;
