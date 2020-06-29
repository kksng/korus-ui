// @ts-nocheck
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MaskedInput } from './index';

describe('MaskedInput SNAPSHOTS', () => {
  it.skip('should render basic usage', () => {
    const wrapper = mount(<MaskedInput mask="+# (###) ###-##-##" value="79521806763" />);

    expect(wrapper.find('input').getDOMNode().value).toEqual('+7 (952) 180-67-63');

    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.unmount();
  });

  it.skip('should render value in controllable mode', () => {
    const wrapper = mount(<MaskedInput mask="+# (###) ###-##-##" value="79521806763" onChange={jest.fn()} />);

    expect(wrapper.find('input').getDOMNode().value).toEqual('+7 (952) 180-67-63');

    const getWrapperJSON = (Wrapper) => toJson(Wrapper);

    expect(getWrapperJSON(wrapper)).toMatchSnapshot();

    wrapper.setProps({ value: '32085556478' });

    wrapper.update();
    // todo: починить тест
    // expect(wrapper.find('input').getDOMNode().value).toEqual('+3 (208) 555-64-78');

    expect(getWrapperJSON(wrapper)).toMatchSnapshot();

    wrapper.unmount();
  });

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

  it.skip('should have correct event format', () => {
    const onChangeHandler = jest.fn();
    const onBlurHandler = jest.fn();
    const wrapper = mount(<MaskedInput mask="+# (###) ###-##-##" name="MINput" value="79521806763" onBlur={onBlurHandler} onChange={onChangeHandler} />);

    wrapper.find('MaskedInput').last().props().onChange({ currentTarget: { value: '78536458877', name: 'MINput' } });

    expect(onChangeHandler).toHaveBeenCalled();

    const [[changeEvent]] = onChangeHandler.mock.calls;

    expect(changeEvent.currentTarget).toBeDefined();

    expect(changeEvent.currentTarget.value).toEqual('78536458877');

    expect(changeEvent.currentTarget.name).toEqual('MINput');

    wrapper.find('input').props().onBlur({ target: { value: '+7 (952) 180-67-63' } });

    expect(onBlurHandler).toHaveBeenCalled();

    const [[blurEvent]] = onBlurHandler.mock.calls;

    expect(blurEvent.target).toBeDefined();

    expect(blurEvent.target.value).toEqual('79521806763');

    expect(blurEvent.target.name).toEqual('MINput');

    wrapper.unmount();
  });
});

describe('MaskedInput ATTRIBUTES', () => {
  it.skip('should mask value', () => {
    const wrapper = mount(<MaskedInput mask="+# (###) ###-##-##" value="79521806763" />);

    expect(wrapper.find('input').getDOMNode().value).toEqual('+7 (952) 180-67-63');

    wrapper.setProps({ mask: '#### #### #### ####' }).setProps({ value: '1234 5678 9012 3456' });
    // todo: починить тест
    // expect(wrapper.find('input').getDOMNode().value).toEqual('1234 5678 9012 3456');

    wrapper.setProps({ mask: 'LL#########LL' }).setProps({ value: 'CA123456789UA' });

    // expect(wrapper.find('input').getDOMNode().value).toEqual('CA123456789UA');

    wrapper.setProps({ mask: 'Ccccc' }).setProps({ value: 'Корус' });

    // expect(wrapper.find('input').getDOMNode().value).toEqual('Корус');

    wrapper.unmount();
  });

  it.skip('should change mask placeholderChar', () => {
    const wrapper = mount(<MaskedInput mask="+# (###) ###-##-##" value="7" placeholderChar="*" />);

    expect(wrapper.find('input').getDOMNode().value).toEqual('+7 (***) ***-**-**');

    wrapper.unmount();
  });

  describe('new maskRules for mask', () => {
    const custommaskRules = {
      n: {
        validate: (char) => /\d/.test(char),
      },
    };
    it.skip('should accept input', () => {
      const wrapper = mount(<MaskedInput maskRules={custommaskRules} mask="+n (nnn) nnn-nn-nn" value="79521806763" placeholderChar="*" />);

      expect(wrapper.find('input').getDOMNode().value).toEqual('+7 (952) 180-67-63');

      wrapper.unmount();
    });

    it.skip('should not accept input', () => {
      const wrapper = mount(<MaskedInput maskRules={custommaskRules} mask="+n (nnn) nnn-nn-nn" value="795218067nn" placeholderChar="*" />);

      expect(wrapper.find('input').getDOMNode().value).toEqual('+7 (952) 180-67-**');

      wrapper.unmount();
    });

    it.skip('should insert value before first invalid char', () => {
      const wrapper = mount(<MaskedInput maskRules={custommaskRules} mask="+n (nnn) nnn-nn-nn" value="795218067nn63" placeholderChar="*" />);

      expect(wrapper.find('input').getDOMNode().value).toEqual('+7 (952) 180-67-**');

      wrapper.unmount();
    });
  });
});

describe('MaskedInput VALIDATION', () => {
  it.skip('should be invalid if component is isRequired, value is empty and onBlur was called', async () => {
    const onBlurHandler = jest.fn();
    const wrapper = mount(<MaskedInput onBlur={onBlurHandler} form="test" isRequired name="Mamasked" mask="+# (###) ###-##-##" />);

    const getEvent = (index) => {
      const [event] = onBlurHandler.mock.calls[index];
      return event;
    };

    wrapper.find('input').props().onBlur({ target: { value: '' } });
    // валидация ассинхронна, нужно подождать
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(onBlurHandler).toHaveBeenCalled();

    const firstEvent = getEvent(0);

    expect(firstEvent.target.name).toEqual('Mamasked');

    expect(firstEvent.target.value).toEqual('');

    expect(firstEvent.target.isValid).toBeFalsy();

    expect(wrapper.find('div.masked-input-wrapper').getDOMNode().classList.contains('danger')).toBeTruthy();

    wrapper.setProps({ value: '79521806763' });

    wrapper.find('input').props().onBlur({ target: { value: '+7 (952) 180-67-63' } });

    await new Promise((resolve) => setTimeout(resolve, 0));

    const secondEvent = getEvent(1);

    expect(secondEvent.target.name).toEqual('Mamasked');
    // todo: починить тест
    // expect(secondEvent.target.value).toEqual('+7 (952) 180-67-63');

    expect(secondEvent.target.isValid).toBeTruthy();

    expect(wrapper.find('div.masked-input-wrapper').getDOMNode().classList.contains('danger')).toBeFalsy();

    wrapper.unmount();
  });
});
