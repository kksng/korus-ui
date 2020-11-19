// @ts-nocheck
import * as helpers from './helpers';

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
