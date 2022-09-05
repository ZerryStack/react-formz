import create from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { FormzMiddlewares, FormzStore } from "./store.types";
import { mergeDeepLeft } from "ramda";

const middlewares = ((fn) =>
  persist<FormzStore>(immer(fn), {
    name: "react-formz",
    getStorage: () => localStorage,
    merge: (persistedState, currentState) =>
      mergeDeepLeft(
        persistedState as FormzStore["forms"],
        currentState
      ) as FormzStore,
    partialize: (state) => ({
      forms: Object.keys(state.forms).reduce((forms, key) => {
        const form = state.forms[key];

        if (form?.saveDrafts) {
          return { ...forms, [key]: form };
        }
        return forms;
      }, {}),
    }),
    onRehydrateStorage: () => {},
  })) as FormzMiddlewares;

export const formzStore = create<FormzStore>()(
  middlewares((set) => ({
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

(global as any).formzStore = formzStore;
