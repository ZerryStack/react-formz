import isBelowMin from "../isBelowMin"

describe("validations/isBelowMin", () => {
    it("should return true if value is less than min value", () => {
        const result = isBelowMin(5, 10);

        expect(result).toEqual(true);
    });

    it("should return false if value is greater than min value", () => {
        const result = isBelowMin(10, 5);

        expect(result).toEqual(false);
    });

    it("should return false if value is equal to min value", () => {
        const result = isBelowMin(10, 10);

        expect(result).toEqual(false);
    });
})