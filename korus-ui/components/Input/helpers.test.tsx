import * as helpers from './helpers';
import { predefinedAllowedSymbols, predefinedForbiddenSymbols } from './constants';

describe('Input isSymbolAllowed', () => {
  it('Should return false if allowedSymbols undefined', () => {
    const value = 'Hello';
    const allowedSymbols = undefined;
    expect(helpers.isSymbolForbidden(value, allowedSymbols)).toBeFalsy();
  });

  it('Should return true if allowedSymbols RegExp', () => {
    const value = 'Hello';
    const allowedSymbols = /([A-Za-z]|\s)/;
    expect(helpers.isSymbolForbidden(value, allowedSymbols)).toBeTruthy();
  });

  it('Should return false if allowedSymbols "numbers"', () => {
    const value = 'Hello';
    const allowedSymbols = Object.keys(predefinedAllowedSymbols)[0] as keyof typeof predefinedAllowedSymbols;
    expect(helpers.isSymbolForbidden(value, allowedSymbols)).toBeFalsy();
  });
});

describe('Input isSymbolForbidden', () => {
  it('Should return false if forbiddenSymbols undefined', () => {
    const value = 'Hello';
    const forbiddenSymbols = undefined;
    expect(helpers.isSymbolForbidden(value, forbiddenSymbols)).toBeFalsy();
  });

  it('Should return false if forbiddenSymbols is "numbers"', () => {
    const value = 'Hello';
    const forbiddenSymbols = Object.keys(predefinedForbiddenSymbols)[0] as keyof typeof predefinedForbiddenSymbols;
    expect(helpers.isSymbolForbidden(value, forbiddenSymbols)).toBeFalsy();
  });

  it('Should return true if forbiddenSymbols RegExp', () => {
    const value = 'Hello';
    const forbiddenSymbols = /([A-Za-z]|\s)/;
    expect(helpers.isSymbolForbidden(value, forbiddenSymbols)).toBeTruthy();
  });
});

describe('Input transformToCase', () => {
  it('Should return an uppercase string', () => {
    const letter = 'hello';
    const letterCase = 'upper';
    const expected = 'HELLO';
    expect(helpers.transformToCase(letter, letterCase)).toBe(expected);
  });

  it('Should return an lowercase string', () => {
    const letter = 'HELLO';
    const letterCase = 'lower';
    const expected = 'hello';
    expect(helpers.transformToCase(letter, letterCase)).toBe(expected);
  });
});

describe('Input getValue', () => {
  it('Should return valueProp if its a string', () => {
    const valueProp = 'Value';
    const valueState = 'Hello';
    const expected = 'Value';
    expect(helpers.getValue(valueProp, valueState)).toBe(expected);
  });

  it('Should return empty string if valueProp is null', () => {
    const valueProp = null;
    const valueState = 'Hello';
    const expected = '';
    expect(helpers.getValue(valueProp, valueState)).toBe(expected);
  });

  it('Should return valueState if valueProp undefined', () => {
    const valueProp = undefined;
    const valueState = 'Hello';
    const expected = 'Hello';
    expect(helpers.getValue(valueProp, valueState)).toBe(expected);
  });
});

describe('Input getSelectionType', () => {
  it('Should return isAllSelected=false, isPartSelected=true if selectedRange is null', () => {
    const selectedRange = null;
    const oldValueLength = 4;
    const expected = [false, true];
    expect(helpers.getSelectionType(selectedRange, oldValueLength)).toEqual(expected);
  });

  it('Should return isAllSelected=false, isPartSelected=false if oldValueLength equal selectedRange', () => {
    const selectedRange = 5;
    const oldValueLength = 5;
    const expected = [true, false];
    expect(helpers.getSelectionType(selectedRange, oldValueLength)).toEqual(expected);
  });

  it('Should return isAllSelected=false, isPartSelected=true if oldValueLength greater than selectedRange', () => {
    const selectedRange = 4;
    const oldValueLength = 5;
    const expected = [false, true];
    expect(helpers.getSelectionType(selectedRange, oldValueLength)).toEqual(expected);
  });

  it('Should return isAllSelected=false, isPartSelected=true if oldValueLength less than selectedRange', () => {
    const selectedRange = 5;
    const oldValueLength = 4;
    const expected = [false, true];
    expect(helpers.getSelectionType(selectedRange, oldValueLength)).toEqual(expected);
  });

  it('Should return isAllSelected=false, isPartSelected=false if oldValueLength=0', () => {
    const selectedRange = 0;
    const oldValueLength = 4;
    const expected = [false, false];
    expect(helpers.getSelectionType(selectedRange, oldValueLength)).toEqual(expected);
  });
});

