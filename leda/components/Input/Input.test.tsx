import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './index';

describe('Input SNAPSHOTS', () => {
  it('should render basic usage', () => {
    const wrapper = render((
      <Input onChange={jest.fn()} />
    ));

    expect(wrapper.container).toMatchSnapshot();
  });

  it('should render value in controllable mode', () => {
    const wrapper = render((
      <Input onChange={jest.fn()} value="test value" />
    ));

    expect(screen.getByRole('textbox')).toHaveValue('test value');

    expect(wrapper.container).toMatchSnapshot();

    wrapper.rerender((
      <Input onChange={jest.fn()} value="new test value" />
    ));

    expect(screen.getByRole('textbox')).toHaveValue('new test value');

    expect(wrapper.container).toMatchSnapshot();
  });

  describe('should render different component states', () => {
    it('should render disabled', () => {
      const wrapper = render((
        <Input onChange={jest.fn()} isDisabled />
      ));

      expect(screen.getByRole('textbox')).toBeDisabled();

      expect(wrapper.container).toMatchSnapshot();
    });
  });
});

describe('Input HANDLERS', () => {
  it('should test onBlur', () => {
    const handleBlur = jest.fn();

    render((
      <Input onBlur={handleBlur} />
    ));

    screen.getByRole('textbox').focus();
    screen.getByRole('textbox').blur();

    expect(handleBlur).toBeCalled();
  });

  it('should test onChange', () => {
    const handleChange = jest.fn();
    const name = 'name';
    const value = 'value';
    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        value, name,
      }),
      target: expect.objectContaining({
        value,
      }),
    });

    render((
      <Input onChange={handleChange} name={name} />
    ));

    userEvent.type(screen.getByRole('textbox'), value);

    expect(handleChange).lastCalledWith(eventMatcher);
  });

  it('should test onEnterPress', () => {
    const handleEnterPress = jest.fn();

    render((
      <Input name="auto" value="text" onEnterPress={handleEnterPress} />
    ));

    fireEvent.keyDown(screen.getByRole('textbox'), {
      key: 'Enter',
    });

    expect(handleEnterPress).toBeCalledTimes(1);
  });
});

describe('Input ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = render((
      <Input onBlur={jest.fn()} _box />
    ));

    expect(document.querySelector('div.input-wrapper')).toHaveClass('box');

    wrapper.rerender((
      <Input onBlur={jest.fn()} _active />
    ));

    expect(document.querySelector('div.input-wrapper')).not.toHaveClass('box');

    expect(document.querySelector('div.input-wrapper')).toHaveClass('active');

    wrapper.rerender((
      <Input onBlur={jest.fn()} _active className="testClass" />
    ));

    expect(document.querySelector('div.input-wrapper')).not.toHaveClass('box');

    expect(document.querySelector('div.input-wrapper')).toHaveClass('active');
    expect(document.querySelector('div.input-wrapper')).toHaveClass('testClass');
  });

  it('should have maxLength limit', () => {
    const handleChange = jest.fn();
    const value = 'new v';
    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        value,
      }),
      target: expect.objectContaining({
        value,
      }),
    });

    render((
      <Input onChange={handleChange} maxLength={5} onBlur={jest.fn()} />
    ));

    userEvent.type(screen.getByRole('textbox'), 'new value', {
      allAtOnce: true,
    });

    expect(handleChange).lastCalledWith(eventMatcher);
  });
});

describe('Input VALIDATION', () => {
  it('should be invalid if component is isRequired, value is empty and onBlur was called', () => {
    render((
      <Input isRequired form="form" name="name" />
    ));

    screen.getByRole('textbox').focus();
    screen.getByRole('textbox').blur();

    expect(document.querySelector('div.input-element-wrapper')).toHaveClass('danger');
  });

  it('should be invalid if value passes validation and vice versa', () => {
    const validator = (value: string): boolean => value.length > 2;

    render((
      <Input isRequired name="name" form="form" invalidMessage="value length must be more than 2" validator={validator} />
    ));

    screen.getByRole('textbox').focus();

    userEvent.type(screen.getByRole('textbox'), 'a');

    screen.getByRole('textbox').blur();

    expect(document.querySelector('div.input-element-wrapper')).toHaveClass('danger');
  });
});
