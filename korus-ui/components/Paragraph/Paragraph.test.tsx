// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import { P } from './index';

describe('Paragraph SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = shallow(<P>Text</P>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Paragraph HANDLERS', () => {
  it('should trigger onClick', () => {
    const onClick = jest.fn();
    const wrapper = mount(<P onClick={onClick}>example</P>);

    wrapper.find('p').props().onClick();

    expect(onClick).toHaveBeenCalled();
  });
});

describe('Paragraph ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = mount(<P _box>default</P>);

    expect(wrapper.find('p').hasClass('box')).toBeTruthy();


    wrapper.setProps({ _active: true, _box: false });

    expect(wrapper.find('p').hasClass('box')).toBeFalsy();

    expect(wrapper.find('p').hasClass('active')).toBeTruthy();


    wrapper.setProps({ className: 'testClass' });

    expect(wrapper.find('p').hasClass('box')).toBeFalsy();

    expect(wrapper.find('p').hasClass('active')).toBeTruthy();

    expect(wrapper.find('p').hasClass('testClass')).toBeTruthy();
  });

  it('should have children prop', () => {
    const wrapper = shallow(<P><div className="lvl1"><span className="lvl2">TEXT</span></div></P>);

    expect(wrapper.props().children).toBeDefined();

    const div = wrapper.props().children;

    expect(div.type).toEqual('div');

    expect(div.props.className).toEqual('lvl1');

    const span = div.props.children;

    expect(span.type).toEqual('span');

    expect(span.props.className).toEqual('lvl2');

    expect(span.props.children).toEqual('TEXT');
  });
});
