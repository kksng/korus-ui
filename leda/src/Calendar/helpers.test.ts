// @ts-nocheck
import * as helpers from './helpers';

describe('Calendar getIsDateDisabled', () => {
  it('false when disabledDates is undefined', () => {
    const date = new Date(2018, 9, 10);
    const disabledDates = undefined;
    const expected = false;
    expect(helpers.getIsDateDisabled(date, disabledDates)).toEqual(expected);
  });

  it('false when disabledDates does not includes date', () => {
    const date = new Date(2018, 9, 10);
    const disabledDates = [new Date(2018, 9, 13)];
    const expected = false;
    expect(helpers.getIsDateDisabled(date, disabledDates)).toEqual(expected);
  });

  it('true when disabledDates includes date', () => {
    const date = new Date(2018, 9, 10);
    const disabledDates = [new Date(2018, 9, 10)];
    const expected = true;
    expect(helpers.getIsDateDisabled(date, disabledDates)).toEqual(expected);
  });

  it('false when disabledDates does not includes date in range', () => {
    const date = new Date(2018, 9, 25);
    const disabledDates = [[new Date(2018, 9, 5), new Date(2018, 9, 15)]];
    const expected = false;
    expect(helpers.getIsDateDisabled(date, disabledDates)).toEqual(expected);
  });

  it('true when disabledDates includes date in range', () => {
    const date = new Date(2018, 9, 10);
    const disabledDates = [[new Date(2018, 9, 5), new Date(2018, 9, 15)]];
    const expected = true;
    expect(helpers.getIsDateDisabled(date, disabledDates)).toEqual(expected);
  });

  it('true when disabledDates with time', () => {
    const date = new Date(2018, 9, 10);
    const disabledDates = [new Date(2018, 9, 10, 12, 12, 12)];
    const expected = true;
    expect(helpers.getIsDateDisabled(date, disabledDates)).toEqual(expected);
  });

  it('true when date with time', () => {
    const date = new Date(2018, 9, 10, 12, 12, 12);
    const disabledDates = [new Date(2018, 9, 10)];
    const expected = true;
    expect(helpers.getIsDateDisabled(date, disabledDates)).toEqual(expected);
  });

  it('true when date and disabledDates with diffirent time', () => {
    const date = new Date(2018, 9, 10, 12, 12, 12);
    const disabledDates = [new Date(2018, 9, 10, 13, 13, 13)];
    const expected = true;
    expect(helpers.getIsDateDisabled(date, disabledDates)).toEqual(expected);
  });
});

describe('Calendar getRoundDate', () => {
  it('should round date to day start', () => {
    const dateWithTime = new Date(2018, 9, 10, 12, 12, 12);
    const expected = new Date(2018, 9, 10);
    expect(helpers.getRoundDate(dateWithTime)).toEqual(expected);
  });

  it('timeStamps should be equal', () => {
    const dateWithTime = new Date(2018, 9, 10, 12, 12, 12);
    const expected = new Date(2018, 9, 10).getTime();
    expect(helpers.getRoundDate(dateWithTime).getTime()).toEqual(expected);
  });
});
