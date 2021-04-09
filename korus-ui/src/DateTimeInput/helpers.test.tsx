import { COMPONENT_TYPES, HOURS_LIMITS, MINUTES_LIMITS } from './constants';
import { defaultDateTimeInputTheme as theme } from './theme';
import * as helpers from './helpers';
import { VIEW_TYPES } from '../Calendar/constants';


describe('stringToDate tests', () => {
  it('Should return null when value is undefined', () => {
    const format = 'dd.MM.yyyy';
    const string = undefined;
    const expected = null;
    const received = helpers.stringToDate(string, format);
    expect(received).toBe(expected);
  });

  it('Should return null when string includes "_" ', () => {
    const format = 'dd.MM.yyyy';
    const string = '30_04_1991';
    const expected = null;
    const received = helpers.stringToDate(string, format);
    expect(received).toBe(expected);
  });

  it('Should return null when arguments are undefined', () => {
    const format = undefined;
    const string = undefined;
    const expected = null;
    const received = helpers.stringToDate(string, format);
    expect(received).toBe(expected);
  });

  it('Should return date if string of correct format is supplied', () => {
    const string = '05.05.2019';
    const format = 'dd.MM.yyyy';
    const expected = new Date(2019, 4, 5);
    const received = helpers.stringToDate(string, format);
    expect(received).toEqual(expected);
  });
});

describe('getMonthNameOfDate tests', () => {
  it('Should return name of first month of year', () => {
    const monthNumber = 0;
    const expected = 'января';
    const received = helpers.getMonthNameOfDate(monthNumber);
    expect(received).toBe(expected);
  });

  it('Should return name of second month of year', () => {
    const monthNumber = 1;
    const expected = 'февраля';
    const received = helpers.getMonthNameOfDate(monthNumber);
    expect(received).toBe(expected);
  });

  it('Should return name of third month of year', () => {
    const monthNumber = 2;
    const expected = 'марта';
    const received = helpers.getMonthNameOfDate(monthNumber);
    expect(received).toBe(expected);
  });

  it('Should return name of last month of year', () => {
    const monthNumber = 11;
    const expected = 'декабря';
    const received = helpers.getMonthNameOfDate(monthNumber);
    expect(received).toBe(expected);
  });
});

describe('normalizeValue tests', () => {
  it('Should return normalized date if value is greater than max', () => {
    const params = {
      format: 'dd.MM.yyyy',
      max: new Date('08.31.2019'),
      value: '01.09.2019',
    };
    const expected = '31.08.2019';
    const received = helpers.normalizeValue(params);
    expect(received).toBe(expected);
  });

  it('Should return normalized date if value is less than min', () => {
    const params = {
      format: 'dd.MM.yyyy',
      min: new Date('08.31.2019'),
      value: '30.08.2019',
    };
    const expected = '31.08.2019';
    const received = helpers.normalizeValue(params);
    expect(received).toBe(expected);
  });

  it('Should return value if value is within min-max range', () => {
    const params = {
      format: 'dd.MM.yyyy',
      max: new Date('09.30.2019'),
      min: new Date('08.31.2019'),
      value: '10.09.2019',
    };
    const expected = '10.09.2019';
    const received = helpers.normalizeValue(params);
    expect(received).toBe(expected);
  });
});

describe('isTimeWithinLimits tests', () => {
  it('Should return true when value is correct', () => {
    const mask = '##:##';
    const maskedValue = '13:15';
    expect(helpers.isTimeWithinLimits(mask, maskedValue)).toBe(true);
  });

  it('Should return false when value is greater than limit', () => {
    const mask = '##:##';
    const maskedValue = '24:24';
    expect(helpers.isTimeWithinLimits(mask, maskedValue)).toBe(false);
  });

  it('Should return true when value is equal to zero', () => {
    const mask = '##:##';
    const maskedValue = '00:00';
    expect(helpers.isTimeWithinLimits(mask, maskedValue)).toBe(true);
  });

  it('Should return false when seconds are greater than limit', () => {
    const mask = '##:##:##';
    const maskedValue = '07:24:61';
    expect(helpers.isTimeWithinLimits(mask, maskedValue)).toBe(false);
  });

  it('Should return false when value is invalid', () => {
    const mask = '##:##:##';
    const maskedValue = '-07:24:61';
    expect(helpers.isTimeWithinLimits(mask, maskedValue)).toBe(false);
  });
});

