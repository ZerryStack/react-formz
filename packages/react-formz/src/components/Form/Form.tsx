import React from "react";
import useLatest from "../../hooks/utils/useLatest";
import useStableCallback from "../../hooks/utils/useStableCallback";
import logger from "../../logger";
import FormProvider, { useFormContext } from "../../providers/FormProvider";
import { actions, formzFieldsStore } from "../../store";
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

  const runFieldLevelValidations = useStableCallback(async () => {
    const { forms } = formzFieldsStore.getState();
    const { fields } = forms[form.id];

    let valid = true;

    for (const id in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, id)) {
        const field = fields[id];
        
        const result = await field.validate();

        if (result === false) valid = false;
      }
    }

    return valid;
  });

  const handleSubmit = useStableCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (onSubmit) {
        actions.setFormIsSubmitting(form.id, true);

        const { values, errors } = actions.getFormState<Values>(form.id);

        try {
          const fieldsValid = await runFieldLevelValidations();

          if (fieldsValid) {
            await onSubmit(values, errors);

            if (resetOnSubmit) actions.resetFormState(form.id);
          }
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
