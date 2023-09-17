import "@testing-library/jest-dom";
import { formzFieldsStore, formzStore } from "@zerry/react-formz-core";

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
