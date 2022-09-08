import set from "../set"

describe('utils/set', () => {  
    it("should set the value on an object with a depth of 1", () => {
        const object = set({ }, "name", "hello");

        expect(object).toHaveProperty("name", "hello");
    });

    it("should exit early and just return the object is not an object", () => {
        const originalArray: string[] = [];
        const array = set(originalArray, "[1]", "hello");

        expect(array).toStrictEqual(originalArray);
    });

    it("should set the value of a nested property", () => {
        const object = set<"hello", { name?: { value?: string }}>({ }, "name.value", "hello");

        expect(object.name).toHaveProperty("value", "hello");
        expect(object).toEqual({
            name: {
                value: "hello"
            }
        });
    });

    it("should set the value of an indexed property", () => {
        const object = set<"hello", { name: { values: string[] }}>({ name: { values: ["goodbye"]}}, "name.values[1]", "hello");

        expect(object.name.values[1]).toBe("hello");
        expect(object).toEqual({
            name: {
                values: ["goodbye", "hello"]
            }
        })
    });

    it("should set the value of a a deeply nested property", () => {
        const object = set<string, any>({ }, "name.value[0].name.goal", "hello");

        expect(object.name.value[0].name.goal).toBe("hello");
        expect(object).toEqual({
            name: {
                value: [{ name: { goal: "hello" }}]
            }
        })
    });

    it("should delete property if value passed is undefined", () => {
        const object = set({ name: true }, "name", undefined);

        expect(object).not.toHaveProperty("name");
        expect(object).toEqual({});
    });
})