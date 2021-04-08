import * as helpers from './helpers';

describe('stringToDate tests', () => {
  it('Shoulr return null when value undefined', () => {
    const format = 'dd.MM.yyyy';
    const string = undefined;
    const expected = null;
    const received = helpers.stringToDate(string, format);
    expect(received).toBe(expected);
  });

  it('Should return null when format undefined', () => {
    const format = undefined;
    const string = '30.04.1991';
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
  it('Should return normalized date when value greater than max', () => {
    const params = {
      value: '01.09.2019',
      format: 'dd.MM.yyyy',
      max: new Date('08.31.2019'),
    };
    const expected = '31.08.2019';
    const received = helpers.normalizeValue(params);
    expect(received).toBe(expected);
  });

  it('Should return normalized date when value less than min', () => {
    const params = {
      value: '30.08.2019',
      format: 'dd.MM.yyyy',
      min: new Date('08.31.2019'),
    };
    const expected = '31.08.2019';
    const received = helpers.normalizeValue(params);
    expect(received).toBe(expected);
  });

  it('Should return value if value located in range', () => {
    const params = {
      value: '10.09.2019',
      format: 'dd.MM.yyyy',
      min: new Date('08.31.2019'),
      max: new Date('09.30.2019')
    };
    const expected = '10.09.2019';
    const received = helpers.normalizeValue(params);
    expect(received).toBe(expected);
  });
});

describe('isTimeWithinLimits tests', () => {
  it('Should return true when value is correct', () => {
    const mask = '##:##';
    const maskedValue = '13:15';
    expect(helpers.isTimeWithinLimits(mask, maskedValue)).toBe(true);
  });

  it('Should return false when value greater than limit', () => {
    const mask = '##:##';
    const maskedValue = '24:24';
    expect(helpers.isTimeWithinLimits(mask, maskedValue)).toBe(false);
  });

  it('Should return true when value equal to zero', () => {
    const mask = '##:##';
    const maskedValue = '00:00';
    expect(helpers.isTimeWithinLimits(mask, maskedValue)).toBe(true);
  });

  it('Should return false when seconds greater than limit', () => {
    const mask = '##:##:##';
    const maskedValue = '07:24:61';
    expect(helpers.isTimeWithinLimits(mask, maskedValue)).toBe(false);
  });

  it('Should return false when value invalid', () => {
    const mask = '##:##:##';
    const maskedValue = '-07:24:61';
    expect(helpers.isTimeWithinLimits(mask, maskedValue)).toBe(false);
  });
});