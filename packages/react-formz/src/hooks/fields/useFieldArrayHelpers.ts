import { formzStore } from "../../store";
import useStableCallback from "../utils/useStableCallback";
import * as arrayHelpers from "../../utils/array";
import get from "../../utils/get";
import { FieldValidator } from "../../types/field";
import useFieldValidation from "./useFieldValidation";

export interface ArrayHelpers<Value> {
  remove: (index: number) => void;
  add: (value: Value, index?: number) => void;
  insert: (index: number, value: Value) => void;
  update: (index: number, value: Value) => void;
}

/**
 * Helper functions for manipulating fields that are arrays.
 */
function useFieldArrayHelpers<Value>(
  formId: string,
  fieldName: string,
  validate?: FieldValidator<Value[]>
): ArrayHelpers<Value> {
  const fieldValidation = useFieldValidation(formId, fieldName, { validate });

  const remove = useStableCallback((index: number) => {
    formzStore.setState((state) => {
      const array: Value[] = get(state.forms[formId].values, fieldName);

      arrayHelpers.remove(array, index);
    });

    fieldValidation.validate();
  });

  const insert = useStableCallback((index: number, value: Value) => {
    formzStore.setState((state) => {
      const array: Value[] = get(state.forms[formId].values, fieldName);

      arrayHelpers.insert(array, index, value);
    });

    fieldValidation.validate();
  });

  const add = useStableCallback((value: Value, index?: number) => {
    formzStore.setState((state) => {
      const array: Value[] = get(state.forms[formId].values, fieldName);

      arrayHelpers.add(array, value, index);
    });

    fieldValidation.validate();
  });

  const update = useStableCallback((index: number, value: Value) => {
    formzStore.setState((state) => {
      const array: Value[] = get(state.forms[formId].values, fieldName);

      arrayHelpers.update(array, index, value);
    });

    fieldValidation.validate();
  });

  return { remove, insert, update, add };
}

export default useFieldArrayHelpers;
