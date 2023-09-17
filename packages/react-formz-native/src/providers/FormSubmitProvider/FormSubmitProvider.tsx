import React, { createContext, useContext } from "react";
import {
  FormSubmitCallback,
  FormzValues,
  useStableCallback,
  useStableValue,
} from "@zerry/react-formz-core";

export interface FormSubmitProviderProps<Values extends FormzValues> {
  onSubmit?: FormSubmitCallback<Values>;
  /**
   * If true, will reset form state to initialValues after a successful submit.
   */
  resetOnSubmit?: boolean;
}

const Context = createContext<FormSubmitProviderProps<any> | null>(null);

const noop = () => {};

/**
 * Provides all child forms with a specific date formatter.
 */
const FormSubmitProvider = <Values extends FormzValues>({
  onSubmit,
  children,
  resetOnSubmit,
}: React.PropsWithChildren<Partial<FormSubmitProviderProps<Values>>>) => {
  const handleSubmit = useStableCallback(onSubmit ?? noop);
  const value = useStableValue<FormSubmitProviderProps<Values>>({
    onSubmit: onSubmit ? handleSubmit : undefined,
    resetOnSubmit,
  });

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

/**
 * Hook to get form submission context.
 */
export function useFormSubmitContext<
  Values extends FormzValues
>(): FormSubmitProviderProps<Values> {
  const value = useContext(Context);

  if (!value) {
    throw new Error("`useFormSubmitContext` must be used within a <Form/>");
  }

  return value;
}

export default FormSubmitProvider;
