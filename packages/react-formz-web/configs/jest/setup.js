import "@testing-library/jest-dom";
import { formzFieldsStore, formzStore } from "../../../react-formz/src";

beforeEach(() => {
  formzFieldsStore.setState((state) => {
    return {
      ...state,
      forms: {},
    };
  });

  formzStore.setState((state) => {
    state.forms = {};
  });
});
