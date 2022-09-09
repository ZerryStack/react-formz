import { FieldId, FieldValue } from "../../types/field";
import { FormId } from "../../types/form";
import { formzStore } from "../store";

function setFieldValue(formId: FormId, fieldName: FieldId, value: FieldValue) {
    formzStore.setState((state) => {
        state.forms[formId].values[fieldName] = value;
    });
}

export default setFieldValue;
