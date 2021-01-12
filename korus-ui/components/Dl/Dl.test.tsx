// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Dl, Dd, Dt } from './index';

describe('TwoColumns SNAPSHOTS', () => {
  it('should render', () => {
    const list = (
      <Dl _w-25>
        <Dt>Term</Dt>
        <Dd>Definition</Dd>
      </Dl>
    );
    const wrapper = mount(list);
    // has default width
    expect(wrapper.find('dl').hasClass('w-25')).toBeTruthy();

    expect(wrapper.find('dt').text()).toEqual('Term');

    expect(wrapper.find('dd').text()).toEqual('Definition');

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('TwoColumns ATTRIBUTES', () => {
  it('should render given firstColumn width', () => {
    const list = (
      <Dl _w-55>
        <Dt>Term</Dt>
        <Dd>Definition</Dd>
      </Dl>
    );
    const wrapper = mount(list);

    expect(wrapper.find('dl').hasClass('w-55')).toBeTruthy();
  });

  it('should have className, change classes through props', () => {
    const list = (
      <Dl _box>
        <Dt>Term</Dt>
        <Dd>Definition</Dd>
      </Dl>
    );

    const wrapper = mount(list);

    expect(wrapper.find('dl').hasClass('box')).toBeTruthy();


    wrapper.setProps({ _active: true, _box: false });

    expect(wrapper.find('dl').hasClass('box')).toBeFalsy();

    expect(wrapper.find('dl').hasClass('active')).toBeTruthy();
  });

  it('should have children prop', () => {
    const list = (
      <Dl box>
        <Dt>Term</Dt>
        <Dd>Definition</Dd>
      </Dl>
    );
    const wrapper = mount(list);

    expect(wrapper.props().children).toBeDefined();

    const [dt, dd] = wrapper.props().children;

    expect(dt.type).toEqual(Dt);

    expect(dt.props.children).toEqual('Term');

    expect(dd.type).toEqual(Dd);

    expect(dd.props.children).toEqual('Definition');
  });
});
