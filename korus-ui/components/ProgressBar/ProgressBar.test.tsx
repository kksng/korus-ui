// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { ProgressBar } from './index';

describe('ProgressBar SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<ProgressBar value={40} />);

    expect(wrapper.find('.progressbar-fill').first().text()).toEqual('40%');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render value in controllable mode', () => {
    const wrapper = mount(<ProgressBar value={40} />);

    expect(wrapper.find('.progressbar-fill').first().text()).toEqual('40%');

    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({ value: 50 });

    expect(wrapper.find('.progressbar-fill').first().text()).toEqual('50%');

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
