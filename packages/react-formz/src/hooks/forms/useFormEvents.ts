import { useCallback } from "react";
import { formzStore } from "../../store";
import { FormzChangeEvent } from "../../types/events";
import getField from "../../utils/getField";
import getFieldValue from "../../utils/getFieldValue";
import { isString } from "../../utils/is";
import useStableCallback from "../utils/useStableCallback";

/**
 * Custom react hook that returns event handlers for a forms inputs.
 * @param id The id of the form to subscribe to.
 * @returns Event handlers to be used on fields within a form.
 */
function useFormEvents(id: string) {
  const executeChange = useCallback(
    (eventOrTextValue: string | FormzChangeEvent<any>) => {
      formzStore.setState((state) => {
        const field = getField(eventOrTextValue);
        const value = getFieldValue(eventOrTextValue);

        state.forms[id].values[field] = value;
      });
    },
    [id]
  );

  const handleChange = useStableCallback(
    (eventOrPath: string | FormzChangeEvent<any>) => {
      if (isString(eventOrPath)) {
      } else {
        executeChange(eventOrPath);
      }
    }
  );

  const handleBlur = useStableCallback(
    (eventOrPath: string | FormzChangeEvent<any>) => {
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
