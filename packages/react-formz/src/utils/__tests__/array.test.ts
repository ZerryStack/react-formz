import {
  add,
  insert,
  insertFirst,
  remove,
  removeFirst,
  removeLast,
  update,
} from "../array";

describe("utils/array", () => {
  describe("remove", () => {
    it("should remove item from array", () => {
      const array = ["1", "2", "3"];
      const result = remove(array, 1);

      expect(array).toEqual(["1", "3"]);
      expect(result).toEqual(["2"]);
    });
  });

  describe("removeFirst", () => {
    it("should remove first item from array", () => {
      const array = ["1", "2", "3"];
      const result = removeFirst(array);

      expect(array).toEqual(["2", "3"]);
      expect(result).toEqual("1");
    });
  });

  describe("removeFirst", () => {
    it("should remove last item from array", () => {
      const array = ["1", "2", "3"];
      const result = removeLast(array);

      expect(array).toEqual(["1", "2"]);
      expect(result).toEqual("3");
    });
  });

  describe("insert", () => {
    it("should insert item into array at index", () => {
      const array = ["1", "2", "3"];
      const result = insert(array, 1, "4");

      expect(array).toEqual(["1", "4", "2", "3"]);
      expect(result).toEqual([]);
    });
  });

  describe("insertFirst", () => {
    it("should insert item into beginning of array", () => {
      const array = ["1", "2", "3"];
      const result = insertFirst(array, "4");

      expect(array).toEqual(["4", "1", "2", "3"]);
      expect(result).toEqual(["4"]);
    });
  });

  describe("add", () => {
    it("should insert item into end of array", () => {
      const array = ["1", "2", "3"];
      const result = add(array, "4");

      expect(array).toEqual(["1", "2", "3", "4"]);
      expect(result).toEqual("4");
    });
    it("should insert item into array at index if index passed", () => {
        const array = ["1", "2", "3"];
        const result = add(array, "4", 0);
  
        expect(array).toEqual(["4", "1", "2", "3"]);
        expect(result).toEqual("4");
      });
  });

  describe("update", () => {
    it("should update non-object in array", () => {
      const array = ["1", "2", "3"];
      const result = update(array, 1, "4");

      expect(array).toEqual(["1", "4", "3"]);
      expect(result).toEqual("4");
    });
    it("should update object in array", () => {
      const array = [{ name: "John" }, { name: "Alex" }, { name: "Devon" }];
      const result = update(array, 1, { name: "Trisha" });

      expect(array).toEqual([
        { name: "John" },
        { name: "Trisha" },
        { name: "Devon" },
      ]);
      expect(result).toEqual({ name: "Trisha" });
    });
  });
});
