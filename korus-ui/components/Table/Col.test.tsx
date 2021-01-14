import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Col } from './Col';

describe('Col component tests:', () => {
  it('should be defined', () => {
    expect(Col).toBeDefined();
  });
  it('should render', () => {
    const wrapper = shallow(<Col>test</Col>);

    expect(wrapper.text()).toEqual('test');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
