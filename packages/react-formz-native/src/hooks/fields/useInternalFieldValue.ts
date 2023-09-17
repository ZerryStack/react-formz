import { useState, useRef, useEffect } from "react";
import {
    FieldId,
  FieldValue,
  UseFieldResult,
  useFieldValidation,
  useFormz,
  useStableCallback,
} from "@zerry/react-formz-core";
import { useArrayFieldProvider } from "../../providers/ArrayFieldProvider";

/**
 * Custom hook that will optionally mange a fields value internally within the hook
 * rather than sending the value to the form store. When using array fields, setting the
 * value on the form store cause the enitre list to re-render on every keystroke
 * which will cause the keyboard to disappear. 
 * 
 * As a workaround, for fields rendered within an `ArrayField` the value
 * will be updated using `setState` and then synced to the store **after**
 * the user finishes typing or submits the form.
 * 
 * @param name The field name
 * @param field The result from the `useField` hook.
 */
function useInternalFieldValue<Value extends FieldValue, Key extends FieldId>(name: Key, field: UseFieldResult<Value>) {
  const isSubmitting = useFormz((state) => state.forms[field.formId].isSubmitting);

  const [internalValue, setInternalValue] = useState(field.value);

  const internalValueRef = useRef(internalValue);

  const { validateValue } = useFieldValidation(field.formId, name, {});

  const isWithinArrayField = useArrayFieldProvider();

  const handleChange = useStableCallback((value: Value) => {
    if (isWithinArrayField) {
      setInternalValue(value);
      validateValue(value);
    } else {
      field.onChange(value);
    }
  });

  const handleFinishEditing = useStableCallback(() => {
    if (isWithinArrayField) {
      field.onChange(internalValue);
      validateValue(internalValue);
    }
    field.onBlur();
  });

  const handleBlur = useStableCallback(() => {
    if (isWithinArrayField) {
      field.onChange(internalValue);
      validateValue(internalValue);
    }
    field.onBlur();
  });

  internalValueRef.current = internalValue;

  useEffect(() => {
    return function fieldUnmount() {
      if (isWithinArrayField) {
        field.onChange(internalValueRef.current);
      }
    }
  }, [isSubmitting]);

  const value = isWithinArrayField ? internalValue : field.value;

  return { handleChange, handleBlur, handleFinishEditing, value };
}

export default useInternalFieldValue;

