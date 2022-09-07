import { FormzValues } from "../../types/form";
import get from "../../utils/get";
import { FormzStore } from "../store.types";

function makeSelectFieldValue<Key extends string, Values extends FormzValues>(
  id: string,
  field: Key
) {
  return (state: FormzStore) => {
    return get<Key, Values>(state.forms[id].values, field)
  };
}

export default makeSelectFieldValue;
