import {
  Form, Field, PredefinedValidator, FormGetField,
} from '../components/Validation/types';

export {
  Form, Field,
};

export interface FunctionalValidator {
  (value: any): boolean,
}

export type Validator = FunctionalValidator | PredefinedValidator | RegExp;

export type InvalidMessage = string;

export interface SingleFunctionValidator {
  invalidMessage?: InvalidMessage,
  validate: FunctionalValidator,
}

export interface ExternalValidator {
  invalidMessage?: string,
  validator: Validator | Validator[],
}

export interface FormFieldHelpers {
  get: () => FormGetField | undefined,
  remove: () => void,
  reset: () => boolean,
  validate: (warpedValidator?: ExternalValidator | ExternalValidator[]) => Field | undefined,
}

export interface FormFieldsHelpers {
  get: () => FormGetField[],
  remove: () => void,
  reset: () => boolean,
  validate: () => Field[],
}
