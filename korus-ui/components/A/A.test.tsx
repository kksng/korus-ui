// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import { A } from './index';

describe('A SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = shallow(<A />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('A HANDLERS', () => {
  it('should trigger onClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<A onClick={onClick}>example</A>);
    const preventDefault = jest.fn();

    wrapper.find('a').props().onClick({ preventDefault });

    expect(onClick).toHaveBeenCalled();

    expect(preventDefault).toHaveBeenCalled();

    wrapper.setProps({ href: 'http;//google.com' });

    wrapper.find('a').props().onClick({ preventDefault });

    expect(onClick).toHaveBeenCalledTimes(2);
    // do not need preventDefault if href is passed
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });
});

describe('A ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = shallow(<A _box>default</A>);

    expect(wrapper.find('a').hasClass('box')).toBeTruthy();


    wrapper.setProps({ _active: true, _box: false });

    expect(wrapper.find('a').hasClass('box')).toBeFalsy();

    expect(wrapper.find('a').hasClass('active')).toBeTruthy();


    wrapper.setProps({ className: 'testClass' });

    expect(wrapper.find('a').hasClass('box')).toBeFalsy();

    expect(wrapper.find('a').hasClass('active')).toBeTruthy();

    expect(wrapper.find('a').hasClass('testClass')).toBeTruthy();
  });

  it('should have children prop', () => {
    const wrapper = mount(<A><div className="lvl1"><span className="lvl2">TEXT</span></div></A>);

    expect(wrapper.props().children).toBeDefined();

    expect(wrapper.props().children.type).toEqual('div');

    expect(wrapper.props().children.props.className).toEqual('lvl1');

    expect(wrapper.props().children.props.children.type).toEqual('span');

    expect(wrapper.props().children.props.children.props.className).toEqual('lvl2');

    expect(wrapper.props().children.props.children.props.children).toEqual('TEXT');
  });
});
