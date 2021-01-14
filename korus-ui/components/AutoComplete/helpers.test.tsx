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
