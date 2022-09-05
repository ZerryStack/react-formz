import { formzStore } from "../store";

function setFieldTouched(formId: string, name: string, touched: boolean) {
  formzStore.setState((state) => {
    state.forms[formId].touched[name] = touched;
  });
}

export default setFieldTouched;
