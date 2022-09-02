import { AnyObject } from "immer/dist/internal";
import React from "react";
import useCachedValue from "../../hooks/useCachedValue";
import FormProvider, { useFormContext } from "../../providers/FormProvider";
import { isFunction } from "../../utils/is";
import { FormChildrenProps, FormProps } from "./Form.types";

const FormChildren = <Values extends AnyObject>({
  children,
}: FormChildrenProps<Values>) => {
  const form = useFormContext<Values>();

  return <>{children(form)}</>;
};

const Form = <Values extends AnyObject>({
  children,
  name,
  initialValues,
  ...formProps
}: FormProps<Values>) => {
  const memoizedInitialValues = useCachedValue(initialValues);

  return (
    <FormProvider name={name} initialValues={memoizedInitialValues}>
      <form name={name} {...formProps}>
        {isFunction(children) ? (
          <FormChildren>{children}</FormChildren>
        ) : (
          children
        )}
      </form>
    </FormProvider>
  );
};

export default Form;
