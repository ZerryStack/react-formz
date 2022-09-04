import React, { useCallback } from "react";
import useCachedValue from "../../hooks/useCachedValue";
import useEventCallback from "../../hooks/useEventCallback";
import useFormStateInitialized from "../../hooks/useFormStateInitialized";
import logger from "../../logger";
import FormProvider, { useFormContext } from "../../providers/FormProvider";
import { formzStore, incrementFormSubmitCount } from "../../store";
import { FormzState, FormzValues } from "../../types/form";
import { isFunction } from "../../utils/is";
import { FormChildrenProps, FormProps } from "./Form.types";

const FormChildren = <Values extends FormzValues>({
  children,
  form
}: FormChildrenProps<Values>) => {
  
  return <>{children(form)}</>;
};

const HtmlForm = <Values extends FormzValues>({
  name,
  onSubmit,
  children,
  ...formProps
}: Omit<FormProps<Values>, "initialValues">) => {
  const form = useFormContext<Values>();
  
  const handleSubmit = useEventCallback(async () => {
    if (onSubmit) {
      const { values, errors }: FormzState<Values> =
        formzStore.getState().forms[form.id];

      try {
        await onSubmit(values, errors);
      } catch (error) {
        logger.error(
          `An uncaught expception occured when submitting form with id`,
          form.id,
          error
        );
      } finally {
        incrementFormSubmitCount(form.id);
      }
    }
  });

  if (!form.initialized) return null;

  return (
    <form {...formProps} onSubmit={handleSubmit} name={name}>
      {isFunction(children) ? (
        <FormChildren form={form}>{children}</FormChildren>
      ) : (
        children
      )}
    </form>
  );
};

const Form = <Values extends FormzValues>({
  children,
  name,
  initialValues,
  onSubmit,
  ...formProps
}: FormProps<Values>) => {
  const memoizedInitialValues = useCachedValue(initialValues);

  return (
    <FormProvider name={name} initialValues={memoizedInitialValues}>
      <HtmlForm name={name} {...formProps}>
        {children}
      </HtmlForm>
    </FormProvider>
  );
};

export default Form;
