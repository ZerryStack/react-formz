import { FormzState } from "../../../types/form";
import { formzStore } from "../../store";
import setFieldTouched from "../setFieldTouched";

describe("store/actions/setFieldTouched", () => {
  it("should set field touched to specified boolean", () => {
    formzStore.setState((state) => {
      state.forms["user"] = {
        touched: {},
      } as any as FormzState<any>;
    });

    setFieldTouched("user", "name", true);

    expect(formzStore.getState().forms["user"].touched.name).toEqual(true);
  });

  it("should set field touched of nested field to specified boolean", () => {
    formzStore.setState((state) => {
      state.forms["user"] = {
        touched: {},
      } as any as FormzState<any>;
    });

    setFieldTouched("user", "name.values[0].id", true);

    expect((formzStore.getState().forms["user"].touched as any).name.values[0].id).toEqual(true);
  });
});
