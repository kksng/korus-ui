import React from 'react';
import {
  render,
  fireEvent,
  wait,
} from '@testing-library/react';

/**
 * ВВ
 * Тесты проходят все. Но в консоле ошибки.
 * Эти ошибки выдает сам компонент. Это "варнинги", предупреждения
 * Компонент работает верно. Надо разбираться с кодом компоненты. Критического нет
 */

import userEvent from '@testing-library/user-event';
import { MonthsNames, WeekDayNames } from '~/src/Calendar/types';
import { DateRange } from './index';

const validName = 'test';
const validFormat = 'dd.MM.yyyy';
const invalidFormat = 'yyyy-MM-dd';
const validValue = '15.05.2020';
const invalidValue = '2010-10-10';
const min = new Date('01.02.2020');
const max = new Date('05.25.2020');// mm-dd-YYYY
const customMonthNames: MonthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const customShortMonthNames: MonthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const customWeekDayNames: WeekDayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const customShortWeekDayNames: WeekDayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

describe('DateRange snapshots collection', () => {
  test('is DateRange render right?', () => {
    const { container } = render(<DateRange name={validName} />);

    expect(container.firstChild)
      .toMatchSnapshot();
  });
});
describe('DateRange attributes test collection', () => {
  test('is DateRange placeholder set right?', () => {
    const placeholder = ['от', 'до'];
    const { getAllByRole } = render(<DateRange placeholder={['от', 'до']} />);

    expect(getAllByRole('textbox'))
      .toHaveLength(2);

    getAllByRole('textbox').forEach((input, index) => {
      expect(input)
        .toHaveAttribute('placeholder');

      expect(input)
        .toHaveProperty('placeholder', placeholder[index]);
    });
  });
  test('is DateRange work right with minMax attributes?', () => {
    const valueForCheck = '26';
    const { getAllByText } = render(<DateRange value={['25.05.2020', '25.05.2020']} isOpen min={min} max={max} />);

    getAllByText(valueForCheck).forEach((el) => {
      expect(el)
        .toHaveClass('calendar-date-cell disabled-date');
    });
  });
  test('is DateRange work right with isDisabled attributes?', () => {
    const onChange = jest.fn();
    const { container } = render(<DateRange isDisabled value={['15.05.2020', '25.05.2020']} onChange={onChange} />);
    const iconA = container.querySelectorAll('.datepicker-icons-wrapper')[0];
    const iconB = container.querySelectorAll('.datepicker-icons-wrapper')[1];
    const inputA = container.querySelectorAll('input.datepicker-input')[0];
    const inputB = container.querySelectorAll('input.datepicker-input')[1];

    fireEvent.click(iconA);

    expect(inputA)
      .toHaveAttribute('disabled');

    fireEvent.click(iconB);

    expect(inputB)
      .toHaveAttribute('disabled');

    expect(onChange)
      .toHaveBeenCalledTimes(0);
  });
  test('is DateRange work right with isOpen attributes?', () => {
    const onChange = jest.fn();
    const { container, rerender } = render(<DateRange isOpen value={['15.05.2020', '25.05.2020']} onChange={onChange} />);
    const iconA = container.querySelectorAll('.datepicker-icons-wrapper')[0];
    const inputA = container.querySelectorAll('input.datepicker-input')[0];
    const popupA = container.querySelectorAll('.calendar-wrapper.visible')[0];
    const iconB = container.querySelectorAll('.datepicker-icons-wrapper')[1];
    const inputB = container.querySelectorAll('input.datepicker-input')[1];
    const popupB = container.querySelectorAll('.calendar-wrapper.visible')[1];

    expect(iconA)
      .toBeInTheDocument();

    expect(iconB)
      .toBeInTheDocument();

    expect(inputA)
      .toBeInTheDocument();

    expect(inputB)
      .toBeInTheDocument();

    expect(popupA)
      .toBeInTheDocument();

    expect(popupB)
      .toBeInTheDocument();

    rerender(<DateRange value={['05.05.2020', '25.05.2020']} onChange={onChange} />);

    expect(container.querySelectorAll('.calendar-wrapper.visible')[0])
      .not
      .toBeDefined();

    expect(container.querySelectorAll('.calendar-wrapper.visible')[1])
      .not
      .toBeDefined();
  });
  test('is DateRange work right with date format input?', () => {
    const onChange = jest.fn();
    const { container, rerender } = render(<DateRange format={validFormat} value={['15.05.2020', '15.05.2020']} onChange={onChange} />);
    const inputA = container.querySelectorAll('input.datepicker-input')[0];
    const inputB = container.querySelectorAll('input.datepicker-input')[1];

    expect(inputA)
      .toHaveValue(validValue);

    expect(inputB)
      .toHaveValue(validValue);

    rerender(<DateRange format={invalidFormat} value={['2010-10-10', '2010-10-10']} onChange={onChange} />);

    expect(inputA)
      .toHaveValue(invalidValue);

    expect(inputB)
      .toHaveValue(invalidValue);
  });
  test('is DateRange working right with monthNames attribute?', () => {
    const date = new Date();
    const currentMonth = date.getMonth();
    const { container } = render(<DateRange monthNames={customMonthNames} isOpen />);
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
  test('is DateRange working right with shortMonthNames attribute?', () => {
    const { container } = render(<DateRange shortMonthNames={customShortMonthNames} isOpen />);
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
  test('is DateRange working right with weekDayNames attribute?', () => {
    const { container } = render(<DateRange weekDayNames={customWeekDayNames} isOpen />);
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
  test('is DateRange working right with shortWeekDayNames attribute?', () => {
    const { container } = render(<DateRange shortWeekDayNames={customShortWeekDayNames} isOpen />);
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
describe('DateRange event listeners test collection', () => {
  test('is DateRange work right with onBlur event listener?', () => {
    const validDate = '05-05-2020';
    const onBlur = jest.fn();
    const { container } = render(<DateRange name={validName} format="MM-dd-yyyy" value={['05-05-2020', '06-05-2020']} onBlur={onBlur} />);
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
          name: 'test-from', // from First datePicker input [from, to]
          value: validDate,
        }),
      }));
  });
  test('is DateRange work right with onChange event listener?', () => {
    const validValueA = '11.10.2010';
    const validValueB = '11.11.2010';
    const onChange = jest.fn();
    const { container } = render(<DateRange format={validFormat} value={['10.10.2010', '10.10.2020']} name={validName} onChange={onChange} />);
    const inputA = container.querySelectorAll('input.datepicker-input')[0];
    const inputB = container.querySelectorAll('input.datepicker-input')[1];

    userEvent.type(inputA, validValueA);

    expect(onChange)
      .toBeCalled();

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
        }),
      }));

    userEvent.type(inputB, validValueB);

    expect(onChange)
      .toBeCalled();

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
        }),
      }));
  });
  test('is DateRange work right with onPressEnter event listener?', () => {
    const onEnterPress = jest.fn();
    const { container } = render(<DateRange value={['10.10.2010', '10.10.2020']} onEnterPress={onEnterPress} />);
    const inputA = container.querySelectorAll('input.datepicker-input')[0];
    const inputB = container.querySelectorAll('input.datepicker-input')[1];

    fireEvent.keyDown(inputA, {
      charCode: 13,
      code: 13,
      key: 'Enter',
      keyCode: 13,
    });

    fireEvent.keyDown(inputB, {
      charCode: 13,
      code: 13,
      key: 'Enter',
      keyCode: 13,
    });

    expect(onEnterPress)
      .toBeCalled();
  });
  test('is DateRange work right with onFocus event listener?', () => {
    const onFocus = jest.fn();
    const { container } = render(<DateRange value={['10.10.2010', '10.10.2020']} onFocus={onFocus} />);
    const input = container.querySelectorAll('input.datepicker-input')[0];

    fireEvent.focus(input);

    expect(onFocus)
      .toHaveBeenCalled();
  });
});
describe('DateRange quality test collection', () => {
  test('is DateRange render right if value set as String', () => {
    const dateValue = ['10.10.2010', '12.12.2010'];
    const { getAllByRole } = render(<DateRange name="test" value={['10.10.2010', '12.12.2010']} />);

    expect(getAllByRole('textbox'))
      .toHaveLength(2);

    getAllByRole('textbox').forEach((input, index) => {
      expect(input)
        .toHaveAttribute('value');

      expect(input)
        .toHaveValue(dateValue[index]);
    });
  });
  test('is DateRange render right if value set as Date', () => {
    const dateValue = ['10.10.2010', '12.12.2010'];
    const { getAllByRole } = render(<DateRange name="test" value={[new Date('10.10.2010'), new Date('12.12.2010')]} />);

    expect(getAllByRole('textbox'))
      .toHaveLength(2);

    getAllByRole('textbox').forEach((input, index) => {
      expect(input)
        .toHaveAttribute('value');

      expect(input)
        .toHaveValue(dateValue[index]);
    });
  });
  test('is DateRange render right if value set as Null', () => {
    const dateValue = ['', ''];
    const { getAllByRole } = render(<DateRange name="test" value={[null, null]} />);

    expect(getAllByRole('textbox'))
      .toHaveLength(2);

    getAllByRole('textbox').forEach((input, index) => {
      expect(input)
        .toHaveAttribute('value');

      expect(input)
        .toHaveValue(dateValue[index]);
    });
  });
});
