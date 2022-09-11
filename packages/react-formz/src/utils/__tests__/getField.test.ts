import { FormzChangeEvent } from "../../types/events";
import getField from "../getField";

describe("utils/getField", () => {
  it("should return text value if passed", () => {
    const field = getField({} as FormzChangeEvent, "username");

    expect(field).toEqual("username");
  });

  it("should return event target name", () => {
    const field = getField({
      target: {
        name: "username",
      },
    } as unknown as FormzChangeEvent);

    expect(field).toEqual("username");
  });

  it("should return event target id if name not found", () => {
    const field = getField({
      target: {
        id: "username",
      },
    } as unknown as FormzChangeEvent);

    expect(field).toEqual("username");
  });

  it("should throw error if can't find field", () => {
    expect(() => getField("")).toThrowError(
      "Unable to get field name."
    );
  });
});
