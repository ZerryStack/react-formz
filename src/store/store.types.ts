import { AnyObject } from "../types";

export interface FormzForm<Values extends AnyObject = AnyObject> {
    values: Values;
}

export interface FormzStore {
    forms: Record<string, FormzForm<any>>;
    addForm: <Values extends AnyObject>(id: string, initialValues: Values) => void;
    removeForm: (id: string) => void;
}