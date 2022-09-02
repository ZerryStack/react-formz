import { useRef } from "react";
import uuid from "react-uuid";

function useFormId(name?: string) {
  const idRef = useRef<string | undefined>(name);

  if (!idRef.current) {
    idRef.current = uuid();
  }

  const { current: id } = idRef;

  return id;
}

export default useFormId;

