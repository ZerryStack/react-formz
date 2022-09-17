import {
  FormzValues,
  FormProvider,
  useFormStateInitialized,
  useFormIdContext,
  useStableValue,
} from "@zerry/react-formz";
import React from "react";
import { FormProps } from "./Form.types";
import { View } from "react-native";

const ReactNativeFormInner = ({
  component: Component,
  children,
}: React.PropsWithChildren<{ component: React.ComponentType<any> }>) => {
  const id = useFormIdContext();
  const initialized = useFormStateInitialized(id);

  if (!initialized) return null;

  return <Component>{children}</Component>;
};

const ReactNativeForm = <Values extends FormzValues>({
  children,
  name,
  initialValues,
  saveDrafts = false,
  schemaValidator,
  component = View,
}: React.PropsWithChildren<FormProps<Values>>) => {
  const memoizedInitialValues = useStableValue(initialValues);

  return (
    <FormProvider
      name={name}
      initialValues={memoizedInitialValues}
      saveDrafts={saveDrafts}
      schemaValidator={schemaValidator}
    >
      <ReactNativeFormInner component={component}>
        {children}
      </ReactNativeFormInner>
    </FormProvider>
  );
};

export default ReactNativeForm;
