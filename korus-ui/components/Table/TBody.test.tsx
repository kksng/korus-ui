import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { TBody } from './index';

describe('TBody component tests:', () => {
  it('should be defined', () => {
    expect(TBody).toBeDefined();
  });
  it('should render', () => {
    const wrapper = shallow(<TBody>test</TBody>);

    expect(wrapper.text()).toEqual('test');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
