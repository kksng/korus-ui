import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { MaskedInput } from './index';

const validMask = '###-###';
const validName = 'test';
const validValue = '123-123';

describe('MaskedInput snapshots collection', () => {
  test('is MaskedInput render right?', () => {
    const { container } = render(<MaskedInput mask={validMask} name={validName} defaultValue={validValue} />);

    expect(container.firstChild)
      .toMatchSnapshot();
  });
});
describe('MaskedInput attributes test collection', () => {
  test('is MaskedInput work right with with defaultValue attributes?', () => {
    const { getByRole } = render(<MaskedInput mask={validMask} name={validName} defaultValue={validValue} />);

    expect(getByRole('textbox'))
      .toBeInTheDocument();

    expect(getByRole('textbox'))
      .toHaveProperty('value', validValue);
  });
  test('is MaskedInput work right with some value?', () => {
    const { getByRole } = render(<MaskedInput mask={validMask} name={validName} value={validValue} />);

    expect(getByRole('textbox'))
      .toBeInTheDocument();

    expect(getByRole('textbox'))
      .toHaveProperty('value', validValue);
  });
  test('is MaskedInput with work right with isDisabled attributes?', () => {
    const onFocus = jest.fn();
    const { container } = render(<MaskedInput isDisabled mask={validMask} name={validName} onFocus={onFocus} />);
    const wrapper = container.querySelectorAll('.masked-input-wrapper')[0];
    const input = container.querySelectorAll('input.masked-input-element')[0];

    expect(wrapper)
      .toHaveClass('disabled');

    fireEvent.change(input, {
      target: {
        value: validValue,
      },
    });

    expect(onFocus)
      .toBeCalledTimes(0);
  });
  test('is MaskedInput work right with placeholder attributes?', () => {
    const validPlaceholder = 'placeholder';
    const { getByRole } = render(<MaskedInput placeholder={validPlaceholder} mask={validMask} name={validName} />);

    expect(getByRole('textbox'))
      .toHaveAttribute('placeholder', validPlaceholder);
  });
});
describe('MaskedInput event handler test collection', () => {
  test('is MaskedInput work right with onChange event handler?', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<MaskedInput onChange={onChange} mask={validMask} name={validName} />);
    const input = getByRole('textbox');

    userEvent.type(input, validValue);

    expect(onChange)
      .toBeCalledTimes(validValue.length);

    /**
     * ВВ
     * Так как у нас маска, не нативная
     * Данные не приходят. Тоже самое в DatePicker
     */
    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: '',
        }),
      }));
  });
  test('is MaskedInput work right with onBlur event handler?', () => {
    const onBlur = jest.fn();
    const { getByRole } = render(<MaskedInput onBlur={onBlur} mask={validMask} name={validName} value={validValue} />);
    const input = getByRole('textbox');

    fireEvent.focus(input);
    fireEvent.blur(input);

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
  test('is MaskedInput work right with onFocus event handler?', () => {
    const onFocus = jest.fn();
    const { getByRole } = render(<MaskedInput onBlur={onFocus} mask={validMask} name={validName} value={validValue} />);
    const input = getByRole('textbox');

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(onFocus)
      .toBeCalledTimes(1);

    expect(onFocus)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: validValue,
        }),
      }));
  });
  test('is MaskedInput work right with onEnterPress event handler?', () => {
    const onEnterPress = jest.fn();
    const { getByRole } = render(<MaskedInput onEnterPress={onEnterPress} mask={validMask} name={validName} value={validValue} />);
    const input = getByRole('textbox');

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
