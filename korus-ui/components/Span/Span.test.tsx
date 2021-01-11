import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Span } from './index';

describe('Span SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<Span>{'Hi, I\'m a text!'}</Span>);

    expect(wrapper.find('span')).toHaveLength(1);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Span HANDLERS', () => {
  it('should trigger onClick', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Span onClick={onClick}>example</Span>);

    wrapper.find('span').props().onClick?.({} as React.MouseEvent);

    expect(onClick).toHaveBeenCalled();
  });
});

describe('Span ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = mount(<Span _box>default</Span>);

    expect(wrapper.find('span').hasClass('box')).toBeTruthy();


    wrapper.setProps({ _active: true, _box: false });

    expect(wrapper.find('span').hasClass('box')).toBeFalsy();

    expect(wrapper.find('span').hasClass('active')).toBeTruthy();


    wrapper.setProps({ className: 'testClass' });

    expect(wrapper.find('span').hasClass('box')).toBeFalsy();

    expect(wrapper.find('span').hasClass('active')).toBeTruthy();

    expect(wrapper.find('span').hasClass('testClass')).toBeTruthy();
  });
});
