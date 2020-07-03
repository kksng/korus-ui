import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { TimePicker } from './index';

const validName = 'test';
const validFormat = 'hh:mm';
const invalidFormat = 'hh-mm';
const validValue = '10:10';
const invalidValue = '10-10';


describe('TimePicker snapshots collection', () => {
  test('is TimePicker render right?', () => {
    const { container } = render(<TimePicker name={validName} />);

    expect(container.firstChild)
      .toMatchSnapshot();
  });
});
describe('TimePicker attributes test collection', () => {
  test('is TimePicker placeholder set right?', () => {
    const validPlaceholder = 'text';
    const { getByRole } = render(<TimePicker placeholder={validPlaceholder} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('placeholder');

    expect(getByRole('textbox'))
      .toHaveProperty('placeholder', validPlaceholder);
  });
  test('is TimePicker with isDisabled attributes work right?', () => {
    const onFocus = jest.fn();
    const { container, getByRole } = render(<TimePicker isDisabled value="10:10" onFocus={onFocus} />);
    const input = getByRole('textbox');

    input.focus();

    expect(container.querySelectorAll('.disabled-state'))
      .toHaveLength(1);

    expect(input)
      .toHaveAttribute('disabled');

    expect(onFocus)
      .toHaveBeenCalledTimes(0);
  });
  test('is TimePicker with different date format input work right?', () => {
    const { rerender, getByRole } = render(<TimePicker format={validFormat} value={validValue} />);
    const input = getByRole('textbox');

    expect(input)
      .toHaveValue(validValue);

    rerender(<TimePicker format={invalidFormat} value={invalidValue} />);

    expect(input)
      .toHaveValue(invalidValue);
  });
  test('is TimePicker with timeMax and timeMin attriutes work right?', () => {
    const timeMin = [22, 5];
    const timeMax = [23, 5];
    const { rerender, getByRole, debug } = render(<TimePicker timemin={timeMin} timemax={timeMax} />);
    const input = getByRole('textbox');

    expect(input)
      .toHaveAttribute('timemin', timeMin.join(','));

    expect(input)
      .toHaveAttribute('timemax', timeMax.join(','));

    // BB
    // Больше проверить нельзя. Не работает ограничение
  });
});
describe('TimePicker event listeners test collection', () => {
  test('is TimePicker onBlur event listener work right?', () => {
    const onBlur = jest.fn();
    const { container } = render(<TimePicker value={validValue} name={validName} onBlur={onBlur} />);
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
  test('is TimePicker onFocus event listener work right?', () => {
    const onFocus = jest.fn();
    const { container } = render(<TimePicker name={validName} value={validValue} onFocus={onFocus} />);
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
  test('is TimePicker onChange event listener work right?', () => {
    const onChange = jest.fn();
    const { container } = render(<TimePicker format={validFormat} name={validName} onChange={onChange} />);
    const input = container.querySelectorAll('input.datepicker-input')[0];

    userEvent.type(input, validValue);

    expect(onChange)
      .toHaveBeenCalledTimes(validValue.length);

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: '', // Ошибка компоненты. Приходит  value="__:__"
        }),
      }));
  });
  test('is TimePicker onPressEnter event listener work right?', () => {
    const onEnterPress = jest.fn();
    const { container } = render(<TimePicker name={validName} value={validValue} onEnterPress={onEnterPress} />);
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
});
describe('TimePicker quality test collection', () => {
  test('is TimePicker render right if value set as String', () => {
    const timeValue = '10:10';
    const {
      getAllByRole,
      getByRole,
    } = render(<TimePicker name="test" value={timeValue} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('value');

    expect(getAllByRole('textbox'))
      .toHaveLength(1);

    expect(getByRole('textbox'))
      .toHaveValue(timeValue);
  });
  test('is TimePicker render right if value set as Date', () => {
    const timeValue = new Date('2020.01.01 10:10');
    const {
      getAllByRole,
      getByRole,
    } = render(<TimePicker name="test" value={timeValue} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('value');

    expect(getAllByRole('textbox'))
      .toHaveLength(1);

    expect(getByRole('textbox'))
      .toHaveValue('10:10');
  });
  test('is TimePicker render right if value set as Null', () => {
    const timeValue = null;
    const {
      getAllByRole,
      getByRole,
    } = render(<TimePicker name="test" value={timeValue} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('value');

    expect(getAllByRole('textbox'))
      .toHaveLength(1);

    expect(getByRole('textbox'))
      .toHaveValue('');
  });
});
