import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { DatePicker } from './index';

type MonthNames = [string, string, string, string, string, string, string, string, string, string, string, string];
type weekDayNames = [string, string, string, string, string, string, string];

const validName = 'test';
const validFormat = 'dd.MM.yyyy';
const invalidFormat = 'yyyy-MM-dd';
const validValue = '10.10.2010';
const invalidValue = '2010-10-10';
const customMonthNames: MonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const customShortMonthNames: MonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const customWeekDayNames: weekDayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const customShortWeekDayNames: weekDayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

describe('DatePicker snapshots collection', () => {
  test('is DatePicker rendering right?', () => {
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
  test('is Datepicker working right with minMax set attributes?', () => {
    const min = new Date('01.02.2018');
    const max = new Date('05.25.2020');// mm-dd-YYYY
    const validDate = '25.05.2020';
    const valueForCheck = '26';
    const { getByText } = render(<DatePicker value={validDate} isOpen min={min} max={max} />);

    expect(getByText(valueForCheck))
      .toHaveClass('calendar-date-cell disabled-date');
  });
  test('is Datepicker working right with max set attribute and onPressEnter event listener?', () => {
    const max = new Date('05.25.2020');// mm-dd-YYYY
    const invalidDate = '26.05.2020';
    const validDate = '25.05.2020';
    const onChange = jest.fn();
    const { container } = render(<DatePicker name={validName} value={invalidDate} max={max} onChange={onChange} />);
    const input = container.querySelectorAll('input.datepicker-input')[0];

    fireEvent.keyDown(input, {
      charCode: 13,
      code: 13,
      key: 'Enter',
      keyCode: 13,
    });

    expect(onChange)
      .toHaveBeenCalledTimes(1);

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: validDate,
        }),
      }));
  });
  test('is Datepicker working right with min set attribute and onPressEnter event listener?', () => {
    const min = new Date('01.02.2018');// mm-dd-YYYY
    const invalidDate = '01.01.2018';
    const validDate = '02.01.2018';
    const onChange = jest.fn();
    const { container } = render(<DatePicker name={validName} value={invalidDate} min={min} onChange={onChange} />);
    const input = container.querySelectorAll('input.datepicker-input')[0];

    fireEvent.keyDown(input, {
      charCode: 13,
      code: 13,
      key: 'Enter',
      keyCode: 13,
    });

    expect(onChange)
      .toHaveBeenCalledTimes(1);

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: validDate,
        }),
      }));
  });
  test('is Datepicker working right with isDisabled attributes?', () => {
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
  test('is Datepicker working right with isOpen attribute?', () => {
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
  test('is Datepicker working right with date format input?', () => {
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
  test('is Datepicker working right with monthNames attribute?', () => {
    const date = new Date();
    const currentMonth = date.getMonth();
    const { container } = render(<DatePicker monthNames={customMonthNames} isOpen />);
    const calendar = container.querySelectorAll('.calendar-wrapper.visible')[0];
    const title = container.querySelector('.calendar-title');
    const titleMonth = title?.textContent?.split(' ')[0];

    expect(calendar)
      .toBeInTheDocument();

    expect(title)
      .toBeInTheDocument();

    expect(customMonthNames).toContain(titleMonth);

    expect(titleMonth).toBe(customMonthNames[currentMonth]);
  });
  test('is Datepicker working right with shortMonthNames attribute?', () => {
    const { container } = render(<DatePicker shortMonthNames={customShortMonthNames} isOpen />);
    const calendar = container.querySelectorAll('.calendar-wrapper.visible')[0];
    const title = calendar.querySelector('.calendar-title');

    fireEvent.click(title as Element);

    const monthCells = container.querySelectorAll('.calendar-month-year-cell');

    customShortMonthNames.forEach((monthName, index) => {
      expect(monthCells[index])
        .toBeInTheDocument();

      expect(monthCells[index].textContent)
        .toBe(monthName);
    });
  });
  test('is Datepicker working right with weekDayNames attribute?', () => {
    const { container } = render(<DatePicker weekDayNames={customWeekDayNames} isOpen />);
    const calendar = container.querySelectorAll('.calendar-wrapper.visible')[0];
    const weekDaysRow = calendar.querySelector('.calendar-week-days');
    const weekDaysCells = weekDaysRow?.querySelectorAll('.calendar-date-cell') as NodeListOf<Element>;

    customWeekDayNames.forEach((weekDayName, index) => {
      expect(weekDaysCells[index])
        .toBeInTheDocument();

      expect(weekDaysCells[index].getAttribute('title'))
        .toBe(weekDayName);
    });
  });
  test('is Datepicker working right with shortWeekDayNames attribute?', () => {
    const { container } = render(<DatePicker shortWeekDayNames={customShortWeekDayNames} isOpen />);
    const calendar = container.querySelectorAll('.calendar-wrapper.visible')[0];
    const weekDaysRow = calendar.querySelector('.calendar-week-days');
    const weekDaysCells = weekDaysRow?.querySelectorAll('.calendar-date-cell') as NodeListOf<Element>;

    customShortWeekDayNames.forEach((weekDayName, index) => {
      expect(weekDaysCells[index])
        .toBeInTheDocument();

      expect(weekDaysCells[index].textContent)
        .toBe(weekDayName);
    });
  });
});
describe('Datepicker event listeners test collection', () => {
  test('is Datepicker working right with onBlur event listener?', () => {
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
  test('is Datepicker working right with onChange event listener?', () => {
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
  test('is Datepicker working right with onPressEnter event listener?', () => {
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
          value: validValue,
        }),
      }));
  });
  test('is Datepicker working right with onFocus event listener?', () => {
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
  test('is DatePicker rendering right if value set as String', () => {
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
  test('is DatePicker rendering right if value set as Date', () => {
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
  test('is DatePicker rendering right if value set as Null', () => {
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
