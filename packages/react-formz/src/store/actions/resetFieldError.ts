import { formzStore } from "../store";

function resetFieldError(formId: string, name: string) {
  formzStore.setState((state) => {
    delete state.forms[formId].errors[name];
  });
}

export default resetFieldError;
