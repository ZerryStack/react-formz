import doesNotMatchPattern from "../doesNotMatchPattern"

describe("validations/doesNotMatchPattern", () => {
    it("should return true if value does not match pattern", () => {
        const result = doesNotMatchPattern("123", /[a-z]+/);

        expect(result).toEqual(true);
    });

    it("should return false if value matches pattern", () => {
        const result = doesNotMatchPattern("abc", /[a-z]+/);

        expect(result).toEqual(false);
    });
})