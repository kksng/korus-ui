// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Rating } from './index';

describe('Rating SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<Rating value={5} />);

    expect(wrapper.find('span.rating-item')).toHaveLength(5);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render controllable mode', () => {
    const wrapper = mount(<Rating value={5} />);

    expect(wrapper.find('span.rating-item')).toHaveLength(5);

    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({ value: 2 });

    expect(wrapper.find('span.rating-item.filled')).toHaveLength(2);

    expect(wrapper.find('span.rating-item:not(.filled)')).toHaveLength(3);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Rating HANDLERS', () => {
  it('should trigger onChange', () => {
    const onChange = jest.fn();

    const wrapper = mount(<Rating onChange={onChange} name="Ratty" value={2} />);

    wrapper
      .find('span')
      .first()
      .getDOMNode()
      .addEventListener('click', (ev) => wrapper.find('span').first().props().onClick(ev));

    wrapper.find('span.rating-item:not(.filled)').last().getDOMNode().dispatchEvent(new Event('click', { bubbles: true }));

    expect(onChange).toHaveBeenCalled();
  });
});

describe('Rating ATTRIBUTES', () => {
  it('should have value', () => {
    const wrapper = mount(<Rating value={4} />);

    expect(wrapper.find('span.rating-item.filled')).toHaveLength(4);

    expect(wrapper.find('span.rating-item:not(.filled)')).toHaveLength(1);
  });

  it('should have 5 stars by default', () => {
    const wrapper = mount(<Rating value={4} />);

    expect(wrapper.find('span.rating-item')).toHaveLength(5);
  });

  it('should accept max amount', () => {
    const wrapper = mount(<Rating value={4} max={10} />);

    expect(wrapper.find('span.rating-item')).toHaveLength(10);
  });
});
