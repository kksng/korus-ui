import * as helpers from './helpers';

describe('fromFormArraytoFormObject tests', () => {
  it('Should return an empty object when it accepts an empty array', () => {
    const arrayField = helpers.fromFormArraytoFormObject([]);
    expect(arrayField).toEqual({});
  });
});
