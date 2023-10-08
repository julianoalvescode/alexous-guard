"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = void 0;
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
class AlexousGuard {
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
    guardModel({ model, object }) {
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
    guardModelArray({ model, array }) {
        for (let object of array) {
            if (!this.guardModel({ model, object })) {
                return false;
            }
        }
        return true;
    }
}
exports.t = new AlexousGuard();
