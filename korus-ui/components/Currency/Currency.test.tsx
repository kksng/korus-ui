// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import { Currency } from './index';
// mock Intl object
global.Intl = require('intl');


describe('Rubles SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = shallow(<Currency currencyCode="EUR" />);

    expect(wrapper.children().text()).toEqual('—');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('value', () => {
    it('should render with null as value', () => {
      const wrapper = shallow(<Currency value={null} currencyCode="EUR" />);

      expect(wrapper.children().text()).toEqual('—');

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render a value', () => {
      const wrapper = shallow(<Currency value={100500} currencyCode="RUB" />);

      expect(wrapper.text()).toEqual('100 500₽');

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render with string as value', () => {
      const wrapper = shallow(<Currency value="100500" currencyCode="RUB" />);

      expect(wrapper.text()).toEqual('100 500₽');

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render with string as value without spaces', () => {
      const wrapper = shallow(<Currency value="1 0 0 5 0 0" currencyCode="RUB" />);

      expect(wrapper.text()).toEqual('100 500₽');

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render as null with "not a number" value', () => {
      const wrapper = shallow(<Currency value="qux" currencyCode="RUB" />);

      expect(wrapper.children().text()).toEqual('—');

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render with child as value', () => {
      const wrapper = shallow(<Currency currencyCode="RUB">100500.543</Currency>);

      expect(wrapper.text()).toEqual('100 500.54₽');

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('precision', () => {
    it('should render rounded value without precision prop', () => {
      const wrapper = shallow(<Currency value={100500.543} currencyCode="RUB" />);

      expect(wrapper.text()).toEqual('100 500.54₽');

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render full value with precision prop', () => {
      const wrapper = shallow(<Currency value={100500.543} precision={3} currencyCode="RUB" />);

      expect(wrapper.text()).toEqual('100 500.543₽');

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render rounded value with precision prop', () => {
      const wrapper = shallow(<Currency value={100500.55} precision={1} currencyCode="RUB" />);

      expect(wrapper.text()).toEqual('100 500.6₽');

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render with units', () => {
    const wrapper = mount(<Currency value={100500} currencySymbolRender={({ elementProps: { children } }) => <> млн. {children}</>} currencyCode="RUB" />);

    expect(wrapper.text()).toEqual('100 500 млн. ₽');

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Rubles with an empty value', () => {
  it('should have default "-" placeholder', () => {
    const wrapper = shallow(<Currency currencyCode="RUB" />);

    expect(wrapper.children().text()).toEqual('—');
  });

  it('should accept empty string as a placeholder', () => {
    const wrapper = shallow(<Currency placeholder="" currencyCode="RUB" />);

    expect(wrapper.children()).toHaveLength(0);
  });

  it('should accept custom string as a placeholder', () => {
    const wrapper = shallow(<Currency placeholder="empty" currencyCode="RUB" />);

    expect(wrapper.children().text()).toEqual('empty');
  });
});

describe('Currency prop', () => {
  it('should render dollars', () => {
    const wrapper = shallow(<Currency value={12500} currencyCode="USD" />);

    expect(wrapper.children().last().text()).toContain('$');
  });

  it('should render euro', () => {
    const wrapper = shallow(<Currency value={12500} currencyCode="EUR" />);

    expect(wrapper.children().last().text()).toContain('€');
  });
  it('should render pound sterling', () => {
    const wrapper = shallow(<Currency value={12500} currencyCode="GBP" />);

    expect(wrapper.children().last().text()).toContain('£');
  });
});
