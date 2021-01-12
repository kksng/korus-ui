import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { ColGroup } from './index';

describe('ColGroup component tests:', () => {
  it('should be defined', () => {
    expect(ColGroup).toBeDefined();
  });
  it('should render', () => {
    const wrapper = shallow(<ColGroup>test</ColGroup>);

    expect(wrapper.text()).toEqual('test');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
