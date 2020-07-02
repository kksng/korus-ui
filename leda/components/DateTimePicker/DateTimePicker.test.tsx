import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { DateTimePicker } from './index';

const validName = 'test';
const validFormat = 'dd.MM.yyyy hh:mm';
const validValue = '10.10.2010 10:10';
const invalidFormat = 'yyyy-MM-dd hh-mm';
const invalidValue = '2010-10-10 10-10';

describe('DateTimePicker snapshots collection', () => {
  test('is DateTimePicker render right?', () => {
    const { container } = render(<DateTimePicker name={validName} />);

    expect(container.firstChild)
      .toMatchSnapshot();
  });
});
describe('DateTimePicker attributes test collection', () => {
  test('is DateTimePicker placeholder set right?', () => {
    const validPlaceholder = 'text';
    const { getByRole } = render(<DateTimePicker placeholder={validPlaceholder} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('placeholder');

    expect(getByRole('textbox'))
      .toHaveProperty('placeholder', validPlaceholder);
  });
  test('is DateTimePicker work right with minMax set attributes?', () => {
    const min = new Date('01.02.2018 10:10');
    const max = new Date('05.25.2020 10:10');// mm-dd-YYYY
    const validDate = '25.05.2020 10:10';
    const valueForCheck = '26';
    const { getByText } = render(<DateTimePicker value={validDate} isOpen min={min} max={max} />);

    expect(getByText(valueForCheck))
      .toHaveClass('calendar-date-cell disabled-date');
  });
  test('is DateTimePicker work right with isDisabled attributes?', () => {
    const onChange = jest.fn();
    const { container } = render(<DateTimePicker isDisabled value={validValue} onChange={onChange} />);
    const icon = container.querySelectorAll('.datepicker-icons-wrapper')[0];
    const input = container.querySelectorAll('input.datepicker-input')[0];

    fireEvent.click(icon);

    expect(container.querySelectorAll('.disabled-state'))
      .toHaveLength(1);

    expect(input)
      .toHaveAttribute('disabled');

    expect(onChange)
      .toHaveBeenCalledTimes(0);
  });
  test('is DateTimePicker work right with isOpen attributes?', () => {
    const onChange = jest.fn();
    const { container, rerender } = render(<DateTimePicker isOpen value="10.10.2010 10:10" onChange={onChange} />);
    const icon = container.querySelectorAll('.datepicker-icons-wrapper')[0];
    const input = container.querySelectorAll('input.datepicker-input')[0];
    const popup = container.querySelectorAll('.calendar-wrapper.visible')[0];

    expect(icon)
      .toBeInTheDocument();

    expect(input)
      .toBeInTheDocument();

    expect(popup)
      .toBeInTheDocument();

    rerender(<DateTimePicker value="10.10.2010 10:10" onChange={onChange} />);

    expect(container.querySelectorAll('.calendar-wrapper.visible')[0])
      .not
      .toBeDefined();
  });
  test('is DateTimePicker work right with different date format input?', () => {
    const { getByRole, rerender } = render(<DateTimePicker format={validFormat} value={validValue} />);
    const input = getByRole('textbox');

    expect(input)
      .toHaveValue(validValue);

    rerender(<DateTimePicker format={invalidFormat} value={invalidValue} />);

    expect(input)
      .toHaveValue(invalidValue);
  });
});
describe('DateTimePicker event listeners test collection', () => {
  test('is DateTimePicker work right with onBlur event listener?', () => {
    const onBlur = jest.fn();
    const { container } = render(<DateTimePicker value={validValue} name={validName} onBlur={onBlur} />);
    const input = container.querySelectorAll('input.datepicker-input')[0];

    fireEvent.blur(input);

    expect(input)
      .not
      .toHaveFocus();

    expect(onBlur)
      .toBeCalledTimes(1);

    expect(onBlur)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: validValue,
        }),
      }));
  });
  test('is DateTimePicker work right with onChange event listener?', () => {
    const validDateWithotComma = '101020101010';
    const invalidDate = '11.10.2010 10:10';
    const onChange = jest.fn();
    const { container } = render(<DateTimePicker value={invalidDate} format={validFormat} name={validName} onChange={onChange} />);
    const input = container.querySelectorAll('input.datepicker-input')[0];

    userEvent.type(input, validValue);

    expect(onChange)
      .toBeCalledTimes(validValue.length);

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: validDateWithotComma,
        }),
      }));
  });
  test('is DateTimePicker work right with onPressEnter event listener?', () => {
    const onEnterPress = jest.fn();
    const { container } = render(<DateTimePicker name={validName} value={validValue} onEnterPress={onEnterPress} />);
    const input = container.querySelectorAll('input.datepicker-input')[0];

    fireEvent.keyDown(input, {
      charCode: 13,
      code: 13,
      key: 'Enter',
      keyCode: 13,
    });

    expect(onEnterPress)
      .toHaveBeenCalled();

    expect(onEnterPress)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: '', // Ошибка! Как исправится, нужно будет добаивть
        }),
      }));
  });
  test('is DateTimePicker work right with onFocus event listener?', () => {
    const onFocus = jest.fn();
    const { container } = render(<DateTimePicker name={validName} value={validValue} onFocus={onFocus} />);
    const input = container.querySelectorAll('input.datepicker-input')[0];

    fireEvent.focus(input);

    expect(onFocus)
      .toHaveBeenCalled();

    expect(onFocus)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: validValue,
        }),
      }));
  });
});
describe('DateTimePicker quality test collection', () => {
  test('is DateTimePicker render right if value set as String', () => {
    const dateValue = '10.10.2010 10:10';
    const {
      getAllByRole,
      getByRole,
    } = render(<DateTimePicker name="test" value={dateValue} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('value');

    expect(getAllByRole('textbox'))
      .toHaveLength(1);

    expect(getByRole('textbox'))
      .toHaveValue(dateValue);
  });
  test('is DateTimePicker render right if value set as Date', () => {
    const dateValue = new Date('10.10.2010 10:10');
    const {
      getAllByRole,
      getByRole,
    } = render(<DateTimePicker name="test" value={dateValue} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('value');

    expect(getAllByRole('textbox'))
      .toHaveLength(1);

    expect(getByRole('textbox'))
      .toHaveValue('10.10.2010 10:10');
  });
  test('is DateTimePicker render right if value set as Null', () => {
    const dateValue = null;
    const {
      getAllByRole,
      getByRole,
    } = render(<DateTimePicker name="test" value={dateValue} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('value');

    expect(getAllByRole('textbox'))
      .toHaveLength(1);

    expect(getByRole('textbox'))
      .toHaveValue('');
  });
});
