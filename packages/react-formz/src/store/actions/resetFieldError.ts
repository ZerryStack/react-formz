import { formzStore } from "../store";
import updateIsInvalid from "./updateIsInvalid";

function resetFieldError(formId: string, name: string) {
  formzStore.setState((state) => {
    delete state.forms[formId].errors[name];
    updateIsInvalid(state, formId);
  });
}

export default resetFieldError;
