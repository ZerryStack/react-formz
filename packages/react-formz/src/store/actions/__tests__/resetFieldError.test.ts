import { FormzState } from "../../../types/form";
import { formzStore } from "../../store";
import resetFieldError from "../resetFieldError";
import { setFieldError } from "../setFieldError";

describe("store/actions/resetFieldError", () => {
  it("should delete field error and change form state isInvalid property to false", () => {
    formzStore.setState((state) => {
      state.forms["user"] = {
        errors: {},
      } as any as FormzState<any>;
    });

    setFieldError("user", "name", {
      type: "max",
      message: "Invalid value",
    });
    resetFieldError("user", "name");

    expect(formzStore.getState().forms["user"].errors).toEqual({});
    expect(formzStore.getState().forms["user"].isInvalid).toEqual(false);
  });

  it("should delete field error and change form state isInvalid to true when other fields are invalid", () => {
    formzStore.setState((state) => {
      state.forms["user"] = {
        errors: {},
      } as any as FormzState<any>;
    });

    setFieldError("user", "name", {
      type: "max",
      message: "Invalid value",
    });

    setFieldError("user", "hobby", {
      type: "max",
      message: "Invalid value",
    });

    resetFieldError("user", "name");

    expect(formzStore.getState().forms["user"].errors).toEqual({
      hobby: {
        type: "max",
        message: "Invalid value",
      },
    });
    expect(formzStore.getState().forms["user"].isInvalid).toEqual(true);
  });
});