describe('Input getNewValueLength', () => {
  it('should return length of new value correctly, if old value is replaced completely', () => {
    const oldValue = '123456';
    const pastedValue = '12345678';
    const selectedRange = oldValue.length;
    const expected = pastedValue.length;

    expect(helpers.getNewValueLength(oldValue, pastedValue, selectedRange)).toEqual(expected);
  });

  it('should return length of new value correctly, if old value is replaced partly', () => {
    const oldValue = '123456';
    const pastedValue = '12345678';
    const selectedRange = 3;
    const expected = oldValue.length - selectedRange + pastedValue.length;

    expect(helpers.getNewValueLength(oldValue, pastedValue, selectedRange)).toEqual(expected);
  });

  it('should return length of new value correctly, if no range was selected on paste', () => {
    const oldValue = '123456';
    const pastedValue = '12345678';
    const selectedRange = null;
    const expected = oldValue.length + pastedValue.length;

    expect(helpers.getNewValueLength(oldValue, pastedValue, selectedRange)).toEqual(expected);
  });
});

describe('Input getMaxPastedLength', () => {
  it('should return maximum allowed length of pasted value correctly, if old value is replaced completely', () => {
    const oldValue = '123456';
    const maxLength = 8;
    const selectedRange = oldValue.length;
    const expected = maxLength;

    expect(helpers.getMaxPastedLength(oldValue, maxLength, selectedRange)).toEqual(expected);
  });

  it('should return maximum allowed length of pasted value correctly, if old value is empty string', () => {
    const oldValue = '';
    const maxLength = 8;
    const selectedRange = null;
    const expected = maxLength;

    expect(helpers.getMaxPastedLength(oldValue, maxLength, selectedRange)).toEqual(expected);
  });

  it('should return maximum allowed length of pasted value correctly, if old value is replaced partly', () => {
    const oldValue = '123456';
    const maxLength = 8;
    const selectedRange = 4;
    const expected = maxLength - (oldValue.length - selectedRange);

    expect(helpers.getMaxPastedLength(oldValue, maxLength, selectedRange)).toEqual(expected);
  });

  it('should return maximum allowed length of pasted value correctly, if no range was selected on paste', () => {
    const oldValue = '123456';
    const maxLength = 8;
    const selectedRange = null;
    const expected = maxLength - oldValue.length;

    expect(helpers.getMaxPastedLength(oldValue, maxLength, selectedRange)).toEqual(expected);
  });
});

describe('Input getNewPastedValue', () => {
  it('should return new value after paste correctly, if old value is replaced completely', () => {
    const data = {
      adjustedPastedValue: '666666',
      maxLength: 6,
      oldValue: '123456',
      selectedRange: 6,
      selectionEnd: 6,
      selectionStart: 0,
    };

    const expected = data.adjustedPastedValue;

    expect(helpers.getNewPastedValue(data)).toEqual(expected);
  });

  it('should return new value after paste correctly, if old value is empty string', () => {
    const data = {
      adjustedPastedValue: '666666',
      maxLength: 6,
      oldValue: '',
      selectedRange: null,
      selectionEnd: null,
      selectionStart: null,
    };

    const expected = data.adjustedPastedValue;

    expect(helpers.getNewPastedValue(data)).toEqual(expected);
  });

  it('should return new value after paste correctly, if old value is replaced partly', () => {
    const data = {
      adjustedPastedValue: '6666',
      maxLength: 6,
      oldValue: '12345',
      selectedRange: 3,
      selectionEnd: 4,
      selectionStart: 1,
    };

    const expected = '166665';

    expect(helpers.getNewPastedValue(data)).toEqual(expected);
  });

  it('should return new value after paste correctly, if no range was selected on paste', () => {
    const data = {
      adjustedPastedValue: '6',
      maxLength: 6,
      oldValue: '12345',
      selectedRange: null,
      selectionEnd: 2,
      selectionStart: 2,
    };

    const expected = '126345';

    expect(helpers.getNewPastedValue(data)).toEqual(expected);
  });
});
