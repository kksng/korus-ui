// @ts-nocheck
import * as helpers from './helpers';

describe('getInputValue tests', () => {
  it('Should return value if filterValue is string', () => {
    const value = 'London';
    const filterValue = 'd';
    const expected = 'London';
    const received = helpers.getInputValue(value, filterValue);
    expect(received).toBe(expected);
  });

  it('Should return value if filterValue is empty string', () => {
    const value = 'London';
    const filterValue = '';
    const expected = 'London';
    const received = helpers.getInputValue(value, filterValue);
    expect(received).toBe(expected);
  });

  it('Should return value if filtervalue is number', () => {
    const value = 'London';
    const filterValue = 9;
    const expected = 'London';
    const received = helpers.getInputValue(value, filterValue);
    expect(received).toBe(expected);
  });

  it('Should return string if filterValue is null', () => {
    const value = 'London';
    const filterValue = null;
    const expected = 'London';
    const received = helpers.getInputValue(value, filterValue);
    expect(received).toBe(expected);
  });

  it('Should return empty string if value is empty and filterValue is null', () => {
    const value = '';
    const filterValue = null;
    const expected = '';
    const received = helpers.getInputValue(value, filterValue);
    expect(received).toBe(expected);
  });

  it('Should return string if filtervalue is empty string and value is number', () => {
    const value = 100500;
    const filterValue = '';
    const expected = '100500';
    const received = helpers.getInputValue(value, filterValue);
    expect(received).toBe(expected);
  });

  // it('', () => {
  //   const value = {
  //     city: 'Stuttgard',
  //     city1: 'Berlin',
  //   };
  //   const textField = 'city';
  //   const expected = 'Stuttgard';
  //   const received = helpers.getInputValue(value, textField);
  //   expect(received).toBe(expected);
  // });
});

describe('DropDownSelect filterData', () => {
  it('should return undefined', () => {
    const props = {};
    const expected = undefined;
    expect(helpers.filterData(props)).toEqual(expected);
  });

  it('should return everything', () => {
    const data = [
      'Berlin',
      'Paris',
      'Rome',
      'Moscow',
    ];
    const props = {
      data,
      filterValue: null,
    };
    const expected = data;
    expect(helpers.filterData(props)).toEqual(expected);
  });

  it('should return match', () => {
    const props = {
      data: [
        'Berlin',
        'Paris',
        'Rome',
        'Moscow',
      ],
      filterValue: 'm',
    };
    const expected = [
      'Rome',
      'Moscow',
    ];
    expect(helpers.filterData(props)).toEqual(expected);
  });

  it('should return match with textField', () => {
    const props = {
      data: [
        {
          city: 'Berlin',
          region: 'Europe',
        },
        {
          city: 'Paris',
          region: 'Europe',
        },
        {
          city: 'Rome',
          region: 'Europe',
        },
        {
          city: 'Moscow',
          region: 'Europe',
        },
      ],
      filterValue: 'm',
      textField: 'city',
    };
    const expected = [
      {
        city: 'Rome',
        region: 'Europe',
      },
      {
        city: 'Moscow',
        region: 'Europe',
      },
    ];
    expect(helpers.filterData(props)).toEqual(expected);
  });
});
