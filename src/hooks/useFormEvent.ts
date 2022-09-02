import { useCallback } from "react";
import { useFormz } from "../store";
import getField from "../utils/getField";
import getFieldValue from "../utils/getFieldValue";
import { isString } from "../utils/is";
import useEventCallback from "./use";

function useFormEvents(id: string) {
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

  return { handleChange };
}

export default useFormEvents;

