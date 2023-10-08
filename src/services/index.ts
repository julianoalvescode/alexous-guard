import * as I from "./types";

/**
 * AlexousGuard is a service that provides methods to validate objects and arrays of objects.
 * 
 * @example
 * 
 * const model = {
 *   name: "string",
 *   age: "number",
 * };
 * 
 * const object = {
 *   name: "John",
 *   age: 25,
 * };
 * 
 * t.guardModel({ model, object });
 *
 * Made by Alexous:
 */
class AlexousGuard implements I.AlexousGuard {
  /**
   * Validates if an object matches a given model.
   * @param params - The parameters for the validation.
   * @param params.modelo - The model to be matched.
   * @param params.objeto - The object to be validated.
   * @returns True if the object matches the model, false otherwise.
   *
   * @example
   *
   * const model = {
   *  name: "string",
   *  age: "number",
   * };
   *
   * const object = {
   *  name: "John",
   *  age: 25,
   * };
   *
   * t.guardModel({ model, object });
   *
   * Made by Alexous:
   */
  guardModel({ model, object }: I.GuardModelParams): boolean {
    for (let key in model) {
      if (!object.hasOwnProperty(key)) {
        return false;
      }

      if (typeof object[key] !== model[key]) {
        return false;
      }
    }

    return true;
  }

  /**
   * Validates if an array of objects matches a given model.
   * @param params - The parameters for the validation.
   * @param params.modelo - The model to be matched.
   * @param params.array - The array of objects to be validated.
   * @returns True if all objects in the array match the model, false otherwise.
   *
   * @example
   *
   * const model = {
   * name: "string",
   * age: "number",
   * };
   *
   * const array = [
   * { name: "John", age: 25 },
   * { name: "Doe", age: 30 },
   * ];
   *
   * t.guardModelArray({ model, array });
   *
   * Made by Alexous:
   */
  guardModelArray({ model, array }: I.GuardModelArrayParams): boolean {
    for (let object of array) {
      if (!this.guardModel({ model, object })) {
        return false;
      }
    }

    return true;
  }
}

export const t = new AlexousGuard();