describe('extractFromFormat tests', () => {
  it('Should return value according to provided pattern', () => {
    const format = 'dd.MM.yy';
    const pattern = 'dd';
    const string = '18.05.19';
    const expected = 18;
    expect(helpers.extractFromFormat(format, pattern, string)).toBe(expected);
  });

  it('Should return null if wrong pattern is provided', () => {
    const format = 'dd.MM.yy';
    const pattern = 'ghg';
    const string = '18.05.19';
    const expected = null;
    expect(helpers.extractFromFormat(format, pattern, string)).toBe(expected);
  });
});

describe('formatDateTime tests', () => {
  it('Should return formatted string based on date value', () => {
    const date = new Date(2019, 4, 5, 10, 5, 30);
    const expected = '05.05.2019 10:05';
    expect(helpers.formatDateTime(date)).toBe(expected);
  });

  it('Should return empty string if null is provided', () => {
    const date = null;
    const expected = '';
    expect(helpers.formatDateTime(date)).toBe(expected);
  });
});

describe('formatDate tests', () => {
  it('Should return formatted string based on date value', () => {
    const date = new Date(2019, 4, 5, 10, 5, 30);
    const expected = '5 мая 2019';
    expect(helpers.formatDate(date)).toBe(expected);
  });
});

describe('createMask tests', () => {
  it('Should return correct mask for DATE_ONLY type', () => {
    const type = COMPONENT_TYPES.DATE_ONLY;
    let format = 'dd.MM.yyyy';
    let expected = '##.##.####';
    expect(helpers.createMask(format, type)).toBe(expected);

    format = 'dd.MM.yy';
    expected = '##.##.##';
    expect(helpers.createMask(format, type)).toBe(expected);

    format = '';
    expected = '##.##.####';
    expect(helpers.createMask(format, type)).toBe(expected);
  });

  it('Should return correct mask for DATE_TIME type', () => {
    const type = COMPONENT_TYPES.DATE_TIME;
    let format = 'dd.MM.yyyy hh:mm:ss';
    let expected = '##.##.#### ##:##:##';
    expect(helpers.createMask(format, type)).toBe(expected);

    format = 'dd.MM.yy hh:mm:ss';
    expected = '##.##.## ##:##:##';
    expect(helpers.createMask(format, type)).toBe(expected);

    format = '';
    expected = '##.##.#### ##:##';
    expect(helpers.createMask(format, type)).toBe(expected);
  });

  it('Should return correct mask for TIME_ONLY type', () => {
    const type = COMPONENT_TYPES.TIME_ONLY;
    let format = 'hh:mm:ss';
    let expected = '##:##:##';
    expect(helpers.createMask(format, type)).toBe(expected);

    format = 'hh:mm';
    expected = '##:##';
    expect(helpers.createMask(format, type)).toBe(expected);

    format = '';
    expected = '##:##';
    expect(helpers.createMask(format, type)).toBe(expected);
  });
});

describe('getInputWrapperClassNames tests', () => {
  const stateConfig = {
    date: new Date(),
    isFocused: false,
    isOpen: false,
    isValid: false,
    prevDate: new Date(),
    value: '',
    viewDate: new Date(),
    viewType: VIEW_TYPES.DATES,
  };

  it('Should add class "focused"', () => {
    const isValid = true;
    const props = {};
    const state = {
      ...stateConfig,
      isFocused: true,
    };
    const expected = `${theme.inputWrapper} ${theme.inputWrapperFocused}`;
    expect(helpers.getInputWrapperClassNames(theme, props, state, isValid)).toBe(expected);
  });

  it('Should add class "required"', () => {
    const isValid = true;
    const props = {
      isRequired: true,
      value: '',
    };
    const state = {
      ...stateConfig,
    };
    const expected = `${theme.inputWrapper} ${theme.inputWrapperRequired}`;
    expect(helpers.getInputWrapperClassNames(theme, props, state, isValid)).toBe(expected);
  });

  it('Should add class "disabled-state"', () => {
    const isValid = true;
    const props = {
      isDisabled: true,
    };
    const state = {
      ...stateConfig,
    };
    const expected = `${theme.inputWrapper} ${theme.wrapperDisabled}`;
    expect(helpers.getInputWrapperClassNames(theme, props, state, isValid)).toBe(expected);
  });

  it('Should add class "danger"', () => {
    const isValid = false;
    const props = {};
    const state = {
      ...stateConfig,
    };
    const expected = `${theme.inputWrapper} ${theme.inputWrapperInvalid}`;
    expect(helpers.getInputWrapperClassNames(theme, props, state, isValid)).toBe(expected);
  });
});

