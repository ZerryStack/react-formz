import { actions } from "../../store";
import { FormzChangeEvent } from "../../types/events";
import useStableCallback from "../utils/useStableCallback";

/**
 * Custom react hook that returns event handlers for a field.
 * @param formId The form id
 * @param fieldName The field name
 * @param validate The field validate function.
 */
function useFieldEvents(
  formId: string,
  fieldName: string,
  validate: () => Promise<boolean>
) {
  const handleChange = useStableCallback((event: FormzChangeEvent<any>) => {
    actions.updateFormValue(event, formId, fieldName);

    validate();
  });

  const handleBlur = useStableCallback((_: React.FocusEvent<any>) => {
    actions.setFieldTouched(formId, fieldName, true);
    validate();
  });

  return { onChange: handleChange, onBlur: handleBlur };
}

export default useFieldEvents;
