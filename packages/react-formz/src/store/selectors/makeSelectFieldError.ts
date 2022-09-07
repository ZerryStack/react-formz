import get from "../../utils/get";
import { FormzStore } from "../store.types";

function makeSelectFieldError(id: string, field: string) {
    return (state: FormzStore) => get(state.forms[id].errors, field);
}

export default makeSelectFieldError;
