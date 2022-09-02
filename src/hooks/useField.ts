import { useCallback, useMemo } from "react";
import { useFormContext } from "../providers/FormProvider";
import { useFormz } from "../store";
import { FormzForm } from "../store/store.types";
import { AnyFormObject } from "../types";
import getFieldValue from "../utils/getFieldValue";

export interface UseFieldOptions<
  Values extends AnyFormObject,
  Key extends keyof Values
> {
  name: Key;
}

export interface UseFieldResult<
  Values extends AnyFormObject,
  Key extends keyof Values
> {
  value:  Values[Key];
  onChange: (event: React.ChangeEvent<any>) => void;
}

function useField<
  Values extends AnyFormObject,
  Key extends keyof Values = keyof Values
>(options: UseFieldOptions<Values, Key>): UseFieldResult<Values, Key> {
  const { id } = useFormContext();

  const value = useFormz<Values[Key]>((state) => {
    const form = state.forms[id] as FormzForm<Values>;

    return form?.values[options.name] ?? "";
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<any>) => {
      useFormz.setState((state) => {
        const value = getFieldValue(event);

        state.forms[id].values[options.name] = value;
      });
    },
    [id]
  );

  const result = useMemo(() => ({ value, onChange: handleChange }), [value, handleChange]);

  return result;
}

export default useField;
