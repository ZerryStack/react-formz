import { useFormz } from "../../store";

/**
 * Custom hook to return whether or not a form has been initialized
 * i.e. the initial form object has been add to the form store. This happens
 * after the first mount of the form.
 * @param id The id of the form.
 */
function useFormStateInitialized(id: string) {
  const initialized = useFormz((state) => state.forms[id]?.initialized ?? false);

  return initialized;
}

export default useFormStateInitialized;
