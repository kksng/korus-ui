// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Pagination } from './index';

const syntheticEvent = { currentTarget: { blur: () => true }, preventDefault: () => true };

describe('Pagination SNAPSHOTS', () => {
  it('should render', () => {
    const pagination = (
      <Pagination pageSize={2} totalItems={10} />
    );
    const wrapper = mount(pagination);
    // 10 элементов по 2 на странице, итого 5 страниц
    expect(wrapper.find('Li')).toHaveLength(5);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('cotrollable mode', () => {
    const pagination = (
      <Pagination pageSize={2} totalItems={10} />
    );


    it('should render currentPage', () => {
      const wrapper = mount(pagination);

      expect(wrapper.find('.selected').first().text()).toEqual('1');

      expect(toJson(wrapper)).toMatchSnapshot();

      wrapper.setProps({ currentPage: 3 });

      expect(wrapper.find('.selected').first().text()).toEqual('3');

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render pageSize', () => {
      const wrapper = mount(pagination);
      wrapper.setProps({ currentPage: 1 });

      expect(wrapper.find('Li')).toHaveLength(5);

      expect(toJson(wrapper)).toMatchSnapshot();

      wrapper.setProps({ pageSize: 5 });

      expect(wrapper.find('Li')).toHaveLength(2);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });


  it('should render single page pagination with disabled controls', () => {
    const onChange = jest.fn();
    const pagination = (
      <Pagination pageSize={2} totalItems={1} onChange={onChange} />
    );
    const wrapper = mount(pagination);
    wrapper.find('A').first().props().onClick({ currentTarget: { blur: () => true } }); // В onChange есть event.currentTarget.blur();, эмулируем
    expect(wrapper.find('Li')).toHaveLength(1);
    expect(onChange).not.toHaveBeenCalled();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render pagination with zero totalItems with disabled controls', () => {
    const onChange = jest.fn();
    const pagination = (
      <Pagination pageSize={2} totalItems={0} onChange={onChange} />
    );
    const wrapper = mount(pagination);
    wrapper.find('A').first().props().onClick({ currentTarget: { blur: () => true } }); // В onChange есть event.currentTarget.blur();, эмулируем
    expect(wrapper.find('Li')).toHaveLength(1);
    expect(onChange).not.toHaveBeenCalled();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Pagination HANDLERS', () => {
  it('should trigger onPageSizeChange', () => {
    const onPageSizeChange = jest.fn();
    const pagination = (
      <Pagination pageSizeOptions={[1, 2, 5]} onPageSizeChange={onPageSizeChange} totalItems={10} />
    );

    const wrapper = mount(pagination);

    expect(wrapper.find('Li')).toHaveLength(5);

    wrapper.find('DropDownSelect').props().onChange({ component: { value: 5 } });

    wrapper.update();

    expect(wrapper.find('Li')).toHaveLength(2);

    expect(onPageSizeChange).toHaveBeenCalled();
  });

  it('should not hide pagination when pages becomes 1 when page size changed', () => {
    const onPageSizeChange = jest.fn();
    const pagination = (
      <Pagination pageSizeOptions={[5, 10, 20, 50]} onPageSizeChange={onPageSizeChange} totalItems={20} />
    );

    const wrapper = mount(pagination);

    wrapper.update();

    expect(wrapper.find('Li')).toHaveLength(4); // Получаются 1,2,3,4,5

    wrapper.find('DropDownSelect').props().onChange({ component: { value: 50 } });

    wrapper.update();

    expect(wrapper.find('Li')).toHaveLength(1);

    expect(onPageSizeChange).toHaveBeenCalled();
  });

  it('should not trigger "next" or "last" on last page', () => {
    const onChange = jest.fn();
    const pagination = (
      <Pagination totalItems={100} pageSize={10} onChange={onChange} />
    );

    const wrapper = mount(pagination);
    wrapper.find('a.last').first().props().onClick(syntheticEvent);

    expect(onChange).toHaveBeenCalled();

    wrapper.update();

    wrapper.find('a.next').first().props().onClick(syntheticEvent);
    wrapper.find('a.last').first().props().onClick(syntheticEvent);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should not trigger "first" or "prev" on first page', () => {
    const onChange = jest.fn();
    const pagination = (
      <Pagination totalItems={100} pageSize={10} onChange={onChange} />
    );

    const wrapper = mount(pagination);
    wrapper.find('a.first').first().props().onClick(syntheticEvent);

    wrapper.update();

    wrapper.find('a.prev').first().props().onClick(syntheticEvent);
    wrapper.find('a.first').first().props().onClick(syntheticEvent);
    wrapper.find('a.next').first().props().onClick(syntheticEvent);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should have correct event format', () => {
    const onPageSizeChange = jest.fn();
    const onChange = jest.fn();
    const pagination = (
      <Pagination pageSizeOptions={[1, 2, 5]} onPageSizeChange={onPageSizeChange} onChange={onChange} totalItems={10} />
    );

    const wrapper = mount(pagination);

    wrapper.find('DropDownSelect').props().onChange({ component: { value: 5 } });

    wrapper.find('PaginationControl').at(3).props().onClick(3);

    expect(onPageSizeChange).toHaveBeenCalled();

    expect(onChange).toHaveBeenCalled();

    const [[pageSizeChangeEvent]] = onPageSizeChange.mock.calls;

    const [[pageChangeEvent]] = onChange.mock.calls;

    expect(pageChangeEvent.component.value).toEqual(3);

    expect(pageSizeChangeEvent.component.value).toEqual(5);
  });
});

describe('Pagination ATTRIBUTES', () => {

});
