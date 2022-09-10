import { useRef } from "react";
import { FieldValue } from "../../types/field";
import { FormzValues } from "../../types/form";
import { useFormz } from "../store";
import { FormzStore } from "../store.types";

function memoizeSelector<
  Values extends FormzValues,
  Selector extends (state: FormzStore) => Values
>(fn: Selector) {
  let value: Values;
  let values: FieldValue[];

  return function memoized(state: FormzStore): Values {
    const nextValue = fn(state);

    if (value === undefined) value = nextValue;
    if (values === undefined) values = Object.values(nextValue);

    const notChanged = Object.values(nextValue).every((currentValue, index) => {
      return currentValue === values[index];
    });

    const valuesHaveChanged = !notChanged;

    if (valuesHaveChanged) {
      value = nextValue;
      values = Object.values(nextValue);
    }


    return value;
  };
}

function useMemoizedSelector<
  Values extends FormzValues,
  Selector extends (state: FormzStore) => Values = (state: FormzStore) => Values
>(selector: Selector): Values {
  const ref = useRef<((state: FormzStore) => Values) | null>(null);

  if (!ref.current) {
    ref.current = memoizeSelector<Values, Selector>(selector);
  }

  const values = useFormz(ref.current);

  return values;
}

export default useMemoizedSelector;
