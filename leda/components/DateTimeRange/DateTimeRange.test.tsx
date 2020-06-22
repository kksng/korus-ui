import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { DateTimeRange } from './index';

describe('Check DateTimeRange snapshots collection', () => {
  test('is DateTimeRange render right?', () => {
    const { container } = render(<DateTimeRange name="test" />);

    expect(container.firstChild)
      .toMatchSnapshot();
  });
});
describe('Check DateTimeRange value set test collection', () => {
  test('is DateTimeRange render right if value set as String', () => {
    const dateValue = ['10.10.2010 10:10', '12.12.2010 10:10'];
    const { getAllByRole } = render(<DateTimeRange name="test" value={['10.10.2010 10:10', '12.12.2010 10:10']} />);

    expect(getAllByRole('textbox'))
      .toHaveLength(2);

    getAllByRole('textbox').forEach((input, index) => {
      expect(input)
        .toHaveAttribute('value');

      expect(input)
        .toHaveValue(dateValue[index]);
    });
  });
  test('is DateTimeRange render right if value set as Date', () => {
    const dateValue = ['10.10.2010 10:10', '12.12.2010 10:10'];
    const { getAllByRole } = render(<DateTimeRange name="test" value={[new Date('10.10.2010 10:10'), new Date('12.12.2010 10:10')]} />);

    expect(getAllByRole('textbox'))
      .toHaveLength(2);

    getAllByRole('textbox').forEach((input, index) => {
      expect(input)
        .toHaveAttribute('value');

      expect(input)
        .toHaveValue(dateValue[index]);
    });
  });
  test('is DateTimeRange render right if value set as Null', () => {
    const dateValue = ['', ''];
    const { getAllByRole } = render(<DateTimeRange name="test" value={[null, null]} />);

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
describe('Check DateTimeRange attributes test collection', () => {
  test('is DateTimeRange placeholder set right?', () => {
    const placeholder = ['от', 'до'];
    const { getAllByRole } = render(<DateTimeRange placeholder={['от', 'до']} />);

    expect(getAllByRole('textbox'))
      .toHaveLength(2);

    getAllByRole('textbox').forEach((input, index) => {
      expect(input)
        .toHaveAttribute('placeholder');

      expect(input)
        .toHaveProperty('placeholder', placeholder[index]);
    });
  });
  test('is DateTimeRange minMax set attributes work right?', () => {
    const min = new Date('01.02.2018 10:10');
    const max = new Date('05.25.2020 10:10');// mm-dd-YYYY
    const valueForCheck = '26';
    const { getAllByText } = render(<DateTimeRange value={['25.05.2020 10:10', '25.05.2020 10:10']} isOpen min={min} max={max} />);

    getAllByText(valueForCheck).forEach((el) => {
      expect(el)
        .toHaveClass('calendar-date-cell disabled-date');
    });
  });
  test('is DateTimeRange isDisabled attributes work right?', () => {
    const onChange = jest.fn();
    const { container } = render(<DateTimeRange isDisabled value={['15.05.2020 10:10', '25.05.2020 10:10']} onChange={onChange} />);
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
  test('is DateTimeRange isOpen attribute work right?', () => {
    const onChange = jest.fn();
    const { container, rerender } = render(<DateTimeRange isOpen value={['15.05.2020', '25.05.2020']} onChange={onChange} />);
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

    rerender(<DateTimeRange value={['05.05.2020', '25.05.2020']} onChange={onChange} />);

    expect(container.querySelectorAll('.calendar-wrapper.visible')[0])
      .not
      .toBeDefined();

    expect(container.querySelectorAll('.calendar-wrapper.visible')[1])
      .not
      .toBeDefined();
  });
  test('is DateTimeRange date format input work right?', () => {
    const onChange = jest.fn();
    const validFormat = 'dd.MM.yyyy hh:mm';
    const invalidFormat = 'yyyy-MM-dd hh:mm';
    const validValue = '15.05.2020 10:10';
    const invalidValue = '2010-10-10 10:10';
    const { container, rerender } = render(<DateTimeRange format={validFormat} value={['15.05.2020 10:10', '15.05.2020 10:10']} onChange={onChange} />);
    const inputA = container.querySelectorAll('input.datepicker-input')[0];
    const inputB = container.querySelectorAll('input.datepicker-input')[1];

    expect(inputA)
      .toHaveValue(validValue);

    expect(inputB)
      .toHaveValue(validValue);

    rerender(<DateTimeRange format={invalidFormat} value={['2010-10-10 10:10', '2010-10-10 10:10']} onChange={onChange} />);

    expect(inputA)
      .toHaveValue(invalidValue);

    expect(inputB)
      .toHaveValue(invalidValue);
  });
});
describe('Check DateTimeRange event listeners test collection', () => {
  test('is DateTimeRange onBlur event listener work right?', () => {
    const validDate = '05-05-2020 10:10';
    const validName = 'test';
    const validFormat = 'dd-MM-yyyy hh:mm';
    const onBlur = jest.fn();
    const { container } = render(<DateTimeRange name={validName} format={validFormat} value={['05-05-2020 10:10', '06-05-2020 10:10']} onBlur={onBlur} />);
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
  test('is DateTimeRange onChange event listener work right?', () => {
    const validFormat = 'dd.MM.yyyy hh:mm';
    const validValueA = '11.10.2010 10:10';
    const validValueB = '11.11.2010 10:10';
    const validName = 'test';
    const onChange = jest.fn();
    const { container } = render(<DateTimeRange format={validFormat} value={['10.10.2010 10:10', '10.10.2020 10:10']} name={validName} onChange={onChange} />);
    const inputA = container.querySelectorAll('input.datepicker-input')[0];
    const inputB = container.querySelectorAll('input.datepicker-input')[1];

    fireEvent.change(inputA, validValueA);

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
  test('is DateTimeRange onPressEnter event listener work right?', () => {    
    const onEnterPress = jest.fn();
    const validName = 'test';
    const validValue = '10.10.2020 10:10';
    const { container } = render(<DateTimeRange name={validName} value={['10.10.2010 10:10', '10.10.2020 10:10']} onEnterPress={onEnterPress} />);
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

    expect(onEnterPress)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: `${validName}-to`, // Для первого инпута - from, для второго - to
          value: validValue,
        }),
      }));
  });
  test('is DateTimeRange onFocus event listener work right?', () => {
    const validName = 'test';
    const onFocus = jest.fn();
    const { container } = render(<DateTimeRange name={validName} value={['10.10.2010 10:10', '10.10.2020 10:10']} onFocus={onFocus} />);
    const input = container.querySelectorAll('input.datepicker-input')[0];

    fireEvent.focus(input);

    expect(onFocus)
      .toHaveBeenCalled();

    expect(onFocus)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: 'test-from',
          value: '10.10.2010 10:10',
        }),
      }));
  });
});
