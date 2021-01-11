import React from 'react';
import { act } from 'react-dom/test-utils';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Switcher } from './index';

describe('Switcher SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<Switcher>Switch me!</Switcher>);

    expect(wrapper.find('div.switcher-wrapper')).toHaveLength(1);
    expect(wrapper.find('div.switcher-handle')).toHaveLength(1);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render controllable mode', () => {
    const wrapper = mount(<Switcher value>Switch me!</Switcher>);

    expect(wrapper.find('div.switcher-wrapper').props().className).toEqual('switcher-wrapper active');

    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({ value: false });

    expect(wrapper.find('div.switcher-wrapper').props().className).toEqual('switcher-wrapper');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render disabled state', () => {
    const wrapper = mount(<Switcher isDisabled>Switch me!</Switcher>);

    expect(wrapper.find('div.switcher-wrapper').props().className).toEqual('switcher-wrapper disabled');

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Switcher HANDLERS', () => {
  it('should trigger onClick', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Switcher onClick={onClick}>example</Switcher>);

    expect(wrapper.find('div.switcher-wrapper').hasClass('active')).toBeFalsy();

    act(() => {
      // @ts-ignore
      wrapper.find('div.switcher-wrapper').props().onClick();
    });

    expect(onClick).toHaveBeenCalled();

    wrapper.update();

    expect(wrapper.find('div.switcher-wrapper').hasClass('active')).toBeTruthy();
  });

  it('should trigger onChange', () => {
    const onClick = jest.fn();
    const onChange = jest.fn();
    const wrapper = mount(<Switcher name="Switchy" onChange={onChange} onClick={onClick}>example</Switcher>);

    expect(wrapper.find('div.switcher-wrapper').hasClass('active')).toBeFalsy();

    act(() => {
      // @ts-ignore
      wrapper.find('div.switcher-wrapper').props().onClick({ component: { } });
    });

    expect(onClick).toHaveBeenCalled();

    expect(onChange).toHaveBeenCalled();

    wrapper.update();

    expect(wrapper.find('div.switcher-wrapper').hasClass('active')).toBeTruthy();
  });

  it('should have correct event format', () => {
    const onClick = jest.fn();
    const onChange = jest.fn();

    const wrapper = mount(<Switcher name="Switchy" onChange={onChange} value={false} onClick={onClick}>example</Switcher>);

    act(() => {
      // @ts-ignore
      wrapper.find('div.switcher-wrapper').props().onClick({ component: { } });
    });

    expect(onClick).toHaveBeenCalled();

    expect(onChange).toHaveBeenCalled();

    wrapper.update();

    const [[event]] = onChange.mock.calls;

    expect(event.component.value).toBeTruthy();

    expect(event.component.name).toEqual('Switchy');
  });
});

describe('Switcher ATTRIBUTES', () => {
  it('should have children in label', () => {
    const wrapper = mount(<Switcher><div className="lvl1"><span className="lvl2">TEXT</span></div></Switcher>);

    const label = wrapper.find('span.switcher-label');

    const div = label.children('div');

    const span = div.find('span');

    expect(label.props().children).toBeDefined();

    expect(div.type()).toEqual('div');

    expect(div.props().className).toEqual('lvl1');

    expect(span.type()).toEqual('span');

    expect(span.props().className).toEqual('lvl2');

    expect(span.text()).toEqual('TEXT');
  });
});
