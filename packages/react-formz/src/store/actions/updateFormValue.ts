import { FormzChangeEvent } from "../../types/events";
import getFieldValue from "../../utils/getFieldValue";
import set from "../../utils/set";
import { formzStore } from "../store";

function updateFormValue(
  event: FormzChangeEvent<any>,
  id: string,
  field: string
) {
  formzStore.setState((state) => {
    const value = getFieldValue(event);

    set(state.forms[id].values, field, value);
  });
}

export default updateFormValue;
