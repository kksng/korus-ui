import React from 'react';
import {
  getNodeText, render, screen, fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AutoComplete } from './index';

describe('AutoComplete SNAPSHOTS', () => {
  test('basic usage', () => {
    const wrapper = render((
      <AutoComplete
        onChange={jest.fn()}
        data={['value0', 'value1']}
        value="value"
      />
    ));
    expect(wrapper.container).toMatchSnapshot();
  });
  test('value in controllable mode', () => {
    const wrapper = render((
      <AutoComplete
        onChange={jest.fn()}
        data={['value0', 'value1']}
        value="value"
      />
    ));
    expect(screen.getByRole('textbox')).toHaveValue('value');
    expect(wrapper.container).toMatchSnapshot();
  });
  describe('should render multi-type attributes', () => {
    test('data', () => {
      const wrapper = render((
        <AutoComplete
          onChange={jest.fn()}
          data={['value0', 'value1']}
          value="value"
          isOpen
        />
      ));
      expect(wrapper.container).toMatchSnapshot();
      const data = [
        { id: 0, value: 'value0' },
        { id: 1, value: 'value1' },
      ];
      wrapper.rerender((
        <AutoComplete
          onChange={jest.fn()}
          data={data}
          value={data[0].value}
          textField="value"
          isOpen
        />
      ));
      expect(wrapper.container).toMatchSnapshot();
    });
  });
  describe('should render different component states', () => {
    test('readonly', () => {
      const wrapper = render((
        <AutoComplete
          onChange={jest.fn()}
          data={['value0', 'value1']}
          value="value"
          readOnly
        />
      ));
      expect(document.querySelector('input')?.readOnly).toBeTruthy();
      expect(wrapper.container).toMatchSnapshot();
    });
    test('opened', () => {
      const wrapper = render((
        <AutoComplete
          onChange={jest.fn()}
          data={['value0', 'value1']}
          value="value"
          isOpen
        />
      ), {
        queries: {

        },
      });
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
      expect(wrapper.container).toMatchSnapshot();
    });
    test('loading', () => {
      const wrapper = render((
        <AutoComplete
          onChange={jest.fn()}
          data={['value0', 'value1']}
          value="value"
          isLoading
          isOpen
        />
      ));
      expect(document.querySelectorAll('div.loader-wrapper div.loader-container span.loader-element')).toHaveLength(1);
      expect(wrapper.container).toMatchSnapshot();
    });
    test('disabled', () => {
      render((
        <AutoComplete
          onChange={jest.fn()}
          data={['value0', 'value1']}
          isDisabled
        />
      ));
      expect(screen.getByRole('textbox')).toBeDisabled();
      expect(document.querySelectorAll('.disabled')).toHaveLength(1);
    });
  });
  describe('should render validation', () => {
    test('validation', () => {
      const data = ['value0', 'value1'];
      const message = 'message';
      const validator = jest.fn((value: string) => value in data);
      const wrapper = render((
        <AutoComplete
          onChange={jest.fn()}
          data={data}
          name="name"
          form="form"
          invalidMessage={message}
          validator={validator}
        />
      ));
      screen.getByRole('textbox').focus();
      userEvent.type(screen.getByRole('textbox'), 'value');
      screen.getByRole('textbox').blur();
      expect(validator).toBeCalledTimes(1);
      expect(screen.getByRole('textbox')).toBeInvalid();
      expect(document.querySelector('span.invalid-message-list span.invalid-message-item')).toHaveTextContent(message);
      expect(wrapper.container).toMatchSnapshot();
    });
    test('required validation', () => {
      const onChangeHandler = jest.fn();
      const message = 'message';
      const wrapper = render((
        <AutoComplete
          onChange={onChangeHandler}
          data={['value0', 'value1']}
          name="name"
          form="form"
          requiredMessage={message}
          isRequired
        />
      ));
      screen.getByRole('textbox').focus();
      userEvent.type(screen.getByRole('textbox'), '');
      // todo check event call condition
      expect(onChangeHandler).toBeCalledTimes(0);
      screen.getByRole('textbox').blur();
      expect(screen.getByRole('textbox')).toBeInvalid();
      expect(screen.getByRole('textbox')).toBeRequired();
      expect(document.querySelector('span.invalid-message-list span.invalid-message-item')).toHaveTextContent(message);
      expect(wrapper.container).toMatchSnapshot();
    });
  });
});

describe('AutoComplete HANDLERS', () => {
  test('should test onEnterPress', () => {
    const handleEnterPress = jest.fn();

    render((
      <AutoComplete
        onChange={jest.fn()}
        onEnterPress={handleEnterPress}
        data={['value0', 'value1']}
        value="value"
        name="name"
      />
    ));

    fireEvent.keyDown(screen.getByRole('textbox'), {
      key: 'Enter',
    });

    expect(handleEnterPress).toBeCalledTimes(1);
  });
  test('focus and blur', () => {
    const onFocusHandler = jest.fn();
    const onBlurHandler = jest.fn();
    const eventMatcher = expect.objectContaining({
      target: expect.objectContaining({
        value: 'value',
      }),
      component: expect.objectContaining({
        name: 'name',
        value: 'value',
      }),
    });
    render((
      <AutoComplete
        onChange={jest.fn()}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        data={['value0', 'value1']}
        value="value"
        name="name"
      />
    ));
    screen.getByRole('textbox').focus();
    expect(screen.getByRole('textbox')).toHaveFocus();
    screen.getByRole('textbox').blur();
    expect(screen.getByRole('textbox')).not.toHaveFocus();
    expect(onFocusHandler).toBeCalledTimes(1);
    expect(onFocusHandler).lastCalledWith(eventMatcher);
    expect(onBlurHandler).toBeCalledTimes(1);
    expect(onBlurHandler).lastCalledWith(eventMatcher);
  });
  test('change', () => {
    const onChangeHandler = jest.fn();
    const formName = 'form name';
    const oldValue = 'old value';
    const newValue = 'new value';
    const eventMatcher = expect.objectContaining({
      target: expect.objectContaining({
        value: oldValue,
      }),
      component: expect.objectContaining({
        name: formName,
        value: newValue,
      }),
    });
    render((
      <AutoComplete
        onChange={onChangeHandler}
        data={['value0', 'value1']}
        value={oldValue}
        name={formName}
      />
    ));
    userEvent.type(screen.getByRole('textbox'), newValue);
    expect(onChangeHandler).toBeCalledTimes(newValue.length);
    expect(onChangeHandler).lastCalledWith(eventMatcher);
  });
});

