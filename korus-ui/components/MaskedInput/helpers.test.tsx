import * as helpers from './helpers';

describe('getValue tests', () => {
  it('Should return valueProp value if it\'s string', () => {
    const valueProp = 'Hello';
    const valueState = 'State';
    const expected = valueProp;
    expect(helpers.getValue(valueProp, valueState)).toBe(expected);
  });

  it('Should return valueState value if valueProp undefined', () => {
    const valueProp = undefined;
    const valueState = 'State';
    const expected = valueState;
    expect(helpers.getValue(valueProp, valueState)).toBe(expected);
  });

  it('Should return empty string if valueProp is null', () => {
    const valueProp = null;
    const valueState = 'State';
    const expected = '';
    expect(helpers.getValue(valueProp, valueState)).toBe(expected);
  });
});
