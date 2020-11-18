// @ts-nocheck
import React from 'react';
import { mount } from 'enzyme';
import { ButtonGroup } from './index';


describe('ButtonGroup SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(
      <ButtonGroup name="ButtonGroupFirst" data={['Petya', 'Vasya', 'Oleg']} />,
    );

    expect(wrapper.find('button')).toHaveLength(3);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render nothing', () => {
    const wrapper = mount(<ButtonGroup />);

    expect(wrapper.childAt(0)).toHaveLength(0);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('ButtonGroup ATTRIBUTES', () => {
  it('should render active class', () => {
    const wrapper = mount(
      <ButtonGroup
        defaultValue="Oleg"
        theme={{ buttonActive: 'success' }}
        data={['Petya', 'Vasya', 'Oleg']}
      />,
    );

    expect(wrapper.find('button').last().hasClass('success')).toBeTruthy();
  });
});


describe('ButtonGroup HANDLERS', () => {
  it('should call onChange', () => {
    const handleChange = jest.fn();

    const wrapper = mount(
      <ButtonGroup
        onChange={handleChange}
        theme={{ buttonActive: 'success' }}
        data={['Petya', 'Vasya', 'Oleg']}
      />,
    );

    wrapper.find('button').first().simulate('click');

    wrapper.update();

    expect(handleChange).toHaveBeenCalled();
  });

  it('should render active class', () => {
    let value = { target: { index: 1, value: '1' } };

    const handleChange = (ev) => {
      value = ev;
    };

    const wrapper = mount(
      <ButtonGroup
        onChange={(ev) => handleChange(ev)}
        theme={{ buttonActive: 'success' }}
        data={['Petya', 'Vasya', 'Oleg']}
      />,
    );

    wrapper.find('Button button').first().simulate('click');

    wrapper.update();

    expect(value.component.value).toEqual('Petya');

    expect(wrapper.find('Button').first().hasClass('success')).toBeTruthy();
  });

  it('should handle in controll mode', () => {
    const wrapper = mount(
      <ButtonGroup
        data={['Petya', 'Vasya', 'Oleg']}
        defaultValue="Petya"
        onChange={(ev) => wrapper.setProps({ value: ev.component.value })}
        theme={{ buttonActive: 'danger' }}
      />,
    );

    wrapper.update();

    expect(wrapper.find('button').first().hasClass('danger')).toBeTruthy();

    wrapper.find('Button button').last().simulate('click');

    wrapper.update();

    expect(wrapper.find('Button').last().hasClass('danger')).toBeTruthy();
  });

  it('should handle in controll mode with valueField', () => {
    const wrapper = mount(
      <ButtonGroup
        onChange={(ev) => wrapper.setProps({ value: ev.component.value })}
        theme={{ buttonActive: 'danger' }}
        defaultValue="Vasya"
        data={['Petya', 'Vasya', 'Oleg']}
      />,
    );

    wrapper.update();

    expect(wrapper.find('button').at(1).hasClass('danger')).toBeTruthy();

    wrapper.find('Button button').last().simulate('click');

    wrapper.update();

    expect(wrapper.find('Button').last().hasClass('danger')).toBeTruthy();
  });

  it('should onChange deliver value', () => {
    let event = { target: { value: '1' } };

    const handleChange = (ev) => {
      event = ev;
    };

    const wrapper = mount(
      <ButtonGroup
        onChange={handleChange}
        theme={{ buttonActive: 'danger' }}
        data={['Petya', 'Vasya', 'Oleg']}
      />,
    );

    wrapper.find('Button button').last().simulate('click');

    wrapper.update();

    expect(event.component.value).toEqual('Oleg');
  });
});


describe('ButtonGroup forward ref', () => {
  it('should return ref', () => {
    const myRef = React.createRef();

    mount(
      <>
        <ButtonGroup
          ref={myRef}
          onChange={jest.fn()}
          theme={{ buttonActive: 'danger' }}
          data={['Petya', 'Vasya', 'Oleg', 'Kolya']}
        />
      </>,
    );

    expect(myRef.current).toBeDefined();

    expect(myRef.current.wrapper.textContent).toEqual('PetyaVasyaOlegKolya');
  });
});
