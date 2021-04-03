import * as helpers from './helpers';

describe('getArrayValue tests', () => {
  describe('Adding new values to an array', () => {
    it('Array of numbers', () => {
      const value = [1, 2, 3];
      const currentItem = 4;
      const received = helpers.getArrayValue(value, currentItem);
      const expected = [1, 2, 3, 4];
      expect(received).toEqual(expected);
    });

    it('Adding object into array of numbers', () => {
      const value = [1, 2, 3];
      const currentItem = { object: 1 };
      const received = helpers.getArrayValue(value, currentItem);
      const expected = [1, 2, 3, { object: 1 }];
      expect(received).toEqual(expected);
    });

    it('Adding string into array of numbers', () => {
      const value = [1, 2, 3];
      const currentItem = 'str1';
      const received = helpers.getArrayValue(value, currentItem);
      const expected = [1, 2, 3, 'str1'];
      expect(received).toEqual(expected);
    });

    it('Array of strings', () => {
      const value = ['str1', 'str2', 'str3'];
      const currentItem = 'str4';
      const received = helpers.getArrayValue(value, currentItem);
      const expected = ['str1', 'str2', 'str3', 'str4'];
      expect(received).toEqual(expected);
    });

    it('Adding number into array of strings', () => {
      const value = ['str1', 'str2', 'str3'];
      const currentItem = 1;
      const received = helpers.getArrayValue(value, currentItem);
      const expected = ['str1', 'str2', 'str3', 1];
      expect(received).toEqual(expected);
    });

    it('Adding object into array of strings', () => {
      const value = ['str1', 'str2', 'str3'];
      const currentItem = { object: 1 };
      const received = helpers.getArrayValue(value, currentItem);
      const expected = ['str1', 'str2', 'str3', { object: 1 }];
      expect(received).toEqual(expected);
    });

    it('Array of undefined', () => {
      const value = [undefined, undefined];
      const currentItem = { object: 2 };
      const received = helpers.getArrayValue(value, currentItem);
      const expected = [undefined, undefined, { object: 2 }];
      expect(received).toEqual(expected);
    });
  });

  describe('Deleting values from an array', () => {
    it('Array of numbers', () => {
      const value = [1, 2, 3];
      const currentItem = 2;
      const received = helpers.getArrayValue(value, currentItem);
      const expected = [1, 3];
      expect(received).toEqual(expected);
    });

    it('Array of strings', () => {
      const value = ['str1', 'str2', 'str3'];
      const currentItem = 'str1';
      const received = helpers.getArrayValue(value, currentItem);
      const expected = ['str2', 'str3'];
      expect(received).toEqual(expected);
    });
  });
});

describe('compareItems tests', () => {
  it('Numbers', () => {
    const value = 9;
    const item = 9;
    const currentItem = 1;
    expect(helpers.compareItems(value, currentItem)).toBe(false);
    expect(helpers.compareItems(value, item)).toBe(true);
  });

  it('Objects', () => {
    const value = { key: 9 };
    const item = { key: 9 };
    const textField = 'key';
    expect(helpers.compareItems(value[textField], item[textField])).toEqual(
      true
    );
  });

  it('Strings', () => {
    const value = 'string1';
    const currentItem = 'string2';
    expect(helpers.compareItems(value, currentItem)).toBe(false);
  });

  it('Value null', () => {
    const value = null;
    const currentItem = 1;
    expect(helpers.compareItems(value, currentItem)).toBe(false);
  });

  it('Value undefined', () => {
    const value = undefined;
    const currentItem = '1';
    expect(helpers.compareItems(value, currentItem)).toBe(false);
  });
});
