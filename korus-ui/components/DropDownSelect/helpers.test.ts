// @ts-nocheck
import { defaultDropDownSelectTheme as theme } from './theme';
import * as helpers from './helpers';

describe('getComponentClassNames tests', () => {
  /**
    * default return *
    * inputWrapperClassNames: .dropdownselect-input-wrapper
    * selectIconClassNames: .dropdownselect-select-icon
    * wrapperClassNames: .dropdownselect-wrapper
  */

  describe('Should add .danger to inputWrapperClassNames', () => {
    it('Should add .danger if isValid false', () => {
      const data = {
        isDisabled: false,
        isFocused: false,
        isOpen: false,
        isRequired: false,
        isValid: false,
        theme,
      };
      const expected = {
        inputWrapperClassNames: `${theme.inputWrapper} ${theme.inputWrapperInvalid}`,
        selectIconClassNames: `${theme.selectIcon} ${theme.selectIconClosed}`,
        wrapperClassNames: `${theme.wrapper}`,
      };
      const received = helpers.getComponentClassNames(data);
      expect(received).toEqual(expected);
    });
  });

  describe('Should add .required to inputWrapperClassNames', () => {
    it('Should add .required if isRequired true and value not used', () => {
      const data = {
        isDisabled: false,
        isOpen: true,
        isRequired: true,
        isValid: true,
        theme,
      };
      const expected = {
        inputWrapperClassNames: `${theme.inputWrapper} ${theme.inputWrapperRequired}`,
        selectIconClassNames: `${theme.selectIcon} ${theme.selectIconOpened}`,
        wrapperClassNames: `${theme.wrapper}`,
      };
      const received = helpers.getComponentClassNames(data);
      expect(received).toEqual(expected);
    });
  });

  describe('Should add .focused to inputWrapperClassNames', () => {
    it('If value is string', () => {
      const data = {
        isDisabled: false,
        isFocused: true,
        isOpen: false,
        isRequired: true,
        isValid: true,
        theme,
        value: 'componentValue',
      };
      const expected = {
        inputWrapperClassNames: `${theme.inputWrapper} ${theme.inputWrapperFocused}`,
        selectIconClassNames: `${theme.selectIcon} ${theme.selectIconClosed}`,
        wrapperClassNames: `${theme.wrapper}`,
      };
      const received = helpers.getComponentClassNames(data);
      expect(received).toEqual(expected);
    });

    it('If value is number', () => {
      const data = {
        isDisabled: false,
        isFocused: true,
        isOpen: false,
        isRequired: true,
        isValid: true,
        theme,
        value: 999,
      };
      const expected = {
        inputWrapperClassNames: `${theme.inputWrapper} ${theme.inputWrapperFocused}`,
        selectIconClassNames: `${theme.selectIcon} ${theme.selectIconClosed}`,
        wrapperClassNames: `${theme.wrapper}`,
      };
      const received = helpers.getComponentClassNames(data);
      expect(received).toEqual(expected);
    });

    it('If value is object', () => {
      const data = {
        isDisabled: false,
        isFocused: true,
        isOpen: false,
        isRequired: true,
        isValid: true,
        theme,
        value: { value: 'componentValue' },
      };
      const expected = {
        inputWrapperClassNames: `${theme.inputWrapper} ${theme.inputWrapperFocused}`,
        selectIconClassNames: `${theme.selectIcon} ${theme.selectIconClosed}`,
        wrapperClassNames: `${theme.wrapper}`,
      };
      const received = helpers.getComponentClassNames(data);
      expect(received).toEqual(expected);
    });

    it('If value not used', () => {
      const data = {
        isDisabled: false,
        isFocused: true,
        isOpen: false,
        isRequired: false,
        isValid: true,
        theme,
      };
      const expected = {
        inputWrapperClassNames: `${theme.inputWrapper} ${theme.inputWrapperFocused}`,
        selectIconClassNames: `${theme.selectIcon} ${theme.selectIconClosed}`,
        wrapperClassNames: `${theme.wrapper}`,
      };
      const received = helpers.getComponentClassNames(data);
      expect(received).toEqual(expected);
    });
  });

  describe('Should add .disabled to inputWrapperClassName', () => {
    it('Should add .disabled if isDisabled true', () => {
      const data = {
        isDisabled: true,
        isFocused: false,
        isOpen: false,
        isRequired: false,
        isValid: true,
        theme,
      };
      const expected = {
        inputWrapperClassNames: `${theme.inputWrapper} ${theme.inputWrapperDisabled}`,
        selectIconClassNames: `${theme.selectIcon} ${theme.selectIconClosed}`,
        wrapperClassNames: `${theme.wrapper}`,
      };
      const received = helpers.getComponentClassNames(data);
      expect(received).toEqual(expected);
    });
  });

  describe('Should add .opened and .closed to selectIconClassNames', () => {
    it('Should add .opened', () => {
      const data = {
        isDisabled: false,
        isFocused: false,
        isOpen: true,
        isRequired: false,
        isValid: false,
        theme,
      };
      const expected = {
        inputWrapperClassNames: `${theme.inputWrapper} ${theme.inputWrapperInvalid}`,
        selectIconClassNames: `${theme.selectIcon} ${theme.selectIconOpened}`,
        wrapperClassNames: `${theme.wrapper}`,
      };
      const received = helpers.getComponentClassNames(data);
      expect(received).toEqual(expected);
    });

    it('Should add .closed', () => {
      const data = {
        isDisabled: false,
        isFocused: false,
        isOpen: false,
        isRequired: false,
        isValid: false,
        theme,
      };
      const expected = {
        inputWrapperClassNames: `${theme.inputWrapper} ${theme.inputWrapperInvalid}`,
        selectIconClassNames: `${theme.selectIcon} ${theme.selectIconClosed}`,
        wrapperClassNames: `${theme.wrapper}`,
      };
      const received = helpers.getComponentClassNames(data);
      expect(received).toEqual(expected);
    });
  });

  describe('Adding a custom class name to wrapperClassNames', () => {
    it('Should add a class name if className is string', () => {
      const data = {
        className: 'customClass',
        isDisabled: false,
        isFocused: true,
        isOpen: false,
        isRequired: true,
        isValid: true,
        theme,
      };
      const expected = {
        inputWrapperClassNames: `${theme.inputWrapper} ${theme.inputWrapperFocused} ${theme.inputWrapperRequired}`,
        selectIconClassNames: `${theme.selectIcon} ${theme.selectIconClosed}`,
        wrapperClassNames: `${theme.wrapper} customClass`,
      };
      const received = helpers.getComponentClassNames(data);
      expect(received).toEqual(expected);
    });

    it('Shouldn`t add a class name if className is undefined', () => {
      const data = {
        className: undefined,
        isDisabled: false,
        isFocused: true,
        isOpen: false,
        isRequired: true,
        isValid: true,
        theme,
      };
      const expected = {
        inputWrapperClassNames: `${theme.inputWrapper} ${theme.inputWrapperFocused} ${theme.inputWrapperRequired}`,
        selectIconClassNames: `${theme.selectIcon} ${theme.selectIconClosed}`,
        wrapperClassNames: `${theme.wrapper}`,
      };
      const received = helpers.getComponentClassNames(data);
      expect(received).toEqual(expected);
    });
  });
});

