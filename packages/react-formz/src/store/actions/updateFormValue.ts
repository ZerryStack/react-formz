import { FormzChangeEvent } from "../../types/events";
import { FieldValue } from "../../types/field";
import getFieldValue from "../../utils/getFieldValue";
import { isChangeEvent } from "../../utils/is";
import set from "../../utils/set";
import { formzStore } from "../store";

function updateFormValue<Value extends FieldValue>(
  event: FormzChangeEvent<any>,
  id: string,
  field: string
): void;
function updateFormValue<Value extends FieldValue>(
  value: Value,
  id: string,
  field: string
): void;
function updateFormValue<Value extends FieldValue>(
  eventOrValue: FormzChangeEvent<any> | Value,
  id: string,
  field: string
) {
  formzStore.setState((state) => {
    if (isChangeEvent(eventOrValue)) {
      set(state.forms[id].values, field, getFieldValue(eventOrValue));
    } else {
      set(state.forms[id].values, field, eventOrValue);
    }
  });
}

export default updateFormValue;
