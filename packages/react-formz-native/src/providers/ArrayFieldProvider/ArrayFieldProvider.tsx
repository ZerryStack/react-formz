import React, { createContext, useContext } from "react";

const Context = createContext<boolean>(false);

/**
 * Informs fields rendered within an array provider that they are within an array.
 */
const ArrayFieldProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  return <Context.Provider value={true}>{children}</Context.Provider>;
};

/**
 * Custom hook that returns true if a field is rendered within an array.
 */
export function useArrayFieldProvider(): boolean {
  const value = useContext(Context);

  if (!value) {
    return false;
  }

  return true;
}

export default ArrayFieldProvider;
