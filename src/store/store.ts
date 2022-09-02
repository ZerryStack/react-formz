import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { FormzStore } from "./store.types";

const formzStore = create<FormzStore>()(
  immer<FormzStore>((set) => ({
    forms: {},
    addForm: (id, initialValues) => {
        set((state) => {
          state.forms[id] = {
            values: initialValues,
          };
        });
      },
      removeForm: (id) => {
        set((state) => {
          delete state.forms[id];
        });
      },
  }))
);

export const useFormz = formzStore;
