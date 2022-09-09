import { actions } from "../../store";
import { FieldId, FieldValue } from "../../types/field";
import { FormId, FormzError } from "../../types/form";
import useStableCallback from "../utils/useStableCallback";

export interface FieldActions<Value extends FieldValue> {
    setValue: (value: Value) => void;
    setError: (error: FormzError) => void;
}

/**
 * Custom hook that returns an object of actions one can take on a field.
 * @param formId The id of the form
 * @param fieldName The name of the field
 */
function useFieldActions<Value extends FieldValue>(formId: FormId, fieldName: FieldId): FieldActions<Value> {
    const setValue = useStableCallback((value: Value) => {
        actions.setFieldValue(formId, fieldName, value);
    });

    const setError = useStableCallback((error: FormzError) => {
        actions.setFieldError(formId, fieldName, error);
    });

    return { setValue, setError };
}

export default useFieldActions;
