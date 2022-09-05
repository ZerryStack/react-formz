import { FormzError } from "../../types/form";
import { formzStore } from "../store";

export function setFieldError(formId: string, name: string, error: FormzError) {
  formzStore.setState((state) => {
    state.forms[formId].errors[name] = error;
  });
}
