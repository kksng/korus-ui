import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  NumericTextBox,
} from './index';

describe('NumericTextBox SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = render((
      <NumericTextBox />
    ));

    expect(wrapper.container).toMatchSnapshot();
  });

  describe('controllable mode', () => {
    it('should render format', () => {
      const wrapper = render((
        <NumericTextBox format="#,## %" value={0.235813} />
      ));

      expect(screen.getByRole('textbox')).toHaveValue('0,24 %');

      expect(wrapper.container).toMatchSnapshot();

      wrapper.rerender((
        <NumericTextBox format="#,#### ₽" value={0.235813} />
      ));

      // todo fix precision
      expect(screen.getByRole('textbox')).toHaveValue('0,2359 ₽');

      expect(wrapper.container).toMatchSnapshot();
    });

    it('should render min', () => {
      // todo: починить снапшоты, они просто зависают
      const wrapper = render((
        <NumericTextBox min={-2} />
      ));

      screen.getByRole('textbox').focus();

      Array(9).fill(0).forEach(() => {
        fireEvent.keyDown(screen.getByRole('textbox'), {
          key: 'ArrowDown',
        });
      });

      screen.getByRole('textbox').blur();

      expect(screen.getByRole('textbox')).toHaveValue('-2');

      expect(wrapper.container).toMatchSnapshot();

      wrapper.rerender((
        <NumericTextBox format="#,#" min={-6.2} />
      ));

      screen.getByRole('textbox').focus();

      Array(9).fill(0).forEach(() => {
        fireEvent.keyDown(screen.getByRole('textbox'), {
          key: 'ArrowDown',
        });
      });

      screen.getByRole('textbox').blur();

      expect(screen.getByRole('textbox')).toHaveValue('-6,2');

      expect(wrapper.container).toMatchSnapshot();
    });

    it('should render max', () => {
      // todo: починить снапшоты, они просто зависают
      const wrapper = render((
        <NumericTextBox format="#,#" max={7.3} />
      ));

      screen.getByRole('textbox').focus();

      Array(9).fill(0).forEach(() => {
        fireEvent.keyDown(screen.getByRole('textbox'), {
          key: 'ArrowUp',
        });
      });

      screen.getByRole('textbox').blur();

      expect(screen.getByRole('textbox')).toHaveValue('7,3');

      expect(wrapper.container).toMatchSnapshot();

      wrapper.rerender((
        <NumericTextBox format="#,#" max={10.4} />
      ));

      screen.getByRole('textbox').focus();

      Array(9).fill(0).forEach(() => {
        fireEvent.keyDown(screen.getByRole('textbox'), {
          key: 'ArrowUp',
        });
      });

      screen.getByRole('textbox').blur();

      expect(screen.getByRole('textbox')).toHaveValue('10,4');
    });

    it('should render step', () => {
      // todo: починить снапшоты, они просто зависают
      const wrapper = render((
        <NumericTextBox min={0} step={2} />
      ));

      screen.getByRole('textbox').focus();

      fireEvent.keyDown(screen.getByRole('textbox'), {
        key: 'ArrowUp',
      });

      screen.getByRole('textbox').blur();

      expect(screen.getByRole('textbox')).toHaveValue('2');

      expect(wrapper.container).toMatchSnapshot();

      wrapper.rerender((
        <NumericTextBox min={0} step={0.1} format="#,#" />
      ));

      screen.getByRole('textbox').focus();

      fireEvent.keyDown(screen.getByRole('textbox'), {
        key: 'ArrowDown',
      });

      screen.getByRole('textbox').blur();

      expect(screen.getByRole('textbox')).toHaveValue('1,9');

      expect(wrapper.container).toMatchSnapshot();
    });

    it('should render value', () => {
      const wrapper = render((
        <NumericTextBox format="#,## %" value={0.235813} />
      ));

      expect(screen.getByRole('textbox')).toHaveValue('0,24 %');

      expect(wrapper.container).toMatchSnapshot();

      wrapper.rerender((
        <NumericTextBox format="#,## %" value={0.687421} />
      ));

      expect(screen.getByRole('textbox')).toHaveValue('0,69 %');

      expect(wrapper.container).toMatchSnapshot();
    });
  });

  describe('different component states', () => {
    it('should render placeholder', () => {
      const placeholder = 'placeholder';

      const wrapper = render((
        <NumericTextBox placeholder={placeholder} />
      ));

      expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', placeholder);

      expect(wrapper.container).toMatchSnapshot();
    });
  });
});

