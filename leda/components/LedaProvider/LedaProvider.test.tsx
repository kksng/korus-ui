import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Leda } from './index';
import { ButtonGroup } from '../ButtonGroup';
import { Slider } from '../Slider';
import { DropDownSelect } from '../DropDownSelect';

const theme = {
  buttonGroup: {
    wrapper: 'custom-buttonGroup-wrapper',
    button: 'custom-buttonGroup-button',
  },
  slider: {
    wrapper: 'custom-wrapper-slider',
    container: 'custom-container-slider',
    handle: 'custom-handle-slider',
  },
  dropDownSelect: {
    input: 'custom-input-class',
  },
};

describe('LEDA THEME PROVIDER', () => {
  it('should provide theme to button group', () => {
    const wrapper = mount(
      <Leda theme={theme}>
        <ButtonGroup data={['Petya', 'Vasya', 'Oleg', 'Kolya']} />
      </Leda>,
    );

    expect(wrapper.find('div.custom-buttonGroup-wrapper')).toHaveLength(1);

    expect(wrapper.find('button.custom-buttonGroup-button')).toHaveLength(4);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should be isOpen', () => {
    const data = [
      { txt: 'text1', val: 'value1' },
      { txt: 'text2', val: 'value2' },
      { txt: 'text3', val: 'value3' },
    ];

    const wrapper = mount(
      <Leda theme={theme}>
        <DropDownSelect textField="txt" data={data} isOpen onChange={jest.fn()} />
      </Leda>,
    );

    expect(wrapper.find('input.custom-input-class')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });
});
