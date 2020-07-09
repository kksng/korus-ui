// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Textarea } from './index';

describe('Textarea SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<Textarea />);

    expect(wrapper.find('textarea')).toHaveLength(1);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Textarea HANDLERS', () => {
  it('should trigger onChange', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Textarea onChange={onChange} value="test" />);

    expect(wrapper.find('textarea').props().value).toEqual('test');

    wrapper.find('textarea').props().onChange({ target: { value: 'new test' } });

    expect(onChange).toHaveBeenCalled();

    wrapper.update();

    expect(wrapper.find('textarea').props().value).toEqual('test');
  });

  it('should trigger onEnterPress', () => {
    const onEnterPress = jest.fn();
    const wrapper = mount(<Textarea name="auto" value="text" onEnterPress={onEnterPress} />);

    wrapper.find('textarea').props().onKeyDown({ key: 'Enter', currentTarget: { value: 'text' } });

    expect(onEnterPress).toHaveBeenCalled();
  });

  it('should have correct event format', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Textarea onChange={onChange} name="ARIA" />);
    // грязные хаки для работы с DOM
    wrapper.find('textarea').getDOMNode().addEventListener('change', (ev) => {
      wrapper.find('textarea').props().onChange(ev);
    });

    wrapper.find('textarea').getDOMNode().value = 'new test';

    wrapper.find('textarea').getDOMNode().dispatchEvent(new Event('change'));

    expect(onChange).toHaveBeenCalled();

    wrapper.update();

    const [[event]] = onChange.mock.calls;

    expect(event.component.value).toEqual('new test');

    expect(event.component.name).toEqual('ARIA');
  });
});

describe('Textarea ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = mount(<Textarea _box />);

    expect(wrapper.find('.textarea-wrapper').first().hasClass('box')).toBeTruthy();


    wrapper.setProps({ _active: true, _box: false });

    expect(wrapper.find('.textarea-wrapper').first().hasClass('box')).toBeFalsy();

    expect(wrapper.find('.textarea-wrapper').first().hasClass('active')).toBeTruthy();


    wrapper.setProps({ className: 'testClass' });

    expect(wrapper.find('.textarea-wrapper').first().hasClass('box')).toBeFalsy();

    expect(wrapper.find('.textarea-wrapper').first().hasClass('active')).toBeTruthy();

    expect(wrapper.find('.textarea-wrapper').first().hasClass('testClass')).toBeTruthy();
  });
});

describe('Textarea VALIDATION', () => {
  it('should be invalid if value is empty on onBlur was called', () => {
    const onBlurHandler = jest.fn();
    const wrapper = mount(<Textarea onBlur={onBlurHandler} name="ARIA" invalidMessage="value should not be empty!" isRequired form="requiredForm" />);

    wrapper.find('textarea').props().onBlur({ target: { value: '', name: 'ARIA' } });

    wrapper.update();

    expect(onBlurHandler).toHaveBeenCalled();

    const [[event]] = onBlurHandler.mock.calls;

    expect(event.component.value).toEqual('');

    expect(event.component.name).toEqual('ARIA');

    expect(event.component.isValid).toBeFalsy();

    expect(wrapper.find('textarea').props().isValid).toBeFalsy();

    wrapper.update();

    expect(wrapper.find('textarea').getDOMNode().classList.contains('danger')).toBeTruthy();
  });

  it('should render invalidMessage if component is invalid', () => {
    const onBlurHandler = jest.fn();
    const validator = (value) => value && value.length > 4;
    const wrapper = mount(<Textarea
      onBlur={onBlurHandler}
      value="OUAT"
      isRequired
      form="test"
      name="ARIA"
      invalidMessage="value length must be more than 4!"
      validator={validator}
    />);

    wrapper.find('textarea').getDOMNode().dispatchEvent(new Event('blur'));

    wrapper.find('textarea').props().onBlur({ target: { value: 'OUAT', name: 'ARIA' } });

    const [[event]] = onBlurHandler.mock.calls;

    expect(event.component.value).toEqual('OUAT');

    expect(event.component.name).toEqual('ARIA');

    expect(event.component.isValid).toBeFalsy();

    wrapper.update();

    expect(wrapper.find('InvalidMessage').first().props().messages).toEqual(['value length must be more than 4!']);

    expect(wrapper.find('textarea').getDOMNode().classList.contains('danger')).toBeTruthy();
  });
});