describe('NumericTextBox HANDLERS', () => {
  it('should trigger onBlur', () => {
    const handleBlur = jest.fn();

    render((
      <NumericTextBox onBlur={handleBlur} />
    ));

    screen.getByRole('textbox').focus();
    screen.getByRole('textbox').blur();

    expect(handleBlur).toHaveBeenCalled();
  });

  it('should trigger onChange', () => {
    const handleChange = jest.fn();

    render((
      <NumericTextBox onChange={handleChange} />
    ));

    userEvent.type(screen.getByRole('textbox'), '25');

    expect(handleChange).toHaveBeenCalled();

    expect(screen.getByRole('textbox')).toHaveValue('25');
  });

  it('should trigger onFocus', () => {
    const handleFocus = jest.fn();

    render((
      <NumericTextBox onFocus={handleFocus} />
    ));

    screen.getByRole('textbox').focus();

    expect(handleFocus).toHaveBeenCalled();
  });

  it('should have correct event format in onChange', () => {
    const handleChange = jest.fn();

    render((
      <NumericTextBox name="test" onChange={handleChange} />
    ));

    userEvent.type(screen.getByRole('textbox'), '25');

    expect(handleChange).toHaveBeenCalled();

    const [[changeEvent]] = handleChange.mock.calls;

    expect(changeEvent.target.name).toEqual('test');
    expect(changeEvent.target.value).toEqual('25');
  });

  it('should have correct event format in onBlur', () => {
    const handleBlur = jest.fn();

    render((
      <NumericTextBox value={25} name="test" onBlur={handleBlur} />
    ));

    screen.getByRole('textbox').focus();
    screen.getByRole('textbox').blur();

    expect(handleBlur).toHaveBeenCalled();

    const [[blurEvent]] = handleBlur.mock.calls;

    expect(blurEvent.target.name).toEqual('test');
    expect(blurEvent.target.value).toEqual('25');
  });

  describe('different ways to change value', () => {
    it('should change value by clicking upper spinner', () => {
      render((
        <NumericTextBox defaultValue={0} />
      ));

      expect(screen.getByRole('textbox')).toHaveValue('0');

      const element = document.querySelector('span.numeric-text-box-arrow-up');

      if (element) {
        userEvent.click(element);
      }

      expect(screen.getByRole('textbox')).toHaveValue('1');
    });

    it('should change value by clicking lower spinner', () => {
      render((
        <NumericTextBox defaultValue={0} />
      ));

      expect(screen.getByRole('textbox')).toHaveValue('0');

      const element = document.querySelector('span.numeric-text-box-arrow-down');

      if (element) {
        userEvent.click(element);
      }

      expect(screen.getByRole('textbox')).toHaveValue('-1');
    });

    it('should change value by input numbers', () => {
      render((
        <NumericTextBox defaultValue={0} />
      ));

      expect(screen.getByRole('textbox')).toHaveValue('0');

      userEvent.type(screen.getByRole('textbox'), '25');

      screen.getByRole('textbox').click();

      expect(screen.getByRole('textbox')).toHaveValue('25');
    });
  });

  it('should round value according to current format', () => {
    render((
      <NumericTextBox format="#,## %" value={0.235813} />
    ));

    expect(screen.getByRole('textbox')).toHaveValue('0,24 %');
  });

  it('should change format onFocus', () => {
    render((
      <NumericTextBox format="#,## %" value={0.235813} />
    ));

    expect(screen.getByRole('textbox')).toHaveValue('0,24 %');

    screen.getByRole('textbox').focus();

    expect(screen.getByRole('textbox')).toHaveValue('0,24');
  });

  it('should change format onBlur', () => {
    render((
      <NumericTextBox format="#,## %" value={0.235813} />
    ));

    expect(screen.getByRole('textbox')).toHaveValue('0,24 %');

    screen.getByRole('textbox').focus();

    expect(screen.getByRole('textbox')).toHaveValue('0,24');

    screen.getByRole('textbox').blur();

    expect(screen.getByRole('textbox')).toHaveValue('0,24 %');
  });
});

