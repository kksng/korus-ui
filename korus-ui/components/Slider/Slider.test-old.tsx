// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Slider } from './index';

describe('Slider SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<Slider />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render disabled state', () => {
    const wrapper = mount(<Slider value={50} isDisabled />);

    expect(wrapper.find('ReactSlider').props().disabled).toBeTruthy();

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Slider HANDLERS', () => {
  it('should trigger onChange handler', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Slider onChange={onChange} />);

    wrapper.find('ReactSlider').props().onAfterChange(50);

    expect(onChange).toHaveBeenCalled();
  });

  it('should have correct event format', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Slider name="sliiiiizeren" onChange={onChange} />);

    wrapper.find('ReactSlider').props().onAfterChange(50);

    expect(onChange).toHaveBeenCalled();

    const [[event]] = onChange.mock.calls;

    expect(event.component.value).toEqual(50);

    expect(event.component.name).toEqual('sliiiiizeren');
  });
});
