import * as helpers from './helpers';

describe('test getSuggestions', () => {
  test('with data', () => {
    const data = [
      'London',
      'Islamabad',
      'Berlin',
      'Washington',
      'Paris',
      'Rome',
      'Tokyo',
      'Budapest',
      'Ottawa',
      'Moscow',
    ];
    const suggestions = helpers.getSuggestions({
      data,
    });
    expect(suggestions).toEqual([]);
  });
  test('with data and value', () => {
    const data = [
      'London',
      'Islamabad',
      'Berlin',
      'Washington',
      'Paris',
      'Rome',
      'Tokyo',
      'Budapest',
      'Ottawa',
      'Moscow',
    ];
    const suggestions = helpers.getSuggestions({
      data,
      value: 'lo',
    });
    expect(suggestions).toEqual(data.slice(0, 1));
  });
});

describe('test getSuggestionValue', () => {
  test('with suggestion', () => {
    const suggestion = 'suggestion';
    const value = helpers.getSuggestionValue(suggestion);
    expect(value).toEqual(suggestion);
  });
  test('with suggestion and textField', () => {
    const suggestion = {
      key: 'value',
    };
    const textField = 'key';
    const value = helpers.getSuggestionValue(suggestion, textField);
    expect(value).toEqual(suggestion[textField]);
  });
});

describe('safeTrim tests', () => {
  it('Should trim spaces when value is string', () => {
    const value = ' value ';
    expect(helpers.safeTrim(value)).toBe('value');
  });

  it('Should return empty string when value is null', () => {
    const value = null;
    expect(helpers.safeTrim(value)).toBe('');
  });
});

describe('getSuggestionFromValue tests', () => {
  it('Should return null when empty array in data', () => {
    const parameters = {
      data: [],
      value: 'some',
    };
    const expected = null;
    const suggestions = helpers.getSuggestionFromValue(parameters);
    expect(suggestions).toEqual(expected);
  });

  it('Should return object', () => {
    const parameters = {
      data: [
        { key: 'value' },
        { key: 'value1' },
        { key: 'value2' },
      ],
      textField: 'key',
      value: 'value1',
    };
    const expected = { key: 'value1' };
    const suggestion = helpers.getSuggestionFromValue(parameters);
    expect(suggestion).toEqual(expected);
  });

  it('Should return string when value is string', () => {
    const parameters = {
      data: [
        'value1',
        'value2',
        'value3',
      ],
      value: 'value2',
    };
    const expected = 'value2';
    const suggestion = helpers.getSuggestionFromValue(parameters);
    expect(suggestion).toEqual(expected);
  });
});
