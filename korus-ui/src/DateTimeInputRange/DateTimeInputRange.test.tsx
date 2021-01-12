import * as helpers from './helpers';


describe('Test normalizeTime helper function', () => {
  it('Should work properly with date values', () => {
    const dateValues = [new Date('01.02.2020'), new Date('01.02.2020')];

    expect(dateValues.map(helpers.normalizeTime)[0]?.toString()).toContain('00:00:00');
    expect(dateValues.map(helpers.normalizeTime)[1]?.toString()).toContain('23:59:59');
  });
  it('Should work properly with null values', () => {
    const dateValues = [null, null];
    const expected = [null, null];

    expect(dateValues.map(helpers.normalizeTime)).toEqual(expected);
  });
});
