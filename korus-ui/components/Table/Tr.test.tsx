import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Tr } from './Tr';

describe('Tr component tests:', () => {
  it('should be defined', () => {
    expect(Tr).toBeDefined();
  });
  it('should render', () => {
    const wrapper = shallow(<Tr>test</Tr>);

    expect(wrapper.text()).toEqual('test');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onClick callback', () => {
    const handleClick = jest.fn();

    const wrapper = shallow(<Tr onClick={handleClick}>test</Tr>);

    wrapper.simulate('click');

    expect(handleClick).toHaveBeenCalled();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
