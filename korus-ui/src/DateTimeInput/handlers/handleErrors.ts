import { isNil, isString, isDate } from 'lodash';
import { COMPONENT_TYPES } from '../constants';
import { checkIsDateFormatIncorrect, stringToDate } from '../helpers';
import { DateTimeInputProps } from '../types';
import { isDateGreater, isDateLess } from '../../Calendar/helpers';

const handleFormatErrors = (format: DateTimeInputProps['format'], type: DateTimeInputProps['type']): never | void => {
  if (!isString(format)) {
    throw new Error('DateTimeInput: format prop must be a string! '
     + `You passed: ${format}`);
  }

  if (type === COMPONENT_TYPES.DATE_ONLY) {
    if (
      !format.includes('dd')
      || !format.includes('MM')
      || !format.includes('yy')
      || format.includes('hh'
      || format.includes('mm'))) {
      throw new Error('DateTimeInput: incorrect format! Format prop must be a combination of "dd", "MM" and "yy" or "yyyy"! '
      + `You passed: ${format}`);
    }
  }

  if (type === COMPONENT_TYPES.DATE_TIME) {
    if (
      !format.includes('dd')
      || !format.includes('MM')
      || !format.includes('yy')
      || !format.includes('hh'
      || !format.includes('mm'))) {
      throw new Error('DateTimeInput: incorrect format! Format prop must be a combination of "dd", "MM", "yy" or "yyyy", "hh" and "mm"! '
      + `You passed: ${format}`);
    }
  }

  if (type === COMPONENT_TYPES.TIME_ONLY) {
    if (
      format.includes('dd')
      || format.includes('MM')
      || format.includes('yy')
      || !format.includes('hh'
      || !format.includes('mm'))) {
      throw new Error('DateTimeInput: incorrect format! Format prop must be a combination of "hh" and "mm"! '
      + `You passed: ${format}`);
    }
  }
};

const handleIncorrectDateErrors = (min: DateTimeInputProps['min'], max: DateTimeInputProps['max']): never | void => {
  if (checkIsDateFormatIncorrect(max)) {
    throw new Error('DateTimeInput: max prop must be an instance of Date or Moment! '
     + `You passed: ${max}`);
  }

  if (checkIsDateFormatIncorrect(min)) {
    throw new Error('DateTimeInput: min prop must be an instance of Date or Moment! '
     + `You passed: ${min}`);
  }
};

const handlePlaceholderErrors = (placeholder?: DateTimeInputProps['placeholder']): never | void => {
  if (!isNil(placeholder) && !isString(placeholder)) {
    throw new Error('DateTimeInput: placeholder prop must be a string! '
     + `You passed: ${placeholder}`);
  }
};

const handleValueErrors = (value: DateTimeInputProps['value'], format: DateTimeInputProps['format'] = 'dd.MM.yyyy'): never | void => {
  if (!isNil(value) && !isString(value) && !isDate(value)) {
    throw new Error('DateTimeInput: value prop must be a string or Date! '
     + `You passed: ${JSON.stringify(value)}`);
  }

  if (isString(value) && value.length > format.length) {
    throw new Error('DateTimeInput: value prop must fit format! '
     + `You passed: value ${JSON.stringify(value)}, format ${JSON.stringify(format)}`);
  }
};

const handleMinMaxErros = ({
  type,
  value,
  min,
  max,
  format,
}: {
  format: DateTimeInputProps['format'],
  max: DateTimeInputProps['max'],
  min: DateTimeInputProps['min'],
  type: DateTimeInputProps['type'],
  value: DateTimeInputProps['value'],
}): void => {
  if (type !== COMPONENT_TYPES.TIME_ONLY && !isNil(value) && isDate(value) && !isNil(min) && isDateLess(value, min)) {
    console.error(`DateTimeInput: you passed the value "${value.toLocaleString()}" that is less than min! This is probably a mistake!`);
  }

  if (type !== COMPONENT_TYPES.TIME_ONLY && !isNil(value) && isDate(value) && !isNil(max) && isDateGreater(value, max)) {
    console.error(`DateTimeInput: you passed the value "${value.toLocaleString()}" that is greater than max! This is probably a mistake!`);
  }

  if (type !== COMPONENT_TYPES.TIME_ONLY && !isNil(value) && isString(value) && !isNil(min)) {
    const parsedValue = stringToDate(value, format);

    if (parsedValue && isDateLess(parsedValue, min)) {
      console.error(`DateTimeInput: you passed the value "${value.toLocaleString()}" that is less than min! This is probably a mistake!`);
    }
  }

  if (type !== COMPONENT_TYPES.TIME_ONLY && !isNil(value) && isString(value) && !isNil(max)) {
    const parsedValue = stringToDate(value, format);

    if (parsedValue && isDateGreater(parsedValue, max)) {
      console.error(`DateTimeInput: you passed the value "${value.toLocaleString()}" that is greater than max! This is probably a mistake!`);
    }
  }
};

export const handleErrors = (props: DateTimeInputProps): void => {
  const {
    format, max, min, placeholder, value, type,
  } = props;

  handleFormatErrors(format, type);

  handleIncorrectDateErrors(min, max);

  handlePlaceholderErrors(placeholder);

  handleValueErrors(value, format);

  handleMinMaxErros({
    format,
    max,
    min,
    type,
    value,
  });
};
