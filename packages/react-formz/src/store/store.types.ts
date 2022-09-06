import { FieldId } from "../types/field";
import { FormId, FormzState, FormzValues } from "../types/form";

export interface RegisterFieldPayload {
    id: FieldId;
    validate: () => Promise<boolean>;
}
export interface FormzFieldsStore {
  forms: Record<FormId, {
    fields: Record<FieldId, RegisterFieldPayload>
  }>;
  registerField: (formId: FormId, payload: RegisterFieldPayload) => void;
  unregisterField: (formId: FormId, fieldId: FieldId) => void;
};

export interface FormzStore {
  forms: Record<FormId, FormzState<any>>;
  addForm: <Values extends FormzValues>(
    id: FormId,
    initialValues: Values,
    saveDrafts: boolean,
  ) => void;
  removeForm: (id: FormId) => void;
}

