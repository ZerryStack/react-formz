import { useCallback, useRef } from "react";
import uuid from "react-uuid";
import logger from "../logger";
import { useAddForm, useFormz, useRemoveForm } from "../store";
import { AnyObject } from "../types";
import { isString } from "../utils/is";
import useEventCallback from "./use";
import useComponentDidMount from "./useComponentDidMount";
import getField from "../utils/getField";
import getFieldValue from "../utils/getFieldValue";
import { FormzForm } from "../store/store.types";
import useFormId from "./useFormId";
import useFormEvents from "./useFormEvent";

export interface UseFormOptions<Values extends AnyObject> {
  name?: string;
  initialValues: Values;
}

export interface UseFormResult<Values extends AnyObject> {
  id: string;
  initialValues: Values;
  values: Values;
  handleChange: (eventOrPath: string | React.ChangeEvent<any>) => void;
}

function useForm<Values extends AnyObject>(
  options: UseFormOptions<Values>
): UseFormResult<Values> {
  const id = useFormId(options.name);
  const addForm = useAddForm();
  const removeForm = useRemoveForm();
  const formState = useFormz<FormzForm<Values> | undefined>(
    (state) => state.forms[id]
  );
  const { handleChange } = useFormEvents(id);

  useComponentDidMount(() => {
    addForm(id, options.initialValues);

    return function useFormCleanup() {
      logger.log(
        `Removing form ${id} from the global store.`,
        useFormz.getState().forms[id].values
      );

      removeForm(id);
    };
  });

  return {
    id: id,
    initialValues: options.initialValues,
    values: formState?.values ?? options.initialValues,
    handleChange,
  };
}

export default useForm;
