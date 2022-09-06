import { mergeDeepLeft } from "ramda";
import { useEffect } from "react";
import { formzStore, useFormz } from "../../store";
import { FormRehydrationCallback, FormzValues } from "../../types/form";
import useComponentDidMount from "../utils/useComponentDidMount";

/**
 * A custom hook to handle form rehydration and persistance.
 * @param id The id of the form
 * @param saveDrafts If true, will persist form state when changed
 * @param callback Will be called after a form has been rehydrated
 */
function useFormHydration<Values extends FormzValues>(
  id: string,
  saveDrafts: boolean,
  callback?: FormRehydrationCallback<Values>
) {
  const storageKey = `react-formz-${id}`;
  const hydrated = useFormz((state) => state.forms[id]?.hydrated ?? false);

  useEffect(() => {
    if (hydrated && callback) {
      const form = formzStore.getState().forms[id];
      callback(form, form.restoredFromDate);
    }
  }, [hydrated]);

  useComponentDidMount(() => {
    if (saveDrafts) {
      const cachedValue = localStorage.getItem(storageKey);

      if (cachedValue) {
        const prevForm = JSON.parse(cachedValue);

        formzStore.setState((state) => {
          state.forms[id] = mergeDeepLeft(prevForm, state.forms[id]);
          state.forms[id].restoredFromDate = state.forms[id].lastPersistedAt;
          state.forms[id].lastPersistedAt = new Date();
          state.forms[id].hydrated = true;
        });
      }

      return formzStore.subscribe((state) => {
        const form = state.forms[id];
        const isInvalid = state.forms[id].isInvalid;

        if (!isInvalid) {
          localStorage.setItem(storageKey, JSON.stringify(form));
        }
      });
    }
  });
}

export default useFormHydration;
