// @ts-nocheck
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MaskedInput } from './index';

describe('MaskedInput SNAPSHOTS', () => {
  describe('should render different component states', () => {
    it('should render disabled', () => {
      const wrapper = mount(<MaskedInput disabled mask="+# (###) ###-##-##" onChange={jest.fn()} />);

      const getWrapperJSON = (Wrapper) => toJson(Wrapper);

      expect(wrapper.find('input').getDOMNode().disabled).toBeTruthy();

      expect(getWrapperJSON(wrapper)).toMatchSnapshot();

      wrapper.unmount();
    });

    it('should render placeholder', () => {
      const wrapper = mount(<MaskedInput mask="+# (###) ###-##-##" value="79521806763" onChange={jest.fn()} />);

      const getWrapperJSON = (Wrapper) => toJson(Wrapper);

      expect(getWrapperJSON(wrapper)).toMatchSnapshot();

      wrapper.unmount();
    });
  });
});

describe('MaskedInput HANDLERS', () => {
  it('should test onFocus', () => {
    const onFocusHandler = jest.fn();
    const wrapper = mount(<MaskedInput mask="+# (###) ###-##-##" value="79521806763" onFocus={onFocusHandler} />);

    wrapper.find('input').props().onFocus({});

    expect(onFocusHandler).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should test onEnterPress', () => {
    const onEnterPressHandler = jest.fn();
    const wrapper = mount(<MaskedInput mask="+# (###) ###-##-##" value="79521806763" onEnterPress={onEnterPressHandler} />);

    wrapper.find('input').props().onKeyDown({ key: 'Enter', currentTarget: { value: '79521806763' } });

    expect(onEnterPressHandler).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should test onBlur', () => {
    const onBlurHandler = jest.fn();
    const wrapper = mount(<MaskedInput mask="+# (###) ###-##-##" value="79521806763" onBlur={onBlurHandler} />);

    wrapper.find('input').props().onBlur({ target: { value: '' } });

    expect(onBlurHandler).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should test onChange', () => {
    const onChangeHandler = jest.fn();
    const wrapper = mount(<MaskedInput mask="+# (###) ###-##-##" value="79521806763" onChange={onChangeHandler} />);

    wrapper.find('MaskedInput').last().props().onChange({ currentTarget: { value: '78536458877' } });

    expect(onChangeHandler).toHaveBeenCalled();

    wrapper.unmount();
  });
});
