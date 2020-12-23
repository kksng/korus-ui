import * as helpers from './helpers';


describe('Test normalizeTime helper function', () => {
  it('Should work properly with date values', () => {
    const dateValues = [new Date('01.02.2020'), new Date('01.02.2020')];
    const expected = 'Thu Jan 02 2020 00:00:00 GMT+0300 (Moscow Standard Time),Thu Jan 02 2020 23:59:59 GMT+0300 (Moscow Standard Time)';

    expect(dateValues.map(helpers.normalizeTime).join()).toEqual(expected);
  });
  it('Should work properly with null values', () => {
    const dateValues = [null, null];
    const expected = [null, null];

    expect(dateValues.map(helpers.normalizeTime)).toEqual(expected);
  });
});
