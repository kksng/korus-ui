import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import { Ul } from './index';
import { Li } from '../Li';
import { Ol } from '../Ol';

describe('Ul SNAPSHOTS', () => {
  it('should render', () => {
    const List = (
      <Ul>
        <Li>item1</Li>
        <Li>item2</Li>
        <Li>item3</Li>
      </Ul>
    );
    const wrapper = mount(List);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('should render different component states', () => {
    it('should render decimal', () => {
      const List = (
        <Ol decimal>
          <Li>item1</Li>
          <Li>item2</Li>
          <Li>item3</Li>
        </Ol>
      );
      const wrapper = mount(List);

      expect(wrapper.find('ol')).toHaveLength(1);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render disc', () => {
      const List = (
        <Ul disc>
          <Li>item1</Li>
          <Li>item2</Li>
          <Li>item3</Li>
        </Ul>
      );
      const wrapper = mount(List);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render circle', () => {
      const List = (
        <Ul circle>
          <Li>item1</Li>
          <Li>item2</Li>
          <Li>item3</Li>
        </Ul>
      );
      const wrapper = mount(List);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render lowerAlpha', () => {
      const List = (
        <Ul lowerAlpha>
          <Li>item1</Li>
          <Li>item2</Li>
          <Li>item3</Li>
        </Ul>
      );
      const wrapper = mount(List);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render tree', () => {
      const List = (
        <Ul tree>
          <Li>item1</Li>
          <Li>item2</Li>
          <Li>item3</Li>
        </Ul>
      );
      const wrapper = mount(List);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render subUl', () => {
      const List = (
        <Ul tree>
          <Li>
            <Ul subUl decimal>
              <Li>subitem1</Li>
              <Li>subitem2</Li>
            </Ul>
          </Li>
          <Li>item2</Li>
          <Li>item3</Li>
        </Ul>
      );
      const wrapper = mount(List);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('Ul HANDLERS', () => {
  it('should trigger onClick', () => {
    const onClick = jest.fn();
    const List = (
      <Ul tree>
        <Li onClick={onClick}>item1</Li>
        <Li>item2</Li>
        <Li>item3</Li>
      </Ul>
    );
    const wrapper = mount(List);

    wrapper.find('li').first().props().onClick?.({} as React.MouseEvent);

    expect(onClick).toHaveBeenCalled();
  });
});

describe('Ul ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = shallow(<Ul _box><Li>text1</Li></Ul>);

    expect(wrapper.find('ul').hasClass('box')).toBeTruthy();


    wrapper.setProps({ _active: true, _box: false });

    expect(wrapper.find('ul').hasClass('box')).toBeFalsy();

    expect(wrapper.find('ul').hasClass('active')).toBeTruthy();


    wrapper.setProps({ className: 'testClass' });

    expect(wrapper.find('ul').hasClass('box')).toBeFalsy();

    expect(wrapper.find('ul').hasClass('active')).toBeTruthy();

    expect(wrapper.find('ul').hasClass('testClass')).toBeTruthy();
  });

  it('should have children prop', () => {
    const List = (
      <Ul>
        <Li>item1</Li>
        <Li>item2</Li>
        <Li>item3</Li>
      </Ul>
    );

    const wrapper = shallow(List);

    const { children } = wrapper.props();

    expect(children).toBeDefined();

    const [firstChild] = children;

    expect(firstChild.type).toEqual(Li);

    expect(firstChild.props.children).toEqual('item1');
  });
});
