// @ts-nocheck
import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { MultiSelect } from './index';

describe('MultiSelect SNAPSHOTS', () => {
  it('should render basic usage', () => {
    const wrapper = mount(
      <MultiSelect data={['1', '2', '3']} onChange={jest.fn()} value={['1']} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render value in controllable mode', () => {
    const wrapper = mount(
      <MultiSelect data={['1', '2', '3']} value={['1']} onChange={jest.fn()} />,
    );

    expect(wrapper.props().value).toEqual(['1']);

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ value: ['2'] });

    expect(wrapper.props().value).toEqual(['2']);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render data in controllable mode', () => {
    const dataString = ['value1', 'value2', 'value3'];
    const dataObject = [
      { text: 'text1', value: 'value1' },
      { text: 'text2', value: 'value2' },
      { text: 'text3', value: 'value3' },
    ];

    const wrapper = mount(
      <MultiSelect data={dataString} onChange={jest.fn()} value={['value1']} />,
    );

    expect(wrapper.props().data).toHaveLength(3);

    wrapper.props().data.forEach((el, index) => {
      expect(el).toEqual(dataString[index]);
    });

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ data: dataObject });

    wrapper.props().data.forEach((el, index) => {
      expect(el.text).toEqual(dataObject[index].text);

      expect(el.value).toEqual(dataObject[index].value);
    });

    expect(wrapper).toMatchSnapshot();
  });
});

describe('MultiSelect ATTRIBUTES', () => {
  it('should list isOpen', () => {
    const wrapper = mount(
      <MultiSelect data={['1', '2', '3']} isOpen onChange={jest.fn()} value={['1']} />,
    );

    expect(wrapper.find('SuggestionItem')).toHaveLength(2);

    expect(wrapper).toMatchSnapshot();
  });

  it('should list loading', () => {
    const wrapper = mount(
      <MultiSelect data={['1', '2', '3']} isLoading isOpen onChange={jest.fn()} value={['1']} />,
    );

    expect(wrapper.find('SuggestionList Loader')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should render templates', () => {
    const wrapper = mount(
      <MultiSelect
        data={['1', '2', '3']}
        isOpen
        onChange={jest.fn()}
        value={['1']}
        suggestionsFooterRender={() => <span className="footer">Footer</span>}
        suggestionsHeaderRender={() => <span className="header">Header</span>}
      />,
    );

    expect(wrapper.find('.footer')).toHaveLength(1);

    expect(wrapper.find('.header')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render noData template', () => {
    const wrapper = mount(
      <MultiSelect
        data={['1', '2', '3']}
        isOpen
        onChange={jest.fn()}
        value={['1']}
      />,
    );

    expect(wrapper).toMatchSnapshot();

    act(() => {
      wrapper.find('Input').props().onChange({ target: { value: 'test' } });
    });

    wrapper.update();

    expect(wrapper.find('NoSuggestions div.nodata').text()).toEqual('Ничего не найдено');

    expect(wrapper).toMatchSnapshot();
  });
});

describe('MultiSelect HANDLERS', () => {
  it('should test onFocus', () => {
    const onFocusHandler = jest.fn();

    const wrapper = mount(
      <MultiSelect
        data={['1', '2', '3']}
        isOpen
        onChange={jest.fn()}
        value={['1']}
        name="auto"
        onFocus={onFocusHandler}
      />,
    );

    act(() => {
      wrapper.find('Input').props().onFocus();
    });

    const [[event]] = onFocusHandler.mock.calls;

    expect(onFocusHandler).toHaveBeenCalled();

    expect(event.component.name).toEqual('auto');

    expect(wrapper.find('TagsContainer')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should test onBlur', () => {
    const onBlurHandler = jest.fn();

    const wrapper = mount(
      <MultiSelect data={['1', '2', '3']} value={['1']} onChange={jest.fn()} name="auto" onBlur={onBlurHandler} />,
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.find('Input').props().onBlur();

    const [[event]] = onBlurHandler.mock.calls;

    expect(onBlurHandler).toHaveBeenCalled();

    expect(event.component.name).toEqual('auto');

    expect(wrapper.find('TagsContainer')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should test onChange', () => {
    let val = ['2'];

    const onChangeHandler = (ev) => {
      const { target } = ev;
      val = [...val, target.value];
      return val;
    };

    const wrapper = mount(
      <MultiSelect
        isOpen
        data={['1', '2', '3']}
        value={val}
        name="auto"
        onChange={(ev) => wrapper.setProps({ value: onChangeHandler(ev) })}
      />,
    );

    wrapper.find('Suggestion').first().simulate('click');

    expect(wrapper.find('Tag')).toHaveLength(2);

    expect(wrapper).toMatchSnapshot();
  });

  it('should test onDeselect', () => {
    let val = ['1', '2'];

    const onChangeHandler = (ev) => {
      val = ev.component.value;
      return val;
    };

    const wrapper = mount(
      <MultiSelect
        isOpen
        data={['1', '2', '3']}
        value={val}
        name="auto"
        onChange={(ev) => wrapper.setProps({
          value: onChangeHandler(ev),
        })}
      />,
    );

    wrapper.find('Suggestion').last().simulate('click');

    expect(wrapper.find('Tag')).toHaveLength(3);

    expect(wrapper).toMatchSnapshot();

    wrapper.find('Tag Icon').first().simulate('click');

    wrapper.find('Tag Icon').last().simulate('click');

    expect(wrapper.find('Tag')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should test onDeselect by clear button', () => {
    let val = ['1', '2', '3'];

    const onChangeHandler = (ev) => {
      val = ev.component.value;
      return val;
    };

    const wrapper = mount(
      <MultiSelect
        isOpen
        data={['1', '2', '3']}
        value={val}
        name="auto"
        hasClearButton
        onChange={(ev) => wrapper.setProps({
          value: onChangeHandler(ev),
        })}
      />,
    );

    expect(wrapper.find('Icon')).toHaveLength(3);

    wrapper.find('Tag Icon span').last().simulate('click');

    expect(wrapper.find('Tag')).toHaveLength(2);

    expect(wrapper).toMatchSnapshot();
  });
});
