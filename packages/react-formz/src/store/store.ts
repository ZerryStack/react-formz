import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { FormzStore } from "./store.types";

export const formzStore = create<FormzStore>()(
    immer((set) => ({
      forms: {},
      addForm: (id, initialValues, saveDrafts) => {
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
              isInvalid: false,
              saveDrafts: saveDrafts,
              initialValues,
              lastPersistedAt: saveDrafts ? new Date() : null,
              hydrated: false,
              restoredFromDate: null
            }
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

(global as any).formzStore = formzStore;
