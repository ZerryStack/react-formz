import set from "../../utils/set";
import { formzStore } from "../store";
import updateIsInvalid from "./updateIsInvalid";

function resetFieldError(formId: string, name: string) {
  formzStore.setState((state) => {

    set(state.forms[formId].errors, name, undefined);

    updateIsInvalid(state, formId);
  });
}

export default resetFieldError;
