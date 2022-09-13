import { formzStore, useFormSchemaValidator } from "../../store";
import { FormzValues } from "../../types/form";
import useStableCallback from "../utils/useStableCallback";

/**
 * Custom hook to return a function that validates a form using an instance of a schema validator.
 * @param formId The id of the form.
 */
function useValidateFormSchema<Values extends FormzValues>(formId: string) {
  const schemaValidator = useFormSchemaValidator<Values>(formId);

    const validateSchema = useStableCallback(async () => {

        if (schemaValidator) {
            const { forms } = formzStore.getState();
            const form = forms[formId];
    
            if (form) {
                const { errors } = await schemaValidator.validate(form.values);

                if (!errors) return true;
                
                formzStore.setState((state) => {
                    const form = state.forms[formId];

                    if (form) {
                        form.errors = {
                            ...form.errors,
                            ...errors
                        }
                    }
                });

                return false;
            }
        }

        return true;
    });

    return validateSchema;
}

export default useValidateFormSchema;