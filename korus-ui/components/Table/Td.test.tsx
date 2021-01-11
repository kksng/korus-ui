import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Td } from './Td';

describe('Td component tests:', () => {
  it('should be defined', () => {
    expect(Td).toBeDefined();
  });
  it('should render', () => {
    const wrapper = shallow(<Td>test</Td>);

    expect(wrapper.text()).toEqual('test');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
