import { FormzState } from "../../../types/form";
import { formzStore } from "../../store";
import { setFieldError } from "../setFieldError";

describe("store/actions/setFieldError", () => {
  it("should set field error and change form state isInvalid property to true", () => {
    formzStore.setState((state) => {
      state.forms["user"] = {
        errors: {},
      } as any as FormzState<any>;
    });

    setFieldError("user", "name", {
      type: "max",
      message: "Invalid value",
    });

    expect(formzStore.getState().forms["user"].errors).toEqual({
      name: {
        type: "max",
        message: "Invalid value",
      },
    });
    expect(formzStore.getState().forms["user"].isInvalid).toEqual(true);
  });

  it("should set field error of nested path and change form state isInvalid property to true", () => {
    formzStore.setState((state) => {
      state.forms["user"] = {
        errors: {},
      } as any as FormzState<any>;
    });

    setFieldError("user", "name.values[0].name", {
      type: "max",
      message: "Invalid value",
    });

    expect(formzStore.getState().forms["user"].errors).toEqual({
      name: {
        values: [
          {
            name: {
              type: "max",
              message: "Invalid value",
            },
          },
        ],
      },
    });

    expect(formzStore.getState().forms["user"].isInvalid).toEqual(true);
  });
});
