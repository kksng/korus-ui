import * as helpers from './helpers';

describe('fromFormArraytoFormObject tests', () => {
  it('Empty array', () => {
    const arrayField = helpers.fromFormArraytoFormObject([]);
    expect(arrayField).toEqual({});
  });
});

describe('getElementRect tests', () => {
  it('Element height is 0', () => {
    const button = document.querySelector('button');
    const parentElement = document.querySelector('div');
    expect(helpers.getElementRect(button)).toEqual(parentElement)
  });
});
