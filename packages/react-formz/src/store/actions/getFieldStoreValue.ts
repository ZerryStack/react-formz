import { FieldValue } from "../../types/field";
import { formzStore } from "../store";

function getFieldStoreValue<Value extends FieldValue = FieldValue>(formId: string, name: string): Value {
    return formzStore.getState().forms[formId].values[name];
}

export default getFieldStoreValue;
