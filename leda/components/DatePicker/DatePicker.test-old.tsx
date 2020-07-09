// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { advanceTo } from 'jest-date-mock';
import { DatePicker } from './index';
import { fixJSON } from '../../utils';

beforeAll(() => {
  // установим текущую дату на 27.05.2018, чтобы дата в снапшотах не обновлялась
  advanceTo(new Date(2018, 5, 27, 0, 0, 0));
});

describe('format prop', () => {
  it('should accept different formats', () => {
    const wrapper = mount(<DatePicker format="d" value={new Date('2018-11-02')} />);

    let wrapperJSON = toJson(wrapper);

    expect(wrapper.find('input').props().value).toEqual('02.11.2018');

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();

    wrapper.setProps({ format: 'D' });

    expect(wrapper.find('input').props().value).toEqual('пятница, 2 ноября 2018 г.');

    wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();

    wrapper.setProps({ format: 'm' });

    expect(wrapper.find('input').props().value).toEqual('2 нояб.');

    wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();

    wrapper.setProps({ format: 'M' });

    expect(wrapper.find('input').props().value).toEqual('2 ноября');

    wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();

    wrapper.setProps({ format: 'y' });

    expect(wrapper.find('input').props().value).toEqual('нояб. 2018 г.');

    wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();

    wrapper.setProps({ format: 'Y' });

    expect(wrapper.find('input').props().value).toEqual('ноябрь 2018 г.');

    wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();

    wrapper.setProps({ format: 'dd.MM.y, EEEE' });

    expect(wrapper.find('input').props().value).toEqual('02.11.2018, пятница');

    wrapperJSON = toJson(wrapper);

    expect(fixJSON(wrapperJSON)).toMatchSnapshot();
  });
});

it('should accept different formatPlacehoders', () => {
  const wrapper = mount(<DatePicker format="d" formatPlaceholder="wide" />);

  let wrapperJSON = toJson(wrapper);

  expect(fixJSON(wrapperJSON)).toMatchSnapshot();

  wrapper.setProps({ formatPlaceholder: 'narrow' });

  wrapperJSON = toJson(wrapper);

  expect(fixJSON(wrapperJSON)).toMatchSnapshot();

  wrapper.setProps({ formatPlaceholder: 'short' });

  wrapperJSON = toJson(wrapper);

  expect(fixJSON(wrapperJSON)).toMatchSnapshot();

  wrapper.setProps({ formatPlaceholder: 'formatPattern' });

  wrapperJSON = toJson(wrapper);

  expect(fixJSON(wrapperJSON)).toMatchSnapshot();
});

it('should limit value by min', () => {
  const wrapper = mount(<DatePicker min={new Date('1999-01-01z')} show onBlur={jest.fn()} />);

  const minTime = wrapper.props().min.getTime();

  // меньше минимума
  wrapper.find('DatePicker').last().props().onBlur({ target: { value: new Date('1998-03-16z') } });

  wrapper.update();
  // значение приняло минимум
  expect(wrapper.find('DatePicker').last().props().value.getTime()).toEqual(minTime);

  const wrapperJSON = toJson(wrapper);

  expect(fixJSON(wrapperJSON)).toMatchSnapshot();
});

it('should limit value by max', () => {
  const wrapper = mount(<DatePicker max={new Date('2020-12-31z')} show />);

  const maxTime = wrapper.props().max.getTime();

  // больше максимума
  wrapper.find('DatePicker').last().props().onBlur({ target: { value: new Date('2038-03-16z') } });

  wrapper.update();
  // значение приняло максимум
  expect(wrapper.find('DatePicker').last().props().value.getTime()).toEqual(maxTime);

  const wrapperJSON = toJson(wrapper);

  expect(fixJSON(wrapperJSON)).toMatchSnapshot();
});
