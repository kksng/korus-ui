import { Field, Form, FormsObject } from '../Validation/types';

export const fromFormArraytoFormObject = (forms: Form[]): FormsObject => forms.reduce((
  acc: FormsObject,
  currentForm,
) => {
  const fieldsObject = currentForm.fields.reduce((
    fieldAcc: {[x: string]: Field},
    currentField,
  ): {[fieldName: string]: Field} => {
    fieldAcc[currentField.name] = currentField;
    return fieldAcc;
  }, {});

  acc[currentForm.name] = fieldsObject;
  return acc;
}, {});

// Helper gets DOMRect of Element.
// If Element's height is 0, helper searches for nearest parent with height > 0
export const getElementRect = (element: HTMLElement): DOMRect => {
  const rect = element.getBoundingClientRect();

  if (rect.height === 0 && element.parentElement) {
    return getElementRect(element.parentElement);
  }
  return rect;
};
