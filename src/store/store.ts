import create from "zustand";
import { immer } from "zustand/middleware/immer";
import logger from "../logger";
import getFieldValue from "../utils/getFieldValue";
import { FormzStore } from "./store.types";

export const formzStore = create<FormzStore>()(
  immer<FormzStore>((set) => ({
    forms: {},
    addForm: (id, initialValues) => {
      set((state) => {
        if (state.forms[id] === undefined) {
          state.forms[id] = {
            values: initialValues,
            touched: {},
            errors: {},
            isSubmitting: false,
            isValidating: false,
            submitCount: 0,
            initialized: true,
          };
        }
      });
    },
    removeForm: (id) => {
      set((state) => {
        if (state.forms[id]) delete state.forms[id];
      });
    },
  }))
);

export const useFormz = formzStore;

export function useAddForm() {
  return useFormz((state) => state.addForm);
}

export function useRemoveForm() {
  return useFormz((state) => state.removeForm);
}

export function incrementFormSubmitCount(id: string) {
  formzStore.setState((state) => {
    if (state.forms[id]) {
        state.forms[id].submitCount++;
    }
    else {
        logger.error(`You are attempting to submit a form that has unmounted with id: `, id);
    }
  });
}

export function updateFormValue(
  event: React.ChangeEvent<any>,
  id: string,
  field: string
) {
  formzStore.setState((state) => {
    const value = getFieldValue(event);

    state.forms[id].values[field] = value;
  });
}

(global as any).formzStore = formzStore;