describe('AutoComplete ATTRIBUTES', () => {
  describe('should render class', () => {
    test('className', () => {
      render((
        <AutoComplete
          className="test-class"
          onChange={jest.fn()}
          data={['value0', 'value1']}
        />
      ));
      expect(document.querySelectorAll('div.test-class')).toHaveLength(1);
    });
    test('danger', () => {
      render((
        <AutoComplete
          _danger
          onChange={jest.fn()}
          data={['value0', 'value1']}
        />
      ));
      expect(document.querySelectorAll('div.danger')).toHaveLength(1);
    });
    test('active', () => {
      render((
        <AutoComplete
          _active
          onChange={jest.fn()}
          data={['value0', 'value1']}
        />
      ));
      expect(document.querySelectorAll('div.active')).toHaveLength(1);
    });
  });
  describe('should render data', () => {
    test('string type', () => {
      const data = ['value0', 'value1'];
      render((
        <AutoComplete
          onChange={jest.fn()}
          data={data}
          isOpen
        />
      ));
      expect(screen.getAllByRole('listitem').map(getNodeText)).toEqual(data);
    });
    test('object type', () => {
      const data = [
        { id: 0, value: 'value0' },
        { id: 1, value: 'value1' },
      ];
      render((
        <AutoComplete
          onChange={jest.fn()}
          data={data}
          textField="value"
          isOpen
        />
      ));
      expect(screen.getAllByRole('listitem').map(getNodeText)).toEqual(data.map((value) => value.value));
    });
  });
  test('value adjustment to empty', () => {
    const onChangeHandler = jest.fn();
    const data = ['value0', 'value1'];
    const newValue = 'value';
    const eventMatcher = expect.objectContaining({
      target: expect.objectContaining({
        value: newValue,
      }),
      component: expect.objectContaining({
        method: 'type',
        value: newValue,
        suggestion: null,
      }),
    });
    render((
      <AutoComplete
        onChange={onChangeHandler}
        data={data}
        shouldCorrectValue
      />
    ));
    screen.getByRole('textbox').focus();
    userEvent.type(screen.getByRole('textbox'), newValue);
    expect(onChangeHandler).toBeCalledTimes(newValue.length);
    expect(onChangeHandler).lastCalledWith(eventMatcher);
    screen.getByRole('textbox').blur();
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
  test('value adjustment to data value', () => {
    const onChangeHandler = jest.fn();
    const data = ['value0', 'value1'];
    const newValue = data[0];
    const eventMatcher = expect.objectContaining({
      target: expect.objectContaining({
        value: newValue,
      }),
      component: expect.objectContaining({
        method: 'type',
        value: newValue,
        suggestion: newValue,
      }),
    });
    render((
      <AutoComplete
        onChange={onChangeHandler}
        data={data}
        shouldCorrectValue
      />
    ));
    screen.getByRole('textbox').focus();
    userEvent.type(screen.getByRole('textbox'), newValue);
    expect(onChangeHandler).toBeCalledTimes(newValue.length);
    expect(onChangeHandler).lastCalledWith(eventMatcher);
    screen.getByRole('textbox').blur();
    expect(screen.getByRole('textbox')).toHaveValue(newValue);
  });
  test('data filtration', () => {
    const onChangeHandler = jest.fn();
    const value = 'value';
    const data = ['option', value, 'variant'];
    render((
      <AutoComplete
        onChange={onChangeHandler}
        data={data}
        isOpen
      />
    ));
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    userEvent.type(screen.getByRole('textbox'), 'va');
    expect(onChangeHandler).toBeCalledTimes(2);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    userEvent.type(screen.getByRole('textbox'), 'val');
    expect(onChangeHandler).toBeCalledTimes(5);
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByRole('listitem')).toHaveTextContent(value);
  });
  test('compareObjectsBy', () => {
    const onChangeHandler = jest.fn();
    const newValue = 'value';
    const data = [
      { id: 0, name: 'value0' },
      { id: 1, name: 'value1' },
      { id: 2, name: newValue },
      { id: 3, name: newValue },
    ];
    render((
      <AutoComplete
        onChange={onChangeHandler}
        data={data}
        textField="name"
        compareObjectsBy="name"
      />
    ));
    screen.getByRole('textbox').focus();
    userEvent.type(screen.getByRole('textbox'), newValue);
    expect(onChangeHandler).toBeCalledTimes(newValue.length);
    expect(document.querySelectorAll('.selected')).toHaveLength(2);
  });
});