describe('NumericTextBox ATTRIBUTES', () => {
  describe('format', () => {
    it('should have number format', () => {
      render((
        <NumericTextBox format="#,##" value={0.235813} />
      ));

      expect(screen.getByRole('textbox')).toHaveValue('0,24');
    });

    it('should have currency format', () => {
      render((
        <NumericTextBox format="#,## ₽" value={0.235813} />
      ));

      expect(screen.getByRole('textbox')).toHaveValue('0,24 ₽');
    });

    it('should have percent format', () => {
      render((
        <NumericTextBox format="#,## %" value={0.235813} />
      ));

      expect(screen.getByRole('textbox')).toHaveValue('0,24 %');
    });

    it('should have custom format', () => {
      render((
        <NumericTextBox format="#,####### tests" value={1080.235813} />
      ));

      expect(screen.getByRole('textbox')).toHaveValue('1 080,2358130 tests');
    });
  });
});

describe('NumericTextBox VALIDATION', () => {
  it('should be invalid if value passes validation and vice versa', () => {
    const handleBlur = jest.fn();

    const validator = (value: string): boolean => value.toString().length >= 4;

    render((
      <NumericTextBox isRequired form="test" name="test" onBlur={handleBlur} validator={validator} invalidMessage="message" />
    ));

    screen.getByRole('textbox').focus();

    userEvent.type(screen.getByRole('textbox'), '25');

    expect(screen.getByRole('textbox')).toHaveValue('25');

    screen.getByRole('textbox').blur();

    expect(handleBlur).toHaveBeenCalledTimes(1);

    const [[firstEvent]] = handleBlur.mock.calls;

    expect(firstEvent.target.name).toEqual('test');
    expect(firstEvent.target.value).toEqual('25');

    expect(firstEvent.component.name).toEqual('test');
    expect(firstEvent.component.value).toEqual(25);
    expect(firstEvent.component.formattedValue).toEqual('25');
    expect(firstEvent.component.isValid).toBeFalsy();

    expect(screen.getByRole('textbox')).toBeInvalid();

    expect(document.querySelector('span.invalid-message-item')).toHaveTextContent('message');

    handleBlur.mockReset();

    screen.getByRole('textbox').focus();

    userEvent.type(screen.getByRole('textbox'), '2552');

    expect(screen.getByRole('textbox')).toHaveValue('2552');

    screen.getByRole('textbox').blur();

    expect(screen.getByRole('textbox')).toHaveValue('2 552');

    expect(handleBlur).toHaveBeenCalledTimes(1);

    const [[secondEvent]] = handleBlur.mock.calls;

    expect(secondEvent.target.name).toEqual('test');
    expect(secondEvent.target.value).toEqual('2 552');

    expect(secondEvent.component.name).toEqual('test');
    expect(secondEvent.component.value).toEqual(2552);
    expect(secondEvent.component.formattedValue).toEqual('2 552');
    expect(secondEvent.component.isValid).toBeTruthy();

    expect(screen.getByRole('textbox')).toBeValid();

    expect(document.querySelector('span.invalid-message-item')).toBeNull();
  });

  it('should be invalid if component is isRequired, value is empty and onBlur was called', async () => {
    const handleBlur = jest.fn();

    render((
      <NumericTextBox isRequired form="test" name="test" onBlur={handleBlur} />
    ));

    screen.getByRole('textbox').focus();
    screen.getByRole('textbox').blur();

    const [[event]] = handleBlur.mock.calls;

    expect(event.target.name).toEqual('test');
    expect(event.target.value).toEqual('');

    expect(event.component.name).toEqual('test');
    expect(event.component.value).toBeNull();
    expect(event.component.formattedValue).toEqual('');
    expect(event.component.isValid).toBeFalsy();

    expect(screen.getByRole('textbox')).toBeInvalid();

    expect(document.querySelector('div.numeric-text-box-input-wrapper')).toHaveClass('danger');
  });
});
