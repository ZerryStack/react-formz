import { FormzError } from "../../types/form";
import { formzStore } from "../store";
import updateIsInvalid from "./updateIsInvalid";

export function setFieldError(formId: string, name: string, error: FormzError) {
  formzStore.setState((state) => {
    state.forms[formId].errors[name] = error;
    updateIsInvalid(state, formId);
  });
}
