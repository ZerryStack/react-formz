import isAboveMax from "../isAboveMax"

describe("validations/isAboveMax", () => {
    it("should return true if value greater than max value", () => {
        const result = isAboveMax(10, 5);

        expect(result).toEqual(true);
    });

    it("should return false if value is below max value", () => {
        const result = isAboveMax(5, 10);

        expect(result).toEqual(false);
    });

    it("should return false if value is equal to max value", () => {
        const result = isAboveMax(10, 10);

        expect(result).toEqual(false);
    });
})