import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Th } from './Th';

describe('Th component tests:', () => {
  it('should be defined', () => {
    expect(Th).toBeDefined();
  });
  it('should render', () => {
    const wrapper = shallow(<Th>test</Th>);

    expect(wrapper.text()).toEqual('test');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
