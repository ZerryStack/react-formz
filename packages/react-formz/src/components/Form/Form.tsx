import React from "react";
import useFormStateInitialized from "../../hooks/forms/useFormStateInitialized";
import useFormSubmission from "../../hooks/forms/useFormSubmission";
import useStableValue from "../../hooks/utils/useStableValue";
import useStableCallback from "../../hooks/utils/useStableCallback";
import logger from "../../logger";
import { useFormIdContext } from "../../providers/FormIdProvider";
import FormProvider from "../../providers/FormProvider";
import { FormzValues } from "../../types/form";
import { FormProps } from "./Form.types";

const FormInner = <Values extends FormzValues>({
  name,
  onSubmit,
  children,
  component: Component = "form",
  resetOnSubmit = false,
  ...formProps
}: Omit<FormProps<Values>, "initialValues" | "schemaValidator">) => {
  const id = useFormIdContext();
  const initialized = useFormStateInitialized(id);
  const handleSubmit = useFormSubmission(id, onSubmit, resetOnSubmit);

  if (!initialized) return null;

  return (
    <Component noValidate {...formProps} onSubmit={handleSubmit} name={name}>
      {children}
    </Component>
  );
};

/**
 * A `Form` is reponsible for wrapping the `Fields` that you want to render. It will keep track
 * of the form state and act as a context/provider for various hooks used within the `Form`'s
 * component tree. 
 * 
 * Example Usage:
 * 
 * ```tsx
 * function UserProfile() {
 *   return (
 *     <Form name="UserProfile" initialValues={{ firstName: "" }}>
 *        <TextField name="firstName" required pattern={/\w+/} as={({ input }) => <input {...input} />} />
 *     </Form>
 *   );
 * }
 * ```
 * @param props {@link FormProps} - The react props for the form component.
 * @typeParam Values {@link FormzValues} - The shape of the forms state i.e. the form data.
 */
const Form = <Values extends FormzValues>(props: FormProps<Values>) => {
  const {
    children,
    name,
    initialValues,
    saveDrafts,
    onFormRehydrated = () => {},
    schemaValidator,
    ...formProps
  } = props;
  const memoizedInitialValues = useStableValue(initialValues);
  const formRehydrationCallback = useStableCallback(onFormRehydrated);

  if (saveDrafts && !name) {
    logger.error(
      `Saving drafts is only supported when a form ` +
        `has a name. Without a name, a randomly generate uuid will be given to the form and that ` +
        `id will be different whenever the app is first loaded.`
    );
  }

  return (
    <FormProvider
      name={name}
      initialValues={memoizedInitialValues}
      saveDrafts={saveDrafts}
      onFormRehydrated={formRehydrationCallback}
      schemaValidator={schemaValidator}
    >
      <FormInner name={name} {...formProps}>
        {children}
      </FormInner>
    </FormProvider>
  );
}

export default Form;
