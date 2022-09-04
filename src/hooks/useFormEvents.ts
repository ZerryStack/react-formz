import { useCallback } from "react";
import { formzStore } from "../store";
import getField from "../utils/getField";
import getFieldValue from "../utils/getFieldValue";
import { isString } from "../utils/is";
import useEventCallback from "./useEventCallback";

/**
 * Creates event callbacks for form fields such as `onChange` or `onBlur`.
 * @param id The id of the form to subscribe to.
 * @returns Event handlers to be used on fields within a form.
 */
function useFormEvents(id: string) {
  const executeChange = useCallback(
    (eventOrTextValue: string | React.ChangeEvent<any>) => {
      formzStore.setState((state) => {
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

  const handleBlur = useEventCallback(
    (eventOrPath: string | React.ChangeEvent<any>) => {
      formzStore.setState((state) => {
        const field = isString(eventOrPath)
          ? eventOrPath
          : getField(eventOrPath);

        state.forms[id].touched[field] = true;
      });
    }
  );

  return { handleChange, handleBlur };
}

export default useFormEvents;
