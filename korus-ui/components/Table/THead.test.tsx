import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { THead } from './THead';

describe('THead component tests:', () => {
  it('should be defined', () => {
    expect(THead).toBeDefined();
  });
  it('should render', () => {
    const wrapper = shallow(<THead>test</THead>);

    expect(wrapper.text()).toEqual('test');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
