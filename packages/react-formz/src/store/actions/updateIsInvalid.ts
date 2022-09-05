import { WritableDraft } from "immer/dist/internal";
import { FormzStore } from "../store.types";

function updateIsInvalid(state: WritableDraft<FormzStore>, formId: string) {
  state.forms[formId].isInvalid =
    Object.keys(state.forms[formId].errors).length > 0;
}

export default updateIsInvalid;
