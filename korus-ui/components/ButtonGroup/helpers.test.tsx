import * as helpers from './helpers';

describe('getArrayValue tests', () => {
  it('Numbers', () => {
    const value = [1, 2];
    const item = 1;
    const currentItem = 2;
    expect(helpers.getArrayValue(value, item)).not.toEqual(currentItem);
  });

  it('Strings', () => {
    const value = ['string1', 'string2'];
    const item = 'string1';
    const currentItem = 'string2';
    expect(helpers.getArrayValue(value, item)).not.toEqual(currentItem);
  });

  it('Objects', () => {
    const value = [
      { object: 1 },
      { object: 2 },
    ];
    const item = { object: 1 };
    const currentItem = { object: 2 };
    expect(helpers.getArrayValue(value, item)).not.toEqual(currentItem);
  });
});

describe('compareItems tests', () => {
  it('Numbers', () => {
    const value = 9;
    const item = 9;
    const currentItem = 1;
    expect(helpers.compareItems(value, currentItem)).toEqual(false);
    expect(helpers.compareItems(value, item)).toEqual(true);
  });

  it('Objects', () => {
    const value = { key: 9 };
    const item = { key: 9 };
    const textField = 'key';
    expect(helpers.compareItems((value[textField]), (item[textField]))).toEqual(true);
  });

  it('Strings', () => {
    const value = 'string1';
    const currentItem = 'string2';
    expect(helpers.compareItems(value, currentItem)).toEqual(false);
  });

  it('Value null', () => {
    const value = null;
    const currentItem = 1;
    expect(helpers.compareItems(value, currentItem)).toEqual(false);
  });

  it('Value undefined', () => {
    const value = undefined;
    const currentItem = '1';
    expect(helpers.compareItems(value, currentItem)).toEqual(false);
  });
});
