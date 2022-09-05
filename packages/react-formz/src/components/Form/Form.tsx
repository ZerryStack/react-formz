import React from "react";
import useLatest from "../../hooks/utils/useLatest";
import useStableCallback from "../../hooks/utils/useStableCallback";
import logger from "../../logger";
import FormProvider, { useFormContext } from "../../providers/FormProvider";
import { actions } from "../../store";
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
  ...formProps
}: Omit<FormProps<Values>, "initialValues">) => {
  const form = useFormContext<Values>();

  const handleSubmit = useStableCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (onSubmit) {
        actions.setFormIsSubmitting(form.id, true);

        const { values, errors } = actions.getFormState<Values>(form.id);

        try {
          await onSubmit(values, errors);
        } catch (error) {
          logger.error(
            `An uncaught expception occured when submitting form with id`,
            form.id,
            error
          );
        } finally {
          actions.incrementFormSubmitCount(form.id);
          actions.setFormIsSubmitting(form.id, false);
        }
      }
    }
  );

  if (!form.initialized) return null;

  return (
    <Component {...formProps} onSubmit={handleSubmit} name={name}>
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
  ...formProps
}: FormProps<Values>) => {
  const memoizedInitialValues = useLatest(initialValues);

  return (
    <FormProvider name={name} initialValues={memoizedInitialValues}>
      <FormInner name={name} {...formProps}>
        {children}
      </FormInner>
    </FormProvider>
  );
};

export default Form;
