import React from "react";
import useCachedValue from "../../hooks/useCachedValue";
import useEventCallback from "../../hooks/useEventCallback";
import logger from "../../logger";
import FormProvider, { useFormContext } from "../../providers/FormProvider";
import { incrementFormSubmitCount } from "../../store";
import { getFormState } from "../../store/store";
import { FormzValues } from "../../types/form";
import { isFunction } from "../../utils/is";
import { FormChildrenProps, FormProps } from "./Form.types";

const FormChildren = <Values extends FormzValues>({
  children,
  form,
}: FormChildrenProps<Values>) => {
  return <>{children(form)}</>;
};

const HtmlForm = <Values extends FormzValues>({
  name,
  onSubmit,
  children,
  component: Component = "form",
  ...formProps
}: Omit<FormProps<Values>, "initialValues">) => {
  const form = useFormContext<Values>();

  const handleSubmit = useEventCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (onSubmit) {
        const { values, errors } = getFormState<Values>(form.id);

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
