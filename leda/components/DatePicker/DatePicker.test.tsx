import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { DatePicker } from './index';

const validName = 'test';
const validFormat = 'dd.MM.yyyy';
const invalidFormat = 'yyyy-MM-dd';
const validValue = '10.10.2010';
const invalidValue = '2010-10-10';


describe('DatePicker snapshots collection', () => {
  test('is DatePicker render right?', () => {
    const { container } = render(<DatePicker name={validName} />);

    expect(container.firstChild)
      .toMatchSnapshot();
  });
});
describe('DatePicker attributes test collection', () => {
  test('is Datepicker placeholder set right?', () => {
    const validPlaceholder = 'test';
    const { getByRole } = render(<DatePicker placeholder={validPlaceholder} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('placeholder');

    expect(getByRole('textbox'))
      .toHaveProperty('placeholder', validPlaceholder);
  });
  test('is Datepicker minMax set attributes work right?', () => {
    const min = new Date('01.02.2018');
    const max = new Date('05.25.2020');// mm-dd-YYYY
    const validDate = '25.05.2020';
    const valueForCheck = '26';
    const { getByText } = render(<DatePicker value={validDate} isOpen min={min} max={max} />);

    expect(getByText(valueForCheck))
      .toHaveClass('calendar-date-cell disabled-date');
  });
  test('is Datepicker isDisabled attributes work right?', () => {
    const onChange = jest.fn();
    const { container } = render(<DatePicker isDisabled value={validValue} onChange={onChange} />);
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
  test('is Datepicker isOpen attribute work right?', () => {
    const onChange = jest.fn();
    const { container, rerender } = render(<DatePicker isOpen value={validValue} onChange={onChange} />);
    const icon = container.querySelectorAll('.datepicker-icons-wrapper')[0];
    const input = container.querySelectorAll('input.datepicker-input')[0];
    const popup = container.querySelectorAll('.calendar-wrapper.visible')[0];

    expect(icon)
      .toBeInTheDocument();

    expect(input)
      .toBeInTheDocument();

    expect(popup)
      .toBeInTheDocument();

    rerender(<DatePicker value={validValue} onChange={onChange} />);

    expect(container.querySelectorAll('.calendar-wrapper.visible')[0])
      .not
      .toBeDefined();
  });
  test('is Datepicker date format input work right?', () => {
    const onChange = jest.fn();
    const { container, rerender } = render(<DatePicker format={validFormat} value={validValue} onChange={onChange} />);
    const icon = container.querySelectorAll('.datepicker-icons-wrapper')[0];
    const input = container.querySelectorAll('input.datepicker-input')[0];

    fireEvent.click(icon);

    expect(input)
      .toHaveValue(validValue);

    rerender(<DatePicker format={invalidFormat} value={invalidValue} onChange={onChange} />);

    fireEvent.click(icon);

    expect(input)
      .toHaveValue(invalidValue);
  });
});
describe('Datepicker event listeners test collection', () => {
  test('is Datepicker onBlur event listener work right?', () => {
    const onBlur = jest.fn();
    const { container } = render(<DatePicker value={validValue} name={validName} onBlur={onBlur} />);
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
  test('is Datepicker onChange event listener work right?', () => {
    const validValueWithoutComma = '10101010';
    const onChange = jest.fn();
    const { container } = render(<DatePicker value={invalidValue} format={validFormat} name={validName} onChange={onChange} />);
    const input = container.querySelectorAll('input.datepicker-input')[0];

    userEvent.type(input, validValue);

    expect(onChange)
      .toBeCalledTimes(validValue.length);

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: validValueWithoutComma,
        }),
      }));
  });
  test('is Datepicker onPressEnter event listener work right?', () => {
    const onEnterPress = jest.fn();
    const { container } = render(<DatePicker name={validName} value={validValue} onEnterPress={onEnterPress} />);
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
  test('is Datepicker onFocus event listener work right?', () => {
    const onFocus = jest.fn();
    const { container } = render(<DatePicker name={validName} value={validValue} onFocus={onFocus} />);
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
describe('DatePicker quality set test collection', () => {
  test('is DatePicker render right if value set as String', () => {
    const dateValue = '10.10.2010';
    const {
      getAllByRole,
      getByRole,
    } = render(<DatePicker name="test" value={dateValue} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('value');

    expect(getAllByRole('textbox'))
      .toHaveLength(1);

    expect(getByRole('textbox'))
      .toHaveValue(dateValue);
  });
  test('is DatePicker render right if value set as Date', () => {
    const dateValue = new Date('10.10.2010');
    const {
      getAllByRole,
      getByRole,
    } = render(<DatePicker name="test" value={dateValue} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('value');

    expect(getAllByRole('textbox'))
      .toHaveLength(1);

    expect(getByRole('textbox'))
      .toHaveValue('10.10.2010');
  });
  test('is DatePicker render right if value set as Null', () => {
    const dateValue = null;
    const {
      getAllByRole,
      getByRole,
    } = render(<DatePicker name="test" value={dateValue} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('value');

    expect(getAllByRole('textbox'))
      .toHaveLength(1);

    expect(getByRole('textbox'))
      .toHaveValue('');
  });
});
