import { FieldValue } from "../../types/field";
import get from "../../utils/get";
import { formzStore } from "../store";

function getFieldStoreValue<Value extends FieldValue = FieldValue>(formId: string, name: string): Value {
    return get(formzStore.getState().forms[formId].values, name);
}

export default getFieldStoreValue;
