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

  it.skip('should render controllable mode', () => {
    const wrapper = mount(<Slider value={50} hasTooltip />);

    expect(wrapper.find('.tooltip-inner').text()).toEqual('50');

    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({ value: 65 });

    expect(wrapper.find('.tooltip-inner').text()).toEqual('65');

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

describe.skip('Slider ATTRIBUTES', () => {
  it('should accept defaultValue', () => {
    const wrapper = mount(<Slider defaultValue={20} hasTooltip />);

    expect(wrapper.find('.tooltip-inner').text()).toEqual('20');
  });

  it.skip('should have units', () => {
    const wrapper = mount(<Slider
      labelType="minmax"
      unitsRender={() => 'pounds'}
      value={4}
      hasTooltip
    />);

    expect(wrapper.find('.tooltip-inner').text()).toEqual('4');

    expect(wrapper.find('.slider-label').first().text()).toEqual('0 pounds');

    expect(wrapper.find('.slider-label').last().text()).toEqual('100 pounds');
  });

  it('should have max limit', () => {
    const wrapper = mount(<Slider value={4} labelType="minmax" />);

    expect(wrapper.find('.slider-label').last().text()).toEqual('100 ');

    wrapper.setProps({ max: 10 });

    expect(wrapper.find('.slider-label').last().text()).toEqual('10 ');

    expect(wrapper.find('ReactSlider').props().max).toEqual(10);
  });

  it('should have min limit', () => {
    const wrapper = mount(<Slider value={4} labelType="minmax" />);

    expect(wrapper.find('.slider-label').first().text()).toEqual('0 ');

    wrapper.setProps({ min: 10 });

    expect(wrapper.find('.slider-label').first().text()).toEqual('10 ');

    expect(wrapper.find('ReactSlider').props().min).toEqual(10);
  });

  it('should accept minDistance', () => {
    const wrapper = mount(<Slider value={[4, 15]} minRange={5} />);

    expect(wrapper.find('ReactSlider').props().minDistance).toEqual(5);
  });

  it('should accept step', () => {
    const wrapper = mount(<Slider value={10} step={10} />);

    expect(wrapper.find('ReactSlider').props().step).toEqual(10);
  });

  it('should accept width', () => {
    const wrapper = mount(<Slider value={10} _width-50 />);

    expect(wrapper.find('Div.width-50')).toHaveLength(1);

    wrapper.setProps({ '_width-30': true, '_width-50': false });

    expect(wrapper.find('Div.width-30')).toHaveLength(1);
  });
});
