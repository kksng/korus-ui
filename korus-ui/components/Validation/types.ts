/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { CustomRender, SetState } from '../../commonTypes';

export interface ValidationProps {
  form?: string,
  invalidMessage?: string,
  invalidMessageRender?: CustomRender<ValidationProps, ValidationState, InvalidMessageProps>,
  isRequired?: boolean,
  isValid?: boolean,
  name?: string,
  requiredMessage?: string,
  shouldValidateUnmounted?: boolean,
  validator?: Validator | PredefinedValidator | RegExp | ValidatorObject[],
  value?: any,
}

export interface ValidationButtonProps {
  form?: string | string[],
}

export interface Validator {
  (value: any): boolean,
}

export interface ValidatorObject {
  invalidMessage?: string,
  validator: string | RegExp | Validator,
}

export interface NormalizedValidatorObject extends ValidatorObject {
  validator: Validator,
}

export interface ValidationState {
  value?: any,
}

// результат - isValid, validateField, validateForm
export interface ValidationResult {
  InvalidMessage: React.FC<{}>,
  isValid: boolean,
  validateCurrent: (value?: any) => boolean,
}

export interface FormGetField {
  isFilled: boolean,
  isRequired: boolean,
  isValid: boolean,
  name: string,
  value: any,
}

export interface Field {
  invalidMessages?: string[],
  isRequired: boolean,
  isValid: boolean,
  name: string,
  requiredMessage?: string,
  reset: () => void,
  setIsValid: SetState<boolean>,
  setMessages: SetState<string[] | undefined>,
  shouldValidateUnmounted: boolean,
  validators: NormalizedValidatorObject[],
  value: any,
}

export interface Form {
  fields: Field[],
  name: string,
}

export interface FormsObject {
  [formName: string]: {
    [fieldName: string]: Field,
  },
}

export interface InvalidMessageProps {
  isValid: boolean,
  messages?: string[],
}

export type PredefinedValidator =
  | 'cadastralNumber'
  | 'email'
  | 'inn'
  | 'innCorp'
  | 'innPrivate'
  | 'password'
  | 'postalCode'
  | 'snils'
  | 'url'
  | 'ogrn'
  | 'ogrnIp'
  | 'kpp'
  | 'okpo';

export interface AddFieldData {
  fieldName: string,
  formName: string,
  isRequired?: boolean,
  requiredMessage?: string,
  reset: () => void,
  setIsValid: SetState<boolean>,
  setMessages: SetState<string[] | undefined>,
  shouldValidateUnmounted?: boolean,
  validators: NormalizedValidatorObject[],
  value: unknown,
}

export interface UpdateFieldData {
  fieldName: string,
  formName: string,
  isRequired?: boolean,
  isValidProp?: boolean,
  requiredMessage?: string,
  shouldValidateUnmounted?: boolean,
  validators: NormalizedValidatorObject[],
  value: unknown,
}

export interface ValidationExtra {
  reset: () => void,
}

export interface RemoveFieldOptions {
  shouldRemoveUnmounted?: boolean,
}
