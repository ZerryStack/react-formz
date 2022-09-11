import get from "../get"

describe('utils/get', () => { 
    it("should get value without indices", () => {
        const result = get({ name: "John" }, "name");

        expect(result).toEqual("John");
    });

    it("should get array value within object", () => {
        const result = get({ names: ["John"] }, "names[0]");

        expect(result).toEqual("John");
    });

    it("should get object nested within array", () => {
        const result = get({ names: [{ name: "John"}] }, "names[0].name");

        expect(result).toEqual("John");
    });

    it("should get deeply nested value", () => {
        const result = get({ names: [{ cards: [{ name: "John" }] }] }, "names[0].cards[0].name");

        expect(result).toEqual("John");
    });

    it("should get path using an array path", () => {
        const result = get({ names: ["John"] }, ["names", "0"]);

        expect(result).toEqual("John");
    });
 })