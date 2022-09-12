import create from "zustand";
import { immer } from "zustand/middleware/immer";
import SchemaValidator from "../models/SchemaValidator";
import { FormId, FormzValues } from "../types/form";
import {
  FormzStore,
  FormzFieldsStore,
  FormzSchemaValidatorStore,
} from "./store.types";

export const formzSchemaValidatorStore = create<FormzSchemaValidatorStore>(
  (set) => ({
    validators: {},
    registerValidator: (formId, schemaValidator) => {
      set((state) => {
        return {
          ...state,
          validators: {
            ...state.validators,
            [formId]: schemaValidator,
          },
        };
      });
    },
    unregisterValidator: (formId) => {
      set((state) => {
        const nextState = {
          ...(state || {
            validators: {},
          }),
        };

        if (nextState.validators[formId]) {
          delete nextState.validators[formId];
        }

        return nextState;
      });
    },
  })
);
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
              [payload.id]: payload,
            },
          },
        },
      };
    });
  },
  unregisterField: (formId, fieldId) => {
    set((state) => {
      const nextState = {
        ...(state || {
          forms: {},
        }),
      };

      if (nextState.forms[formId]?.fields) {
        delete nextState.forms[formId].fields[fieldId];
      }

      return nextState;
    });
  },
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

export const useFormzSchemaValidators = formzSchemaValidatorStore;

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

export function useRegisterSchemaValidator() {
  return useFormzSchemaValidators((state) => state.registerValidator);
}

export function useUnregisterSchemaValidator() {
  return useFormzSchemaValidators((state) => state.unregisterValidator);
}

export function useFormSchemaValidator<Values extends FormzValues>(
  formId: FormId
): SchemaValidator<Values> | undefined {
  return useFormzSchemaValidators((state) => state.validators[formId]);
}

(global as any).formzStore = formzStore;