describe('normilizeNumber tests', () => {
  it('Should return min value if value is less than min value', () => {
    const limits: [number, number] = [10, 20];
    const value = 5;
    const expected = 10;
    expect(helpers.normilizeNumber(value, limits)).toBe(expected);
  });

  it('Should return max value if value is greater than max value', () => {
    const limits: [number, number] = [10, 20];
    const value = 25;
    const expected = 20;
    expect(helpers.normilizeNumber(value, limits)).toBe(expected);
  });

  it('Should return value if it is within limits', () => {
    const limits: [number, number] = [10, 20];
    const value = 15;
    const expected = 15;
    expect(helpers.normilizeNumber(value, limits)).toBe(expected);
  });
});

describe('normalizeTimeLimits tests', () => {
  it('Should correct limits if they are not within HOURS_LIMITS and MINUTES_LIMITS', () => {
    const hours = -10;
    const minutes = 69;
    const limits: [number, number] = [hours, minutes];
    const expected = [0, 59];
    expect(helpers.normalizeTimeLimits(limits)).toEqual(expected);
  });

  it('Should return provided limits if they are within HOURS_LIMITS and MINUTES_LIMITS', () => {
    const hours = 10;
    const minutes = 30;
    const limits: [number, number] = [hours, minutes];
    const expected = [10, 30];
    expect(helpers.normalizeTimeLimits(limits)).toEqual(expected);
  });

  it('Should return "undefined" if provided limits value is "undefined"', () => {
    const limits = undefined;
    const expected = undefined;
    expect(helpers.normalizeTimeLimits(limits)).toEqual(expected);
  });
});

describe('convertToDate tests', () => {
  // Helper is designed to convert Moment date to Date
  it('Should return same date if date is provided', () => {
    const date = new Date('05.05.2019');
    expect(helpers.convertToDate(date)).toEqual(date);
  });

  it('Should return undefined if undefined is provided', () => {
    const date = undefined;
    expect(helpers.convertToDate(date)).toEqual(date);
  });
});

describe('checkIsDateFormatIncorrect tests', () => {
  it('Should return false if date is of Date type', () => {
    const date = new Date('05.05.2019');
    expect(helpers.checkIsDateFormatIncorrect(date)).toBe(false);
  });

  it('Should return false if undefined is provided', () => {
    const date = undefined;
    expect(helpers.checkIsDateFormatIncorrect(date)).toBe(false);
  });
});

describe('getValue tests', () => {
  it('Should return date from valueProp as formatted string if valueProp is Date', () => {
    const params = {
      dateState: new Date('01.01.2011'),
      valueProp: new Date('05.05.2019'),
      valueState: '',
    };
    const expected = '05.05.2019';
    expect(helpers.getValue(params)).toBe(expected);
  });

  it('Should return valueProp if valueProp is string', () => {
    const params = {
      dateState: new Date('01.01.2011'),
      valueProp: '05.05.2019',
      valueState: '',
    };
    const expected = '05.05.2019';
    expect(helpers.getValue(params)).toBe(expected);
  });

  it('Should return empty string if valueProp is null', () => {
    const params = {
      dateState: new Date('01.01.2011'),
      valueProp: null,
      valueState: '',
    };
    const expected = '';
    expect(helpers.getValue(params)).toBe(expected);
  });

  it('Should return date from dateState as formatted string if valueProp is undefined', () => {
    const params = {
      dateState: new Date('01.01.2011'),
      valueProp: undefined,
      valueState: '',
    };
    const expected = '01.01.2011';
    expect(helpers.getValue(params)).toBe(expected);
  });

  it('Should return valueState if valueProp is undefined and dateState is null', () => {
    const params = {
      dateState: null,
      valueProp: undefined,
      valueState: '01.01.2011',
    };
    const expected = '01.01.2011';
    expect(helpers.getValue(params)).toBe(expected);
  });
});
