import { FormzValues, FormzState } from "../../types/form";
import { formzStore } from "../store";

function getFormState<Values extends FormzValues>(id: string): FormzState<Values>  {
    const state = formzStore.getState().forms[id];

    return state;
}

export default getFormState;
