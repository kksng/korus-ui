// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Tabs, Tab } from './index';

describe('Tabs SNAPSHOTS', () => {
  it('should render', () => {
    const tabs = (
      <Tabs onChange={jest.fn()}>
        <Tab title="Tab1" tabKey={0}>Tab1</Tab>
        <Tab title="Tab2" tabKey={1}>Tab2</Tab>
      </Tabs>
    );
    const wrapper = mount(tabs);

    expect(wrapper.find('li.tabs-item')).toHaveLength(2);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('different component states', () => {
    it('should render activeTabKey', () => {
      const tabs = (
        <Tabs activeTabKey={1} onChange={jest.fn()}>
          <Tab title="Tab1" tabKey={0}>Tab1</Tab>
          <Tab title="Tab2" tabKey={1}>Tab2</Tab>
        </Tabs>
      );
      const wrapper = mount(tabs);

      expect(wrapper.find('div.tabs-content').text()).toEqual('Tab2');
    });
  });

  it('should change tabs', () => {
    // грязные хаки для симуляции стейта
    let wrapper;
    const onChange = jest.fn((ev) => wrapper.setProps({ selected: ev.component.value }));
    const tabs = (
      <Tabs onChange={onChange}>
        <Tab title="Tab1" tabKey={0}>Tab1</Tab>
        <Tab title="Tab2" tabKey={1}>Tab2</Tab>
      </Tabs>
    );
    wrapper = mount(tabs);

    expect(wrapper.find('.tabs-content').last().text()).toEqual('Tab1');

    act(() => {
      wrapper.find('li.tabs-item').last().props().onClick({ target: { } });

      wrapper.update();
    });

    expect(wrapper.find('.tabs-content').last().text()).toEqual('Tab2');
  });
});

describe('Tabs HANDLERS', () => {
  it('should trigger onChange', () => {
    const onChange = jest.fn();
    const tabs = (
      <Tabs onChange={onChange}>
        <Tab title="Tab1" tabKey={0}>Tab1</Tab>
        <Tab title="Tab1" tabKey={1}>Tab2</Tab>
      </Tabs>
    );
    const wrapper = mount(tabs);

    expect(wrapper.find('.tabs-content').last()).toHaveLength(1);

    act(() => wrapper.find('li').first().props().onClick());

    expect(onChange).toHaveBeenCalledWith({ component: { value: 0 } });
  });
});

describe('Tabs ATTRIBUTES', () => {
  it('should accept title', () => {
    const tabs = (
      <Tabs onChange={jest.fn()}>
        <Tab title="First" tabKey={0}>Tab1</Tab>
        <Tab title="Last" tabKey={1}>Tab2</Tab>
      </Tabs>
    );
    const wrapper = mount(tabs);

    expect(wrapper.find('.tabs-item').first().text()).toEqual('First');

    expect(wrapper.find('.tabs-item').last().text()).toEqual('Last');
  });
});
