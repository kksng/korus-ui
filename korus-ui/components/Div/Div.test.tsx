// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import {
  Div, Switcher, AutoComplete,
} from '../../index';

describe('Div SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = shallow(<Div />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Div HANDLERS', () => {
  it('should trigger onClick', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Div onClick={onClick}>example</Div>);

    wrapper.find('div').props().onClick();

    expect(onClick).toHaveBeenCalled();
  });
});

describe('Div ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = mount(<Div _box>default</Div>);

    expect(wrapper.find('div').hasClass('box')).toBeTruthy();


    wrapper.setProps({ _active: true, _box: false });

    expect(wrapper.find('div').hasClass('box')).toBeFalsy();

    expect(wrapper.find('div').hasClass('active')).toBeTruthy();


    wrapper.setProps({ className: 'testClass' });

    expect(wrapper.find('div').hasClass('box')).toBeFalsy();

    expect(wrapper.find('div').hasClass('active')).toBeTruthy();

    expect(wrapper.find('div').hasClass('testClass')).toBeTruthy();
  });

  it('should have children prop', () => {
    const wrapper = shallow(<Div><div className="lvl1"><span className="lvl2">TEXT</span></div></Div>);

    expect(wrapper.props().children).toBeDefined();

    expect(wrapper.props().children.type).toEqual('div');

    expect(wrapper.props().children.props.className).toEqual('lvl1');

    expect(wrapper.props().children.props.children.type).toEqual('span');

    expect(wrapper.props().children.props.children.props.className).toEqual('lvl2');

    expect(wrapper.props().children.props.children.props.children).toEqual('TEXT');
  });

  it('should render nested components', () => {
    const wrapper = mount(
      <Div>
        <Switcher value />
        <Div _test-wrapper>
          <AutoComplete
            data={[
              'London',
              'Islamabad',
              'Berlin',
              'Washington',
              'Paris',
              'Rome',
              'Tokyo',
              'Budapest',
              'Ottawa',
              'Moscow',
            ]}
            isOpen
            value="London"
          />
        </Div>
      </Div>,
    );

    const switcher = wrapper.find('Switcher');

    const autocomplete = wrapper.find('AutoComplete');

    expect(wrapper.props().children).toBeDefined();

    expect(wrapper.find('.test-wrapper')).toHaveLength(1);

    expect(switcher.find('div.switcher-wrapper')).toHaveLength(1);

    expect(autocomplete.find('div.autocomplete-wrapper')).toHaveLength(1);

    // expect(autocomplete.find('Item')).toHaveLength(10);
  });
});
