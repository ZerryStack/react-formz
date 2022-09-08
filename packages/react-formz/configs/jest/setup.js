import "@testing-library/jest-dom";
import { formzFieldsStore, formzStore } from "../../src/store";

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
