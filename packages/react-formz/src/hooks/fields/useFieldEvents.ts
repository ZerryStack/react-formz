import { actions } from "../../store";
import { FormzChangeEventHandler } from "../../types/events";
import { FieldValue } from "../../types/field";
import useStableCallback from "../utils/useStableCallback";

export interface FieldEevents<Value extends FieldValue> {
  /**
   * The `onChange` callback should be called when the value of a field
   * changes. This will update the form state. 
   * 
   * `onChange` has 2 signatures:
   * 
   * 1. `onChange(event)`
   * 2. `onChange(value)`
   */
  onChange: FormzChangeEventHandler<Value>;
  /**
   * The `onBlur` callback should be called when the field loses focuses
   * i.e. the `onBlur` event is called.
   */
  onBlur: () => void;
}

/**
 * Custom react hook that returns event handlers for a field.
 * @param formId The form id
 * @param fieldName The field name
 * @param validate The field validate function.
 */
function useFieldEvents<Value extends FieldValue>(
  formId: string,
  fieldName: string,
  validate: () => Promise<boolean>
): FieldEevents<Value> {
  const handleChange: FormzChangeEventHandler<Value> = useStableCallback((eventOrValue) => {
    actions.updateFormValue(eventOrValue, formId, fieldName);

    validate();
  });

  const handleBlur = useStableCallback(() => {
    actions.setFieldTouched(formId, fieldName, true);
    validate();
  });

  return { onChange: handleChange, onBlur: handleBlur };
}

export default useFieldEvents;
