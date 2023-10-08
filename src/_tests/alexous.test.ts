import t from "./../index";

describe("AlexousGuard", () => {
  describe("guardModel", () => {
    it("should return true if object matches model", () => {
      const model = {
        name: "string",
        age: "number",
      };

      const object = {
        name: "John",
        age: 25,
      };

      expect(t.guardModel({ model, object })).toBeTruthy();
    });

    it("should return false if object does not have all properties", () => {
      const model = {
        name: "string",
        age: "number",
      };

      const object = {
        name: "John",
      };

      expect(t.guardModel({ model, object })).toBeFalsy();
    });

    it("should return false if object property type does not match model", () => {
      const model = {
        name: "string",
        age: "number",
      };

      const object = {
        name: "John",
        age: "25",
      };

      expect(t.guardModel({ model, object })).toBeFalsy();
    });
  });

  describe("guardModelArray", () => {
    it("should return true if all objects in array match model", () => {
      const model = {
        name: "string",
        age: "number",
      };

      const array = [
        { name: "John", age: 25 },
        { name: "Doe", age: 30 },
      ];

      expect(t.guardModelArray({ model, array })).toBeTruthy();
    });

    it("should return false if any object in array does not match model", () => {
      const model = {
        name: "string",
        age: "number",
      };

      const array = [
        { name: "John", age: 25 },
        { name: "Doe", age: "30" },
      ];

      expect(t.guardModelArray({ model, array })).toBeFalsy();
    });
  });
});
