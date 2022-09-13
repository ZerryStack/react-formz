import { renderHook, WrapperComponent } from "@testing-library/react-hooks";
import React from "react";
import { defaultTestFormName } from "../../../../testUtils/constants";
import createDefaultFormzState from "../../../../testUtils/createDefaultFormzState";
import renderWithFormIdProvider from "../../../../testUtils/renderWithFormIdProvider";
import TestSchemaValidator from "../../../../testUtils/TestSchemaValidator";
import { formzSchemaValidatorStore, formzStore } from "../../../store";
import useValidateFormSchema from "../useValidateFormSchema";

const wrapper: WrapperComponent<{ children: React.ReactNode }> = ({
  children,
}) => renderWithFormIdProvider(children);

const schemaValidator = new TestSchemaValidator<{ name: string }>(
  async (values) => {
    if (values.name) {
      return { errors: undefined };
    }

    return {
      errors: {
        name: { message: "A name is required.", type: "required" },
      },
    };
  }
);

function deleteSchemaValidator() {
  formzSchemaValidatorStore.setState((state) => {
    const nextState = {
      ...state,
      validators: {
        ...state.validators,
      },
    };

    delete nextState.validators[defaultTestFormName];

    return nextState;
  });
}

function resetState() {
  formzSchemaValidatorStore.setState((state) => {
    return {
      ...state,
      validators: {
        ...state.validators,
        [defaultTestFormName]: schemaValidator,
      },
    };
  });
  formzStore.setState((state) => {
    state.forms[defaultTestFormName] = createDefaultFormzState();
  });
}

describe("hooks/forms/useValidateFormSchema", () => {
  beforeEach(resetState);

  it("should return true if a schema validator is not found", async () => {
    deleteSchemaValidator();

    const {
      result: { current: validate },
    } = renderHook(() => useValidateFormSchema(defaultTestFormName), {
      wrapper,
    });

    const result = await validate();

    expect(result).toBe(true);
  });

  it("should return false and set errors in form state if errors are found.", async () => {
    formzStore.setState((state) => {
      state.forms[defaultTestFormName].values["name"] = "";
    });

    const {
      result: { current: validate },
    } = renderHook(() => useValidateFormSchema(defaultTestFormName), {
      wrapper,
    });

    const result = await validate();

    const { errors } = formzStore.getState().forms[defaultTestFormName];

    expect(result).toBe(false);
    expect(errors).toEqual({
      name: { message: "A name is required.", type: "required" },
    });
  });

  it("should return true if field is valid", async () => {
    formzStore.setState((state) => {
      state.forms[defaultTestFormName].values["name"] = "john";
    });

    const {
      result: { current: validate },
    } = renderHook(() => useValidateFormSchema(defaultTestFormName), {
      wrapper,
    });

    const result = await validate();

    const { errors } = formzStore.getState().forms[defaultTestFormName];

    expect(result).toBe(true);
    expect(errors).toEqual({});
  });
});