describe('getInputValue tests', () => {
  describe('Working with different types of value', () => {
    it('Should return empty string if value is empty and filterValue is null', () => {
      const value = '';
      const filterValue = null;
      const expected = '';
      const received = helpers.getInputValue(value, filterValue);
      expect(received).toBe(expected);
    });

    it('Should return empty string if value is null', () => {
      const value = null;
      const filterValue = '';
      const expected = '';
      const received = helpers.getInputValue(value, filterValue);
      expect(received).toBe(expected);
    });

    it('Should return string if filterValue is empty string and value is number', () => {
      const value = 100500;
      const filterValue = '';
      const expected = '100500';
      const received = helpers.getInputValue(value, filterValue);
      expect(received).toBe(expected);
    });

    it('Should return string if filterValue is null and value is number', () => {
      const value = 100500;
      const filterValue = null;
      const expected = '100500';
      const received = helpers.getInputValue(value, filterValue);
      expect(received).toBe(expected);
    });
  });

  describe('Working with different types of filterValue', () => {
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

    it('Should return value if filterValue is number', () => {
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
  });

  describe('Working when value is object', () => {
    it('Should return string if value is object', () => {
      const value = {
        city: 'Stuttgard',
        country: 'Germany',
      };
      const textField = 'city';
      const filterValue = null;
      const shouldFilterValues = true;
      const expected = 'Stuttgard';
      const received = helpers.getInputValue(value, filterValue, shouldFilterValues, textField);
      expect(received).toBe(expected);
    });

    it('Should return filterValue if filterValue is string and value is object', () => {
      const value = {
        city: 'Stuttgard',
        country: 'Germany',
      };
      const textField = 'country';
      const filterValue = 'Ger';
      const shouldFilterValues = true;
      const expected = 'Ger';
      const received = helpers.getInputValue(value, filterValue, shouldFilterValues, textField);
      expect(received).toBe(expected);
    });

    it('Should return filterValue if textField empty string and value is object', () => {
      const value = {
        city: '',
        country: 'Germany',
      };
      const textField = '';
      const filterValue = 'Ger';
      const shouldFilterValues = true;
      const expected = 'Ger';
      const received = helpers.getInputValue(value, filterValue, shouldFilterValues, textField);
      expect(received).toBe(expected);
    });
  });
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
