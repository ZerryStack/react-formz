import get from "../../utils/get";
import { FormzStore } from "../store.types";

function makeSelectFieldTouched(id: string, field: string) {
    return (state: FormzStore) => get(state.forms[id].touched, field) ?? false;
}

export default makeSelectFieldTouched;
