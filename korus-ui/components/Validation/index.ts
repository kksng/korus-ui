/* eslint-disable @typescript-eslint/ban-ts-ignore */
const formsIdentifier: unique symbol = Symbol.for('leda/validation-forms');

// attach forms to window
// @ts-ignore
if (!window[formsIdentifier as unknown as string]) {
  // @ts-ignore
  window[formsIdentifier as unknown as string] = [];
}
export { useValidation } from './useValidation';

export {
  getForms,
  setForms,
  getField,
  validate,
  addField,
  removeField,
  updateField,
  getInvalidMessage,
} from './helpers';
