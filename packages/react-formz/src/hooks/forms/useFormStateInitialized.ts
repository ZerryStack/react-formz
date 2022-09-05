import { useFormz } from "../../store";

function useFormStateInitialized(id: string) {
  const initialized = useFormz((state) => state.forms[id]?.initialized ?? false);

  return initialized;
}

export default useFormStateInitialized;
