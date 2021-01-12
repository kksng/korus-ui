import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Svg } from './index';

describe('Svg SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<Svg notifications ok />);

    expect(wrapper.find('svg')).toHaveLength(1);
    // должен появляться стандартный класс icon-{namespace}
    expect(wrapper.find('.icon-notifications')).toHaveLength(1);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render svg without icon className', () => {
    const wrapper = mount(<Svg notifications ok noIconClass />);

    expect(wrapper.find('svg')).toHaveLength(1);

    expect(wrapper.find('.icon-notifications')).toHaveLength(0);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Svg HANDLERS', () => {
  it('should trigger onClick', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Svg onClick={onClick} notifications ok />);

    wrapper.find('svg').props().onClick?.({} as React.MouseEvent);

    expect(onClick).toHaveBeenCalled();
  });
});


describe('Svg ATTRIBUTES', () => {
  describe('className', () => {
    const wrapper = mount(<Svg _box />);

    it('should have className', () => {
      expect(wrapper.find('svg').hasClass('box')).toBeTruthy();
    });

    it('should change classes through props', () => {
      wrapper.setProps({ _active: true, _box: false });

      expect(wrapper.find('svg').hasClass('box')).toBeFalsy();

      expect(wrapper.find('svg').hasClass('active')).toBeTruthy();
    });

    it('should not allow className to change prop-classes', () => {
      wrapper.setProps({ className: 'testClass' });

      expect(wrapper.find('svg').hasClass('box')).toBeFalsy();

      expect(wrapper.find('svg').hasClass('active')).toBeTruthy();

      expect(wrapper.find('svg').hasClass('testClass')).toBeTruthy();
    });
  });
});
