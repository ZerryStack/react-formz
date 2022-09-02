import { useRef } from "react";
import uuid from "react-uuid";
import logger from "../logger";
import { useAddForm, useRemoveForm, useFormz } from "../store";
import { AnyObject } from "../types";
import useComponentDidMount from "./useComponentDidMount";

function useFormId(
  name: string | undefined = undefined,
  initialValues: AnyObject
) {
  const idRef = useRef<string | undefined>(name);

  const addForm = useAddForm();
  const removeForm = useRemoveForm();

  if (!idRef.current) {
    idRef.current = uuid();
  }

  const { current: id } = idRef;

  useComponentDidMount(() => {
    addForm(id, initialValues);

    return function useFormCleanup() {
      logger.log(
        `Removing form ${id} from the global store.`,
        useFormz.getState().forms[id].values
      );

      removeForm(id);
    };
  });

  return id;
}

export default useFormId;
