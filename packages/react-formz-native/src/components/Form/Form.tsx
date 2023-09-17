import {
  FormzValues,
  FormProvider,
  useFormStateInitialized,
  useFormIdContext,
  useStableValue,
} from "@zerry/react-formz-core";
import React from "react";
import { NativeFormProps } from "./Form.types";
import { View, ViewProps } from "react-native";
import FormSubmitProvider from "../../providers/FormSubmitProvider";

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
  onSubmit,
  resetOnSubmit = false,
  persist = false,
  ...viewProps
}: React.PropsWithChildren<NativeFormProps<Values>>) => {
  const memoizedInitialValues = useStableValue(initialValues);

  return (
    <FormProvider
      name={name}
      initialValues={memoizedInitialValues}
      saveDrafts={saveDrafts}
      schemaValidator={schemaValidator}
      persist={persist}
    >
      <FormSubmitProvider onSubmit={onSubmit} resetOnSubmit={resetOnSubmit}>
        <ReactNativeFormInner component={component} {...viewProps}>
          {children}
        </ReactNativeFormInner>
      </FormSubmitProvider>
    </FormProvider>
  );
};

/**
 * A form whose state will not be deleted from the store when unmounted.
 * 
 * This is useful for forms that may span multiple pages like wizards
 * or signup forms on mobile devices that might span multiple navigation routes.
 */
export const ReactNativePersistedForm = <Values extends FormzValues>({
  ...props
}: React.PropsWithChildren<NativeFormProps<Values>>) => {
  return <ReactNativeForm {...props} persist />;
};

export default ReactNativeForm;
