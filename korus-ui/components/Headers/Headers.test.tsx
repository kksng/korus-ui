// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { H6 } from './H6';
import { H5 } from './H5';
import { H4 } from './H4';
import { H3 } from './H3';
import { H2 } from './H2';
import { H1 } from './H1';

describe('Headers SNAPSHOTS', () => {
  it('should render H1', () => {
    const wrapper = shallow(<H1>HEADER</H1>);

    expect(wrapper.text()).toEqual('HEADER');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render H2', () => {
    const wrapper = shallow(<H2>HEADER</H2>);

    expect(wrapper.text()).toEqual('HEADER');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render H3', () => {
    const wrapper = shallow(<H3>HEADER</H3>);

    expect(wrapper.text()).toEqual('HEADER');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render H4', () => {
    const wrapper = shallow(<H4>HEADER</H4>);

    expect(wrapper.text()).toEqual('HEADER');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render H5', () => {
    const wrapper = shallow(<H5>HEADER</H5>);

    expect(wrapper.text()).toEqual('HEADER');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render H6', () => {
    const wrapper = shallow(<H6>HEADER</H6>);

    expect(wrapper.text()).toEqual('HEADER');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render Header', () => {
    const wrapper = shallow(<Header>HEADER</Header>);

    expect(wrapper.text()).toEqual('HEADER');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render Header with classnames .header and .box', () => {
    const wrapper = shallow(<Header _box _header>HEADER</Header>);

    expect(wrapper.text()).toEqual('HEADER');

    expect(wrapper.find('header').hasClass('box')).toBeTruthy();

    expect(wrapper.find('header').hasClass('header')).toBeTruthy();

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
