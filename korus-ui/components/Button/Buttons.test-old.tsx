// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Button } from './index';
import { Input } from '../Input';

describe('Button SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<Button>test</Button>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render disabled state', () => {
    const wrapper = mount(<Button isDisabled>test</Button>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render isLoading state', () => {
    const wrapper = mount(<Button isLoading>test</Button>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with validation', () => {
    const wrapper = mount(
      <div>
        <Input form="test" name="in" isRequired />
        <Button onClick={jest.fn()} form="test">test</Button>
      </div>,
    );

    wrapper.find('button').props().onClick({ preventDefault() { } });


    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.unmount();
  });
});

describe('Button HANDLERS', () => {
  it('should trigger onClick', () => {
    const onClick = jest.fn();
    const mockObj = { preventDefault: () => {} };
    const wrapper = mount(<Button href="http://google.com" onClick={onClick}>example</Button>);

    wrapper.find('button').props().onClick(mockObj);

    expect(onClick).toHaveBeenCalledWith(mockObj);
  });
});

describe('Button ATTRIBUTES', () => {
  it('should have className', () => {
    const wrapper = mount(<Button>default</Button>);

    expect(wrapper.find('button').hasClass('button-wrapper')).toBeTruthy();


    wrapper.setProps({ _success: true });

    wrapper.update();

    expect(wrapper.find('button').hasClass('success')).toBeTruthy();


    wrapper.setProps({ download: true });

    wrapper.update();

    expect(wrapper.prop('download')).toBeTruthy();
  });

  it('should have isDisabled prop', () => {
    const wrapper = mount(<Button onClick={jest.fn()} isDisabled>test</Button>);

    wrapper.find('button').props().onClick({ preventDefault() { } });

    expect(wrapper.find('Button').props().onClick).not.toHaveBeenCalled();

    expect(wrapper.find('Button').props().isDisabled).toBeTruthy();
  });

  it('should have isLoading prop', () => {
    const wrapper = mount(<Button onClick={jest.fn()} isLoading>test</Button>);

    wrapper.find('button').props().onClick({ preventDefault() { } });

    expect(wrapper.find('Button').props().onClick).not.toHaveBeenCalled();

    expect(wrapper.find('Button').props().isLoading).toBeTruthy();
  });

  it('should have children prop', () => {
    const wrapper = mount(<Button><div className="lvl1"><span className="lvl2">TEXT</span></div></Button>);

    expect(wrapper.props().children).toBeDefined();

    expect(wrapper.props().children.type).toEqual('div');

    expect(wrapper.props().children.props.className).toEqual('lvl1');

    expect(wrapper.props().children.props.children.type).toEqual('span');

    expect(wrapper.props().children.props.children.props.className).toEqual('lvl2');

    expect(wrapper.props().children.props.children.props.children).toEqual('TEXT');
  });
});

describe('Button VALIDATION', () => {
  it('should not call onClick if form is invalid', () => {
    const onClick = jest.fn();
    const form = (
      <div>
        <Input form="test" isRequired name="input" />
        <Button onClick={onClick} form="test">test</Button>
      </div>
    );
    const wrapper = mount(form);

    wrapper.find('button').props().onClick({ preventDefault: () => {} });

    expect(onClick).not.toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should call onClick if form is valid', () => {
    const onClick = jest.fn();
    const form = (
      <span>
        <Input form="test" isRequired name="input" value="test" />
        <Button onClick={onClick} form="test">test</Button>
      </span>
    );
    const wrapper = mount(form);

    wrapper.find('button').props().onClick({ preventDefault: () => {} });

    expect(onClick).toHaveBeenCalled();

    wrapper.unmount();
  });
});
