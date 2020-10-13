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
  it('returns string values', () => {
    const expected = ['12.03.2012', '2012-03-11T20:00:00.000Z'];
    expect(helpers.getReplacedValue(['12.03.2012', '2012-03-11T20:00:00.000Z'])).toEqual(expected);
  });
  it('returns Date values', () => {
    const expected = [new Date('05.04.2012'), new Date('06.04.2012')];
    expect(helpers.getReplacedValue([new Date('05.04.2012'), new Date('06.04.2012')])).toEqual(expected);
  });
});
