import { FormzError } from "../../types/form";
import set from "../../utils/set";
import { formzStore } from "../store";
import updateIsInvalid from "./updateIsInvalid";

export function setFieldError(formId: string, name: string, error: FormzError) {
  formzStore.setState((state) => {
    set(state.forms[formId].errors, name, error);
    
    updateIsInvalid(state, formId);
  });
}
