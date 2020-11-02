// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Ul } from '~/components/Ul';
import { Li } from '~/components/Li';
import { RadioGroup, RadioButton } from './index';

describe('Radio SNAPSHOTS', () => {
  it('should render', () => {
    const radio = (
      <RadioGroup value="radio-1" onChange={jest.fn()} name="radio-group">
        <RadioButton value="radio-1" id="radio-1">1</RadioButton>
        <RadioButton value="radio-2" id="radio-2">2</RadioButton>
        <RadioButton value="radio-3" id="radio-3">3</RadioButton>
      </RadioGroup>
    );
    const wrapper = mount(radio);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render controllable mode', () => {
    const radio = (
      <RadioGroup value="radio-1" onChange={jest.fn()} name="radio-group">
        <RadioButton value="radio-1" id="radio-1">1</RadioButton>
        <RadioButton value="radio-2" id="radio-2">2</RadioButton>
        <RadioButton value="radio-3" id="radio-3">3</RadioButton>
      </RadioGroup>
    );
    const wrapper = mount(radio);

    expect(wrapper.find('input').first().props().checked).toBeTruthy();

    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({ value: 'radio-3' });

    expect(wrapper.find('input').first().props().checked).toBeFalsy();

    expect(wrapper.find('input').last().props().checked).toBeTruthy();

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should default to value of the first radio', () => {
    const radio = (
      <RadioGroup name="radio-group">
        <RadioButton value="radio-1" id="radio-1">1</RadioButton>
        <RadioButton value="radio-2" id="radio-2">2</RadioButton>
        <RadioButton value="radio-3" id="radio-3">3</RadioButton>
      </RadioGroup>
    );
    const wrapper = mount(radio);

    expect(wrapper.find('input').first().props().checked).toBeTruthy();
  });

  describe('different component states', () => {
    it('should render checked', () => {
      const radio = (
        <RadioGroup value="radio-1" onChange={jest.fn()} name="radio-group">
          <RadioButton onChange={jest.fn()} id="radio-1" value="radio-1">1</RadioButton>
        </RadioGroup>
      );
      const wrapper = mount(radio);

      expect(wrapper.find('input').first().props().checked).toBeTruthy();

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render disabled', () => {
      const radio = (
        <RadioGroup value="radio-1" onChange={jest.fn()} name="radio-group">
          <RadioButton value="radio-1" id="radio-1" isDisabled>1</RadioButton>
          <RadioButton value="radio-2" id="radio-2">2</RadioButton>
          <RadioButton value="radio-3" id="radio-3">3</RadioButton>
        </RadioGroup>
      );
      const wrapper = mount(radio);

      expect(wrapper.find('input').first().props().disabled).toBeTruthy();

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('Radio HANDLERS', () => {
  it('should trigger onChange', () => {
    const onChange = jest.fn();
    const radio = (
      <RadioGroup value="radio-1" onChange={onChange} name="radio-group">
        <RadioButton value="radio-1" id="radio-1">1</RadioButton>
        <RadioButton value="radio-2" id="radio-2">2</RadioButton>
        <RadioButton value="radio-3" id="radio-3">3</RadioButton>
      </RadioGroup>
    );
    const wrapper = mount(radio);

    wrapper.find('input').last().props().onChange({ component: { value: 'radio-3' } });

    expect(onChange).toHaveBeenCalled();
  });

  it('should have correct event format', () => {
    const onChange = jest.fn();
    const radio = (
      <RadioGroup value="radio-1" onChange={onChange} name="radio-group">
        <RadioButton value="radio-1" id="radio-1">1</RadioButton>
        <RadioButton value="radio-2" id="radio-2">2</RadioButton>
        <RadioButton value="radio-3" id="radio-3">3</RadioButton>
      </RadioGroup>
    );
    const wrapper = mount(radio);

    wrapper.find('input').last().getDOMNode().addEventListener('change', (ev) => wrapper.props().onChange(ev));

    wrapper.find('input').last().props().onChange({ value: 'radio-3', name: 'radio-group' });

    expect(onChange).toHaveBeenCalled();

    const [[event]] = onChange.mock.calls;

    expect(event.component.value).toEqual('radio-3');

    expect(event.component.name).toEqual('radio-group');
  });
});

describe('Radio ATTRIBUTES', () => {
  it('should be wrapped with given wrapper', () => {
    const radio = (
      <RadioGroup wrapperRender={({ elementProps }) => <Ul {...elementProps} />} value="radio-1" onChange={jest.fn()} name="radio-group">
        <RadioButton wrapperRender={() => <Li />} value="radio-1" id="radio-1">1</RadioButton>
        <RadioButton wrapperRender={() => <Li />} value="radio-2" id="radio-2">2</RadioButton>
        <RadioButton wrapperRender={() => <Li />} value="radio-3" id="radio-3">3</RadioButton>
      </RadioGroup>
    );
    const wrapper = mount(radio);

    expect(wrapper.find('ul')).toHaveLength(1);

    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('should give label input id', () => {
    const radio = (
      <RadioGroup wrapperRender={({ elementProps }) => <Ul {...elementProps} />} value="radio-1" onChange={jest.fn()} name="radio-group">
        <RadioButton wrapperRender={({ elementProps }) => <Li {...elementProps} />} id="radio-1" value="radio-1">1</RadioButton>
        <RadioButton wrapperRender={({ elementProps }) => <Li {...elementProps} />} id="radio-2" value="radio-2">2</RadioButton>
        <RadioButton wrapperRender={({ elementProps }) => <Li {...elementProps} />} id="radio-3" value="radio-3">3</RadioButton>
      </RadioGroup>
    );
    const wrapper = mount(radio);

    expect(wrapper.find('label').first().props().htmlFor).toEqual('radio-1');

    expect(wrapper.find('label').last().props().htmlFor).toEqual('radio-3');
  });

  it('should accept className', () => {
    const radio = (
      <RadioGroup _box wrapperRender={({ elementProps }) => <Ul {...elementProps} />} value="radio-1" onChange={jest.fn()} name="radio-group">
        <RadioButton _active wrapperRender={({ elementProps }) => <Li {...elementProps} />} value="radio-1" id="radio-1">1</RadioButton>
        <RadioButton wrapperRender={({ elementProps }) => <Li {...elementProps} />} value="radio-2" id="radio-2">2</RadioButton>
        <RadioButton className="custom" wrapperRender={({ elementProps }) => <Li {...elementProps} />} value="radio-3" id="radio-3">3</RadioButton>
      </RadioGroup>
    );
    const wrapper = mount(radio);

    expect(wrapper.find('Ul').hasClass('box')).toBeTruthy();

    expect(wrapper.find('label').first().hasClass('active')).toBeTruthy();

    expect(wrapper.find('label').last().hasClass('custom')).toBeTruthy();
  });
});
