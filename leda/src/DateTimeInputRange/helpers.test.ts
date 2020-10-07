// @ts-nocheck
import * as helpers from './helpers';

describe('getReplacedValue', () => {
  it('replaces null with undefined', () => {
    const expected = [undefined, undefined];
    expect(helpers.getReplacedValue([null, null])).toEqual(expected);
  });
  it('does not replace empty string', () => {
    const expected = ['', ''];
    expect(helpers.getReplacedValue(['', ''])).toEqual(expected);
  });
  it('if values are not of types string or Date returns undefined', () => {
    const expected = [undefined, undefined];
    expect(helpers.getReplacedValue([1, {}])).toEqual(expected);
  });
  it('returns string or Date values', () => {
    const date = new Date('05.04.2012');
    const expected = ['12.03.2012', date];
    expect(helpers.getReplacedValue(['12.03.2012', date])).toEqual(expected);
  });
});
