import { formzStore } from "../store";
import set from "../../utils/set";

function setFieldTouched(formId: string, name: string, touched: boolean) {
  formzStore.setState((state) => {
    set(state.forms[formId].touched, name, touched);
  });
}

export default setFieldTouched;
