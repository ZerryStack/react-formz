import { FormRehydrationCallback, FormzState, FormzValues } from "../types/form";

export interface FormzStore {
  forms: Record<string, FormzState<any>>;
  addForm: <Values extends FormzValues>(
    id: string,
    initialValues: Values,
    saveDrafts: boolean,
  ) => void;
  removeForm: (id: string) => void;
}

