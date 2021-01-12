// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Tags } from './index';
import { Tag } from './Tag';
import { I } from '../I';

describe('Tags SNAPSHOTS', () => {
  it('should render', () => {
    const tags = (
      <Tags>
        <Tag icon={<I className="i-del" />} onClick={jest.fn()}>#selfie</Tag>
        <Tag icon={<I className="i-del" />} onClick={jest.fn()}>#style</Tag>
        <Tag icon={<I className="i-del" />} onClick={jest.fn()}>#awesome</Tag>
      </Tags>
    );
    const wrapper = mount(tags);

    expect(wrapper.find('span.tags-item')).toHaveLength(3);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Tags HANDLERS', () => {
  it('should trigger onClick', () => {
    const onClick = jest.fn();
    const tags = (
      <Tags>
        <Tag onClick={onClick} icon={<I className="i-del" />} onIconClick={jest.fn()}>#selfie</Tag>
        <Tag onClick={onClick} icon={<I className="i-del" />} onIconClick={jest.fn()}>#style</Tag>
        <Tag onClick={onClick} icon={<I className="i-del" />} onIconClick={jest.fn()}>#awesome</Tag>
      </Tags>
    );
    const wrapper = mount(tags);

    wrapper.find('.tags-item').first().props().onClick();

    expect(onClick).toHaveBeenCalled();

    wrapper.find('.tags-item').last().props().onClick();

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('should trigger onIconClick', () => {
    const onIconClick = jest.fn();
    const tags = (
      <Tags>
        <Tag iconRender={(props) => <I {...props} className="i-del" />} onIconClick={onIconClick}>#selfie</Tag>
        <Tag iconRender={(props) => <I {...props} className="i-del" />} onIconClick={onIconClick}>#style</Tag>
        <Tag iconRender={(props) => <I {...props} className="i-del" />} onIconClick={onIconClick}>#awesome</Tag>
      </Tags>
    );
    const wrapper = mount(tags);

    wrapper.find('Icon.tags-icon').first().props().onClick();

    expect(onIconClick).toHaveBeenCalled();

    wrapper.find('Icon.tags-icon').last().props().onClick();

    expect(onIconClick).toHaveBeenCalledTimes(2);
  });
});

describe('Tags ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = mount(<Tags _box>default</Tags>);

    expect(wrapper.find('div').hasClass('box')).toBeTruthy();


    wrapper.setProps({ _active: true, _box: false });

    expect(wrapper.find('div').hasClass('box')).toBeFalsy();

    expect(wrapper.find('div').hasClass('active')).toBeTruthy();


    wrapper.setProps({ className: 'testClass' });

    expect(wrapper.find('div').hasClass('box')).toBeFalsy();

    expect(wrapper.find('div').hasClass('active')).toBeTruthy();

    expect(wrapper.find('div').hasClass('testClass')).toBeTruthy();
  });
});
