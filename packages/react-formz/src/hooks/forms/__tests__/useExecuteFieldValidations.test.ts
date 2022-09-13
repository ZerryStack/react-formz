import { renderHook } from "@testing-library/react-hooks";
import { defaultTestFormName } from "../../../../testUtils/constants";
import { formzFieldsStore } from "../../../store";
import useExecuteFieldValidations from "../useExecuteFieldValidations";

describe("hooks/forms/useExecuteFieldValidations", () => {
  it("should execute all field validations and return true if all fields valid", async () => {
    const field1Validate = jest.fn().mockImplementation(async () => true);
    const field2Validate = jest.fn().mockImplementation(async () => true);

    formzFieldsStore.setState((state) => {
      return {
        ...state,
        forms: {
          ...state.forms,
          [defaultTestFormName]: {
            fields: {
              field1: {
                id: "field1",
                validate: field1Validate,
                type: "text",
              },
              field2: {
                id: "field2",
                validate: field2Validate,
                type: "text",
              },
            },
          },
        },
      };
    });

    const {
      result: { current: validate },
    } = renderHook(() => useExecuteFieldValidations(defaultTestFormName));

    const result = await validate();

    expect(result).toEqual(true);
    expect(field1Validate).toHaveBeenCalled();
    expect(field2Validate).toHaveBeenCalled();
  });

  it("should return false at first non-valid field", async () => {
    const field1Validate = jest.fn().mockImplementation(async () => true);
    const field2Validate = jest.fn().mockImplementation(async () => false);

    formzFieldsStore.setState((state) => {
      return {
        ...state,
        forms: {
          ...state.forms,
          [defaultTestFormName]: {
            fields: {
              field1: {
                id: "field1",
                validate: field1Validate,
                type: "text",
              },
              field2: {
                id: "field2",
                validate: field2Validate,
                type: "text",
              },
            },
          },
        },
      };
    });

    const {
      result: { current: validate },
    } = renderHook(() => useExecuteFieldValidations(defaultTestFormName));

    const result = await validate();

    expect(result).toEqual(false);
    expect(field1Validate).toHaveBeenCalled();
    expect(field2Validate).toHaveBeenCalled();
  });
});
