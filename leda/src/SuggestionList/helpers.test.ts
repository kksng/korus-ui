// @ts-nocheck
import * as helpers from './helpers';

describe('getText', () => {
  it('works without arguments', () => {
    const expected = '';
    expect(helpers.getText()).toEqual(expected);
  });

  it('works with string', () => {
    const expected = 'London';
    expect(helpers.getText('London')).toEqual(expected);
  });

  it('works with number', () => {
    const expected = '42';
    expect(helpers.getText(42)).toEqual(expected);
  });

  it('works with object', () => {
    const expected = 'London';
    expect(helpers.getText({
      city: 'London',
      region: 'Europe',
    }, 'city')).toEqual(expected);
  });

  it('works with null', () => {
    const expected = '';
    expect(helpers.getText(null)).toEqual(expected);
  });
});
