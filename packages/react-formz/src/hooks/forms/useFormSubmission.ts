import logger from "../../logger";
import { actions } from "../../store";
import { FormSubmitCallback, FormzValues } from "../../types/form";
import useStableCallback from "../utils/useStableCallback";
import useExecuteFieldValidations from "./useExecuteFieldValidations";
import useValidateFormSchema from "./useValidateFormSchema";

/**
 * Custom hook that returns the submit callback for a form. The callback
 * will handle running validations, error catching and state management.
 * @param id The id of the form.
 * @param onSubmit The user provided submit callback
 * @param resetOnSubmit If true, will reset form state to initialValues after a successful submit.
 */
function useFormSubmission<Values extends FormzValues>(
  id: string,
  onSubmit?: FormSubmitCallback<Values>,
  resetOnSubmit: boolean = false,
) {
  const runFieldLevelValidations = useExecuteFieldValidations(id);
  const validateFormAgainstSchema = useValidateFormSchema(id);

  const handleSubmit = useStableCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (onSubmit) {
        actions.setFormIsSubmitting(id, true);

        try {
          const fieldsValid = await runFieldLevelValidations();
          const schemaValid = await validateFormAgainstSchema();

          const { values, errors } = actions.getFormState<Values>(id);

          if (fieldsValid && schemaValid) {
            await onSubmit(values, errors);

            if (resetOnSubmit) actions.resetFormState(id);
          }
        } catch (error) {
          logger.error(
            `An uncaught expception occured when submitting form with id`,
            id,
            error
          );
        } finally {
          actions.incrementFormSubmitCount(id);
          actions.setFormIsSubmitting(id, false);
        }
      }
    }
  );

  return handleSubmit;
}

export default useFormSubmission;
