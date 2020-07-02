import {
  isArray, isFunction, isRegExp, isString,
} from 'lodash';
import { PREDEFINED_VALIDATORS } from '../components/Validation/predefinedValidators';
import {
  ExternalValidator, Field, Form, SingleFunctionValidator,
} from './types';

// todo: types for value
// todo: check is working for all components
export const checkIsFilled = (value: any): boolean => {
  if (value == null) {
    return false;
  }

  if (isArray(value) || isString(value)) {
    return value.length !== 0;
  }

  // DropZone
  if (value.acceptedFiles) {
    return value.acceptedFiles.length !== 0;
  }

  return true;
};

export const getForm = (name: string): Form | undefined => {
  // @ts-ignore
  const forms: Form[] = window[Symbol.for('leda/validation-forms')] || [];
  return forms.find(({
    name: formName,
  }) => name === formName);
};

const getFormFields = (formName: string): Field[] => getForm(formName)?.fields ?? [];

export const pickField = (
  fields: Field[], fieldName: string,
): Field | undefined => fields.find((formField: Field) => fieldName === formField.name);

export const getField = (formName: string, fieldName: string): Field | undefined => {
  const fields = getFormFields(formName);
  return pickField(fields, fieldName);
};

export const getFields = (formName: string, fieldNames?: string[]): Field[] => {
  const fields = getFormFields(formName);
  if (fieldNames) {
    return fieldNames.reduce<Field[]>((accumulator, fieldName: string) => {
      const field = pickField(fields, fieldName);
      if (field) {
        accumulator.push(field);
      }
      return accumulator;
    }, []);
  }
  return fields;
};

export const externalToSingleFunctionValidator = (externalValidator: ExternalValidator): SingleFunctionValidator => {
  const {
    validator,
  } = externalValidator;
  const singleFunctionValidator: SingleFunctionValidator = {
    validate: () => true,
  };
  if (Array.isArray(validator)) {
    singleFunctionValidator.validate = (value) => validator.every((element) => {
      const validate = externalToSingleFunctionValidator({
        validator: element,
      });
      return validate.validate(value);
    });
  } else if (isFunction(validator)) {
    singleFunctionValidator.validate = validator;
  } else if (isRegExp(validator)) {
    singleFunctionValidator.validate = (value: string) => value.match(validator) != null;
  } else if (isString(validator)) {
    const predefinedValidator = PREDEFINED_VALIDATORS[validator];
    singleFunctionValidator.validate = predefinedValidator.validator;
    if (externalValidator.invalidMessage == null && predefinedValidator.invalidMessage) {
      singleFunctionValidator.invalidMessage = predefinedValidator.invalidMessage;
    }
  }
  if (singleFunctionValidator.invalidMessage == null && externalValidator.invalidMessage) {
    singleFunctionValidator.invalidMessage = externalValidator.invalidMessage;
  }
  return singleFunctionValidator;
};
