import * as helpers from './helpers';

describe('fromFormArraytoFormObject tests', () => {
  it('Empty array', () => {
    const arrayField = helpers.fromFormArraytoFormObject([]);
    expect(arrayField).toEqual({});
  });
});


