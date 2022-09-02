import React, { createContext, useContext } from "react";
import { UseFormOptions } from "../../hooks/useForm";
import useFormId from "../../hooks/useFormId";
import { AnyObject } from "../../types";

const Context = createContext<string | null>(null);

const FormIdProvider = <Values extends AnyObject>({
  children,
  name,
  initialValues,
}: React.PropsWithChildren<UseFormOptions<Values>>) => {
  const id = useFormId(name, initialValues);

  return <Context.Provider value={id}>{children}</Context.Provider>;
};

export function useFormIdContext() {
  const id = useContext(Context);

  if (!id) {
    throw new Error("`useFormIdContext` must be used within a <Form />");
  }

  return id;
}

export default FormIdProvider;
