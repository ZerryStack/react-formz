import { useCallback, useRef } from "react";
import uuid from "react-uuid";
import logger from "../logger";
import { useFormz } from "../store";
import { AnyObject } from "../types";
import { isString } from "../utils/is";
import useEventCallback from "./use";
import useComponentDidMount from "./useComponentDidMount";
import getField from "../utils/getField";
import getFieldValue from "../utils/getFieldValue";
import { FormzForm } from "../store/store.types";

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
  const idRef = useRef<string | undefined>(options.name);

  if (!idRef.current) {
    idRef.current = uuid();
  }

  const { current: id } = idRef;

  const forms = useFormz();
  const formState = useFormz<FormzForm<Values> | undefined>(
    (state) => state.forms[id]
  );

  const executeChange = useCallback(
    (eventOrTextValue: string | React.ChangeEvent<any>) => {
      useFormz.setState((state) => {
        const field = getField(eventOrTextValue);
        const value = getFieldValue(eventOrTextValue);

        state.forms[id].values[field] = value;
      });
    },
    [id]
  );

  const handleChange = useEventCallback(
    (eventOrPath: string | React.ChangeEvent<any>) => {
      if (isString(eventOrPath)) {
      } else {
        executeChange(eventOrPath);
      }
    }
  );

  useComponentDidMount(() => {
    forms.addForm(id, options.initialValues);

    return function useFormCleanup() {
      logger.log(
        `Removing form ${id} from the global store.`,
        useFormz.getState().forms[id].values
      );

      forms.removeForm(id);
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
