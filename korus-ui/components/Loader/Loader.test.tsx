import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import { Loader } from './index';
import { Div } from '../Div';

describe('Loader SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<Loader />);

    expect(wrapper.find('div.loader-wrapper')).toHaveLength(1);

    expect(wrapper.find('div.loader-container')).toHaveLength(1);

    expect(wrapper.find('span.loader-element')).toHaveLength(1);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render loader in controllable mode', () => {
    const wrapper = mount(<Loader />);

    expect(wrapper.find('div.loader-wrapper')).toHaveLength(1);

    expect(wrapper.find('div.loader-container')).toHaveLength(1);

    expect(wrapper.find('span.loader-element')).toHaveLength(1);

    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({ isLoading: false });

    expect(wrapper.find('div.loader-container')).toHaveLength(0);

    expect(wrapper.find('span.loader-element')).toHaveLength(0);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('should render different component states', () => {
    it('should render global loader', () => {
      const wrapper = mount(<Loader isGlobal />);

      expect(wrapper.find('div.loader-wrapper.fullscreen')).toHaveLength(1);

      expect(wrapper.find('span.loader-element')).toHaveLength(1);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render spinner loader', () => {
      const wrapper = mount(<Loader iconRender={(props) => <Div {...props} _loader-spinner />} />);

      expect(wrapper.find('div.loader-spinner')).toHaveLength(1);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('Loader ATTRIBUTES', () => {
  it('should have children prop', () => {
    const wrapper = shallow(<Loader><div className="lvl1"><span className="lvl2">TEXT</span></div></Loader>);

    expect(wrapper.props().children).toBeDefined();

    const [firstChild, secondChild] = wrapper.props().children;

    expect(firstChild.type).toEqual('div');

    expect(firstChild.props.className).toEqual('loader-container');

    const loader = firstChild.props.children;

    expect(loader.type.displayName).toEqual('Icon');

    expect(loader.props.className).toEqual('loader-element');

    expect(secondChild.type).toEqual('div');

    expect(secondChild.props.className).toEqual('lvl1');

    const spanChild = secondChild.props.children;

    expect(spanChild.type).toEqual('span');

    expect(spanChild.props.className).toEqual('lvl2');

    expect(spanChild.props.children).toEqual('TEXT');
  });

  describe('className', () => {
    const wrapper = shallow(<Loader _box />);

    it('should have className', () => {
      expect(wrapper.find('Div.loader-wrapper').hasClass('box')).toBeTruthy();
    });

    it('should change classes through props', () => {
      wrapper.setProps({ _active: true, _box: false });

      expect(wrapper.find('Div.loader-wrapper').hasClass('box')).toBeFalsy();

      expect(wrapper.find('Div.loader-wrapper').hasClass('active')).toBeTruthy();
    });

    it('should not change prop-classes if className is passed', () => {
      wrapper.setProps({ className: 'testClass' });

      expect(wrapper.find('Div.loader-wrapper').hasClass('box')).toBeFalsy();

      expect(wrapper.find('Div.loader-wrapper').hasClass('active')).toBeTruthy();

      expect(wrapper.find('Div.loader-wrapper').hasClass('testClass')).toBeTruthy();
    });
  });
});
