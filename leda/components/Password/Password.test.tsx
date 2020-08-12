import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { Password } from './index';
import { PasswordStrength } from './constants';
import { validatePassword } from '../../validators/password';

const validName = 'test';
const validValue = '123';
const on = true;
const off = false;

describe('Password snapshots collection', () => {
  test('is Password component render right?', () => {
    const { container } = render(<Password name={validName} />);

    expect(container.firstChild)
      .toMatchSnapshot();
  });
  test('is Password render right with defaultValue?', () => {
    const { container } = render(<Password defaultValue={validValue} name={validName} />);
    const input = container.querySelectorAll('input.password-input')[0];

    expect(input)
      .toHaveAttribute('value', validValue);

    expect(container.firstChild)
      .toMatchSnapshot();
  });
  test('is Password render right with hasClearButton?', () => {
    const { container, rerender } = render(<Password defaultValue={validValue} hasClearButton={on} name={validName} />);
    const icon = container.querySelectorAll('.password-clear-icon')[0];
    const input = container.querySelectorAll('input.password-input')[0];

    expect(icon)
      .toBeInTheDocument();

    expect(input)
      .toBeInTheDocument();

    expect(container.firstChild)
      .toMatchSnapshot();

    rerender(<Password defaultValue={validValue} hasClearButton={off} name={validName} />);

    expect(icon)
      .not
      .toBeInTheDocument();
  });
});
describe('Password attributes test collection', () => {
  test('is Password work right with isDisabled attributes?', () => {
    const onFocus = jest.fn();
    const { container } = render(<Password isDisabled onFocus={onFocus} />);
    const input = container.querySelectorAll('input.password-input')[0] as HTMLInputElement | undefined;

    expect(container.querySelectorAll('.password-element-wrapper.disabled'))
      .toHaveLength(1);

    expect(input)
      .toHaveAttribute('disabled');

    input?.focus();

    expect(onFocus)
      .toHaveBeenCalledTimes(0);
  });
  test('is Password work right with letterCase attributest?', () => {
    const onChange = jest.fn();
    const inputUpper = 'upper';
    const inputLower = 'lower';
    const { container, rerender } = render(<Password letterCase={inputUpper} onChange={onChange} />);
    const input = container.querySelectorAll('input.password-input')[0];

    userEvent.type(input, 'abc');

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          value: 'ABC',
        }),
      }));

    rerender(<Password letterCase={inputLower} onChange={onChange} />);

    userEvent.type(input, 'ABC');

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          value: 'abc',
        }),
      }));
  });
  test('is Password work right with maxLength attributes?', () => {
    const max = 2;
    const onChange = jest.fn();
    const { container } = render(<Password maxLength={max} onChange={onChange} />);
    const input = container.querySelectorAll('input.password-input')[0];

    userEvent.type(input, 'abcd');

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          value: 'ab',
        }),
      }));
  });
  test('is Password work right with allowedSymbols attributes?', () => {
    const onlyNumber = new RegExp(/^\d+$/);
    const onChange = jest.fn();
    const { container } = render(<Password allowedSymbols={onlyNumber} onChange={onChange} />);
    const input = container.querySelectorAll('input.password-input')[0];

    userEvent.type(input, '0abcd');

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          value: '0',
        }),
      }));
  });
  test('is Password work right with forbiddenSymbols attributes?', () => {
    const onlyNumber = new RegExp(/^\d+$/);
    const onChange = jest.fn();
    const { container } = render(<Password forbiddenSymbols={onlyNumber} onChange={onChange} />);
    const input = container.querySelectorAll('input.password-input')[0];

    userEvent.type(input, 'a0123');

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          value: 'a',
        }),
      }));
  });
  test('is Password work right with minPasswordEvaluationLength attributes?', () => {
    const emptyPasswordMessage = 'Используйте строчные и прописные латинские буквы и цифры, не менее 8 символов';
    const notEmptyPasswordMessage = 'Слабый пароль';
    const minEvalLength = 4;
    const {
      container,
      getByText,
      rerender,
    } = render(<Password minPasswordEvaluationLength={minEvalLength} />);
    const input = container.querySelectorAll('input.password-input')[0];

    userEvent.type(input, '012');

    expect(getByText(emptyPasswordMessage))
      .toBeInTheDocument();

    rerender(<Password minPasswordEvaluationLength={minEvalLength} />);

    userEvent.type(input, '0123');

    expect(getByText(notEmptyPasswordMessage))
      .toBeInTheDocument();
  });
  test('is Password work right with passwordEvalutors attributes work right?', () => {
    const passworLowTxt = 'Пароль слабоват';
    const passwordMediumTxt = 'Надёжный пароль';
    const passwordStrongTxt = 'Отличный пароль';
    const passwordEvaluators = [
      {
        strengthLevel: PasswordStrength.Low,
        evaluator: () => true,
        evaluationMessage: passworLowTxt,
      },
      {
        strengthLevel: PasswordStrength.Medium,
        evaluator: (password: string) => {
          if (validatePassword(password)) return true;
          return false;
        },
        evaluationMessage: passwordMediumTxt,
      },
      {
        strengthLevel: PasswordStrength.Strong,
        evaluator: (password: string) => {
          if (
            validatePassword(password)
            && password.length > 12
            && /[!@#$%*]/.test(password)
          ) {
            return true;
          }
          return false;
        },
        evaluationMessage: passwordStrongTxt,
      },
    ];
    const {
      container,
      getByText,
    } = render(<Password passwordEvaluators={passwordEvaluators} />);

    const input = container.querySelectorAll('input.password-input')[0];

    userEvent.type(input, '3233');

    expect(getByText(passworLowTxt))
      .toBeInTheDocument();

    userEvent.type(input, '3233@#Dq');

    expect(getByText(passwordMediumTxt))
      .toBeInTheDocument();

    userEvent.type(input, '3233@#DqEErrq');

    expect(getByText(passwordStrongTxt))
      .toBeInTheDocument();
  });
});
describe('Password events test collection', () => {
  test('is Password work right with onBlur event listner?', () => {
    const onBlur = jest.fn();
    const { container } = render(<Password defaultValue={validValue} name={validName} onBlur={onBlur} />);
    const input = container.querySelectorAll('input.password-input')[0];

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
        }),
      }));
  });
  test('is Password work right with onFocus event listener?', () => {
    const onFocus = jest.fn();
    const { container } = render(<Password defaultValue={validValue} name={validName} onFocus={onFocus} />);
    const input = container.querySelectorAll('input.password-input')[0];

    fireEvent.focus(input);

    expect(onFocus)
      .toBeCalledTimes(1);

    expect(onFocus)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
        }),
      }));
  });
  test('is Password work right with onChange event listener?', () => {
    const onChange = jest.fn();
    const { container } = render(<Password defaultValue={validValue} name={validName} onChange={onChange} />);
    const input = container.querySelectorAll('input.password-input')[0];

    userEvent.type(input, validValue);

    expect(onChange)
      .toBeCalledTimes(validValue.length);

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: validValue,
        }),
      }));
  });
});
