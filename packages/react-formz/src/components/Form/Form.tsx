import React from "react";
import useFormStateInitialized from "../../hooks/forms/useFormStateInitialized";
import useFormSubmission from "../../hooks/forms/useFormSubmission";
import useLatest from "../../hooks/utils/useLatest";
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
}: Omit<FormProps<Values>, "initialValues">) => {
  const id = useFormIdContext();
  const initialized = useFormStateInitialized(id);

  const handleSubmit = useFormSubmission(id, onSubmit, resetOnSubmit)

  if (!initialized) return null;

  return (
    <Component noValidate {...formProps} onSubmit={handleSubmit} name={name}>
      {children}
    </Component>
  );
};

const Form = <Values extends FormzValues>({
  children,
  name,
  initialValues,
  saveDrafts,
  onFormRehydrated = () => {},
  ...formProps
}: FormProps<Values>) => {
  const memoizedInitialValues = useLatest(initialValues);
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
    >
      <FormInner name={name} {...formProps}>
        {children}
      </FormInner>
    </FormProvider>
  );
}

export default Form;
