import React, { createContext, useContext } from "react";
import { UseFormOptions } from "../../hooks/forms/useForm";
import useFormHydration from "../../hooks/forms/useFormHydration";
import useFormId from "../../hooks/forms/useFormId";
import useRegisterFormSchema from "../../hooks/forms/useRegisterFormSchema";
import { FormzValues } from "../../types/form";

const Context = createContext<string | null>(null);

/**
 * Provides consumers with a stable unique id for a
 * single form. Since the `id` is stable, it gets it's
 * own provider which allows any component in its' subtree
 * to subscribe to the `id` and not re-render because the
 * `id` never changes. This id is used to interact with the
 * form store.
 */
const FormIdProvider = <Values extends FormzValues>({
  children,
  name,
  initialValues,
  saveDrafts,
  onFormRehydrated,
  schemaValidator,
  persist = false
}: React.PropsWithChildren<UseFormOptions<Values>>) => {
  const id = useFormId(name, initialValues, undefined, saveDrafts, persist);

  useFormHydration(id, saveDrafts ?? false, onFormRehydrated);

  useRegisterFormSchema(id, schemaValidator, persist);

  return <Context.Provider value={id}>{children}</Context.Provider>;
};

/**
 * Hook to grab the id of a form from the form id context.
 */
export function useFormIdContext() {
  const id = useContext(Context);

  if (!id) {
    throw new Error("`useFormIdContext` must be used within a <Form />");
  }

  return id;
}

export default FormIdProvider;
