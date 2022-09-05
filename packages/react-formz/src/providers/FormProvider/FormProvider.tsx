import React, { createContext, useContext, useMemo } from "react";
import useForm, { UseFormOptions } from "../../hooks/forms/useForm";
import { FormzValues } from "../../types/form";
import FormIdProvider, { useFormIdContext } from "../FormIdProvider";

const Context = createContext<UseFormOptions<any> | null>(null);

/**
 * Context provider for a forms configuration.
 */
const FormProvider = <Values extends FormzValues>({
  children,
  name,
  initialValues,
  saveDrafts
}: React.PropsWithChildren<UseFormOptions<Values>>) => {
  const options = useMemo(() => {
    return { name, initialValues, saveDrafts };
  }, []);

  return (
    <FormIdProvider name={name} initialValues={initialValues} saveDrafts={saveDrafts}>
      <Context.Provider value={options}>{children}</Context.Provider>
    </FormIdProvider>
  );
};

/** 
 * Creates a form api for interacting with a form.
*/
export function useFormContext<Values extends FormzValues>() {
  const id = useFormIdContext();
  const options = useContext(Context);

  if (!options) {
    throw new Error("`useFormContext` must be used within a <Form />");
  }

  const form = useForm<Values>({ ...options, id });

  return form;
}

export default FormProvider;
