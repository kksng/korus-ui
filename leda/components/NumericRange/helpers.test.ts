// @ts-nocheck
import * as helpers from './helpers';

describe('NumericRange getControlledValue', () => {
  it('should handle number', () => {
    const value = [1, 1];
    const expected = [1, 1];
    expect(helpers.getControlledValue(value)).toEqual(expected);
  });

  it('should handle number and null', () => {
    const value = [-42, null];
    const expected = [-42, null];
    expect(helpers.getControlledValue(value)).toEqual(expected);
  });

  it('should handle undefined and null', () => {
    const value = [null, undefined];
    const expected = [null, undefined];
    expect(helpers.getControlledValue(value)).toEqual(expected);
  });

  it('should handle 0 number', () => {
    const value = [0, -0];
    const expected = [0, -0];
    expect(helpers.getControlledValue(value)).toEqual(expected);
  });
});
