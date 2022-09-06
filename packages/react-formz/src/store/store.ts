import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { FormzStore, FormzFieldsStore } from "./store.types";

export const formzFieldsStore = create<FormzFieldsStore>((set) => ({
  forms: {},
  registerField: (formId, payload) => {
    set((state) => {
      return {
        ...state,
        forms: {
          ...state.forms,
          [formId]: {
            ...state.forms[formId],
            fields: {
              ...(state.forms[formId] || {}).fields,
              [payload.id]: payload
            }
          }
        }
      };
    });
  },
  unregisterField: (formId, fieldId) => {
    set((state) => {
      const nextState = { ...(state || {
        forms: {}
      }) };

      if (nextState.forms[formId]?.fields) {
        delete nextState.forms[formId].fields[fieldId];
      }

      return nextState;
    })
  }
}));

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
            restoredFromDate: null,
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

export const useFormzFields = formzFieldsStore;

export function useAddForm() {
  return useFormz((state) => state.addForm);
}

export function useRemoveForm() {
  return useFormz((state) => state.removeForm);
}

export function useRegisterField() {
  return useFormzFields((state) => state.registerField);
}

export function useUnregisterField() {
  return useFormzFields((state) => state.unregisterField);
}

(global as any).formzStore = formzStore;
