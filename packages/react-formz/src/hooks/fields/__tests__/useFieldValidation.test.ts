import {
  renderHook,
  WrapperComponent,
  act,
} from "@testing-library/react-hooks";
import React from "react";
import { defaultTestFormName } from "../../../../testUtils/constants";
import createDefaultFormzState from "../../../../testUtils/createDefaultFormzState";
import renderWithFormIdProvider from "../../../../testUtils/renderWithFormIdProvider";
import { formzStore } from "../../../store";
import { FieldValue } from "../../../types/field";
import { FormzError } from "../../../types/form";
import useFieldValidation, {
  UseFieldValidationOptions,
} from "../useFieldValidation";

const fieldName = "test-field";

const wrapper: WrapperComponent<{ children: React.ReactNode }> = ({
  children,
}) => renderWithFormIdProvider(children);

function expectFieldErrorToBe(expectedError: FormzError | undefined) {
  const error =
    formzStore.getState().forms[defaultTestFormName].errors[fieldName];

  expect(error).toEqual(expectedError);
}

async function testFieldValidationHook(
  fieldValue: FieldValue,
  options: UseFieldValidationOptions,
  expectedError: FormzError | undefined
) {
  formzStore.setState((state) => {
    state.forms[defaultTestFormName].values[fieldName] = fieldValue;
  });

  const { result } = renderHook(
    () => useFieldValidation(defaultTestFormName, fieldName, options),
    {
      wrapper,
    }
  );

  await act(async () => {
    await result.current.validate();
  });

  expect(result.current.error).toEqual(expectedError);
  expectFieldErrorToBe(expectedError);
}

describe("hooks/fields/useFieldValidation", () => {
  beforeEach(() => {
    formzStore.setState((state) => {
      state.forms[defaultTestFormName] = createDefaultFormzState();
    });
  });

  it("should return an error when a required field is empty", async () => {
    await testFieldValidationHook(
      "",
      {
        required: true,
      },
      { type: "required", message: "test-field is required." }
    );
  });

  it("should return an error when a max field value is above max", async () => {
    await testFieldValidationHook(
      5,
      {
        max: 4,
      },
      {
        type: "max",
        message: "test-field is above the maximum value of 4.",
      }
    );
  });

  it("should return an error when a min field value is below min", async () => {
    await testFieldValidationHook(
      5,
      {
        min: 10,
      },
      {
        type: "min",
        message: "test-field is below the minimum value of 10.",
      }
    );
  });

  it("should return an error when a pattern field value does not match pattern", async () => {
    await testFieldValidationHook(
      "5",
      {
        pattern: /\[a-z]+/g,
      },
      {
        type: "pattern",
        message: "test-field does not match pattern /\\[a-z]+/g.",
      }
    );
  });

  it("should support custom validation errors", async () => {
    await testFieldValidationHook(
      "5",
      {
        validate: (value) => (value !== 4 ? "Bad value" : null),
      },
      {
        type: "custom",
        message: "Bad value",
      }
    );
  });
});
