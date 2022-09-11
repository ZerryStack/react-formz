import getTag from "../getTag";

describe("utils/getTag", () => {
  it("should return tag for null field", () => {
    expect(getTag(null)).toEqual("[object Null]");
  });
  
  it("should return tag for undefined field", () => {
    expect(getTag(undefined)).toEqual("[object Undefined]");
  });

  it("should return tag for undefined field", () => {
    expect(getTag("hey")).toEqual("[object String]");
  });
});
