import set from "../../utils/get";
import { formzStore } from "../store";
import updateIsInvalid from "./updateIsInvalid";

function resetFieldError(formId: string, name: string) {
  formzStore.setState((state) => {
    set(state.forms[formId].errors, name, undefined);
    updateIsInvalid(state, formId);
  });
}

export default resetFieldError;
