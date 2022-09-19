import {
  FormzValues,
  FormProvider,
  useFormStateInitialized,
  useFormIdContext,
  useStableValue,
} from "../../../../react-formz";
import React from "react";
import { NativeFormProps } from "./Form.types";
import { View, ViewProps } from "react-native";

const ReactNativeFormInner = ({
  component: Component,
  children,
  ...viewProps
}: React.PropsWithChildren<{ component: React.ComponentType<ViewProps> }>) => {
  const id = useFormIdContext();
  const initialized = useFormStateInitialized(id);

  if (!initialized) return null;

  return <Component {...viewProps}>{children}</Component>;
};

const ReactNativeForm = <Values extends FormzValues>({
  children,
  name,
  initialValues,
  saveDrafts = false,
  schemaValidator,
  component = View,
  ...viewProps
}: React.PropsWithChildren<NativeFormProps<Values>>) => {
  const memoizedInitialValues = useStableValue(initialValues);

  return (
    <FormProvider
      name={name}
      initialValues={memoizedInitialValues}
      saveDrafts={saveDrafts}
      schemaValidator={schemaValidator}
    >
      <ReactNativeFormInner component={component} {...viewProps}>
        {children}
      </ReactNativeFormInner>
    </FormProvider>
  );
};

export default ReactNativeForm;
