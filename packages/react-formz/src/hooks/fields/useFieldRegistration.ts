import React from "react";
import { useRegisterField, useUnregisterField } from "../../store";
import useComponentDidMount from "../utils/useComponentDidMount";

/**
 * Registers a field with the field store. The field store holds information about specific
 * fields and is used to call field functions at various times.
 * @param formId The form id
 * @param fieldId The name of the field
 * @param validate The validate function
 */
function useFieldRegistration(
  formId: string,
  fieldId: string,
  validate: () => Promise<boolean>,
  type: React.HTMLInputTypeAttribute
) {
  const registerField = useRegisterField();
  const unregisterField = useUnregisterField();

  useComponentDidMount(() => {
    registerField(formId, { id: fieldId, validate, type });

    return function fieldUnmount() {
      unregisterField(formId, fieldId);
    };
  });
}

export default useFieldRegistration;
