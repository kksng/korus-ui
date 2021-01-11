import { isString } from 'lodash';
import * as helpers from './helpers';
import {
  ExternalValidator, Field, FormFieldHelpers, FormFieldsHelpers,
} from './types';
import { removeField, validate, getField } from '../components/Validation';
import { getFieldValidState, removeForm } from '../components/Validation/helpers';
import { FormGetField } from '../components/Validation/types';

const validateFieldUsingExternalValidator = (
  field: Field, externalValidators: ExternalValidator[] | ExternalValidator,
): Field => {
  const invalidMessages: string[] = [];

  const externalValidatorsArray = Array.isArray(externalValidators) ? externalValidators : [externalValidators];

  const singleFunctionValidators = externalValidatorsArray.map(helpers.externalToSingleFunctionValidator);

  singleFunctionValidators.forEach((validator) => {
    if (!validator.validate(field.value)) {
      field.isValid = false;
      if (validator.invalidMessage) {
        invalidMessages.push(validator.invalidMessage);
      }
    } else {
      field.isValid = true;
    }
  });

  if (!field.isValid) {
    field.invalidMessages = invalidMessages;
  }

  field.setIsValid(field.isValid);
  field.setMessages(field.invalidMessages);

  return field;
};


const getFormFieldHelpers = (formName: string, fieldName: string): FormFieldHelpers => ({
  get: () => getFieldValidState(formName, fieldName),
  remove: () => {
    removeField(formName, fieldName, { shouldRemoveUnmounted: true });
  },
  reset: () => {
    const field = getField(formName, fieldName);
    try {
      field?.reset();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return false;
    }
    return true;
  },
  validate: (externalValidators) => {
    const field = helpers.getField(formName, fieldName);
    if (field == null) {
      return undefined;
    }

    if (externalValidators) {
      return validateFieldUsingExternalValidator(field, externalValidators);
    }

    validate(formName, fieldName);

    return helpers.getField(formName, fieldName);
  },
});

const getFormFieldsHelpers = (formName: string, fieldNames?: string[]): FormFieldsHelpers => {
  const getFields = () => helpers.getFields(formName, fieldNames);
  return {
    get: () => {
      const fields = getFields();
      return fields.map((field) => (getFieldValidState(formName, field.name) as FormGetField));
    },
    remove: () => {
      if (fieldNames) {
        fieldNames.forEach((fieldName) => {
          removeField(formName, fieldName, { shouldRemoveUnmounted: true });
        });
        return;
      }

      removeForm(formName);
    },
    reset: () => {
      const fields = getFields();
      try {
        fields.forEach((field) => {
          field?.reset();
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return false;
      }
      return true;
    },
    validate: () => {
      // validation of the whole form with an external validator is not provided by design
      if (fieldNames) {
        fieldNames?.forEach((field) => {
          validate(formName, field);
        });
      } else {
        validate(formName);
      }

      const fields = getFields();
      return fields;
    },
  };
};

const form: {
  (name: string, field: string): FormFieldHelpers,
  (name: string, fields?: string[]): FormFieldsHelpers,
} = (formName: string, fieldNames?: string | string[]): any => {
  if (isString(fieldNames)) {
    return getFormFieldHelpers(formName, fieldNames);
  }
  return getFormFieldsHelpers(formName, fieldNames);
};

export {
  form,
};
