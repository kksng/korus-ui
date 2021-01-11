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
