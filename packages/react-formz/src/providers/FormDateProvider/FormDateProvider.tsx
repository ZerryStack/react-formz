import React, { createContext, useContext } from "react";
import useStableValue from "../../hooks/utils/useStableValue";
import { FormDateProviderProps } from "./FormDateProvider.types";

const Context = createContext<FormDateProviderProps | null>(null);

const defaultFormatter = (date: string | number | Date) => new Date(date).toLocaleDateString();

/**
 * Provides all child forms with a specific date formatter.
 */
const FormDateProvider = ({
  formatter,
  children
}: React.PropsWithChildren<Partial<FormDateProviderProps>>) => {
  const value = useStableValue<FormDateProviderProps>({
    formatter: formatter ?? defaultFormatter
  })

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

/**
 * Hook to grab form date logic.
 */
export function useFormDateContext(): FormDateProviderProps {
  const value = useContext(Context);

  if (!value) {
    return { formatter: defaultFormatter };
  }

  return value;
}

export default FormDateProvider;
