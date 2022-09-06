import React from "react";
import useFormSubmission from "../../hooks/forms/useFormSubmission";
import useLatest from "../../hooks/utils/useLatest";
import useStableCallback from "../../hooks/utils/useStableCallback";
import logger from "../../logger";
import FormProvider, { useFormContext } from "../../providers/FormProvider";
import { FormzValues } from "../../types/form";
import { isFunction } from "../../utils/is";
import { FormChildrenProps, FormProps } from "./Form.types";

const FormChildren = <Values extends FormzValues>({
  children,
  form,
}: FormChildrenProps<Values>) => {
  return <>{children(form)}</>;
};

const FormInner = <Values extends FormzValues>({
  name,
  onSubmit,
  children,
  component: Component = "form",
  resetOnSubmit = false,
  ...formProps
}: Omit<FormProps<Values>, "initialValues">) => {
  const form = useFormContext<Values>();

  const handleSubmit = useFormSubmission(form.id, onSubmit, resetOnSubmit)

  if (!form.initialized) return null;

  return (
    <Component noValidate {...formProps} onSubmit={handleSubmit} name={name}>
      {isFunction(children) ? (
        <FormChildren form={form}>{children}</FormChildren>
      ) : (
        children
      )}
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
};

export default Form;
