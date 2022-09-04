import { FormzState, FormzValues } from "../types/form";

export interface FormzStore {
    forms: Record<string, FormzState<any>>;
    addForm: <Values extends FormzValues>(id: string, initialValues: Values) => void;
    removeForm: (id: string) => void;
}