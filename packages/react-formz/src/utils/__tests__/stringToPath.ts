import stringToPath from "../stringToPath"

describe('utils/stringToPath', () => { 
    it("should convert simple string to path", () => {
        const path = stringToPath("name");

        expect(path).toEqual(["name"])
    });

    it("should convert complex string to path", () => {
        const path = stringToPath("name.value[0]");

        expect(path).toEqual(["name", "value", "0"])
    });
 });