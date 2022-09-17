import { renderHook } from "@testing-library/react-hooks";
import { defaultTestFormName } from "../../../../testUtils/constants";
import createDefaultFormzState from "../../../../testUtils/createDefaultFormzState";
import { formzStore } from "../../../store";
import useFieldEvents from "../useFieldEvents";

function resetForm() {
  formzStore.setState((state) => {
    state.forms[defaultTestFormName] = createDefaultFormzState();
  });
}
function runTest() {
  const validate = jest.fn().mockImplementation(() => Promise.resolve(true));

  const { result } = renderHook(
    () => useFieldEvents(defaultTestFormName, "test-field", validate),
    {}
  );

  function expectFieldValueToBe(expectedValue: string) {
    const value =
      formzStore.getState().forms[defaultTestFormName].values["test-field"];

    expect(value).toBe(expectedValue);
  }

  return { result, validate, expectFieldValueToBe };
}

describe("hooks/fields/useFieldEvents", () => {
  describe("onChange", () => {
    beforeEach(resetForm);

    it("should change fields value using change event", () => {
      const { result, expectFieldValueToBe } = runTest();

      result.current.onChange({ target: { value: "John" } });

      expectFieldValueToBe("John");
    });

    it("should change a fields value using value", () => {
      const { result, expectFieldValueToBe } = runTest();

      result.current.onChange("John");

      expectFieldValueToBe("John");
    });

    it("should call validate function after change", () => {
      const { result, validate } = runTest();

      result.current.onChange("John");

      expect(validate).toHaveBeenCalledTimes(1);
    });
  });

  describe('onBlur', () => { 
    beforeEach(resetForm);

    it("should mark field as touched when called", () => {
        const { result } = runTest();
  
        result.current.onBlur();
  
        const touched = formzStore.getState().forms[defaultTestFormName].touched["test-field"];

        expect(touched).toBe(true);
    });

    it("should call validate function after change", () => {
        const { result, validate } = runTest();
  
        result.current.onBlur();
  
        expect(validate).toHaveBeenCalledTimes(1);
      });
   })
});
