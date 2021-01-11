// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import { Tag, Tags } from './index';

describe('Tag components test:', () => {
  it('should be defined', () => {
    expect(Tag).toBeDefined();
  });
  it('should render', () => {
    const wrapper = mount(
      <Tags>
        <Tag>test</Tag>
      </Tags>,
    );

    expect(wrapper.text()).toEqual('test');

    expect(wrapper.find('Tag span').first().hasClass('tags-item')).toBeTruthy();

    expect(wrapper.find('i.sbicon-times.txt-gray')).toBeTruthy();

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onClick callback', () => {
    const handleClick = jest.fn();
    const wrapper = mount(
      <Tags>
        <Tag onClick={handleClick}>test</Tag>
      </Tags>,
    );

    wrapper.find('Tag').prop('onClick')();

    expect(handleClick).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });
});
