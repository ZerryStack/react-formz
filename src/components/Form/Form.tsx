import { AnyObject } from "immer/dist/internal";
import React, { useMemo } from "react";
import FormProvider, { useFormContext } from "../../providers/FormProvider";
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
  const memoizedInitialValues = useMemo(() => initialValues, []);

  return (
    <FormProvider name={name} initialValues={memoizedInitialValues}>
      <form name={name} {...formProps}>
        {typeof children === "function" ? (
          <FormChildren children={children} />
        ) : (
          children
        )}
      </form>
    </FormProvider>
  );
};

export default Form;
