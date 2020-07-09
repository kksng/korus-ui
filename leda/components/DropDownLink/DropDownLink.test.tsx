// @ts-nocheck
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { DropDownLink } from './index';

describe('DropDownLink SNAPSHOTS', () => {
  it('should render with data objects', () => {
    const data = [
      {
        order: {
          sortField: 'createDate',
          sortOrder: 'DESC',
        },
        name: 'По умолчанию',
      },
      {
        order: {
          sortField: 'cost.commonPrice',
          sortOrder: 'ASC',
        },
        name: 'Цена по возрастанию',
      },
      {
        order: {
          sortField: 'cost.commonPrice',
          sortOrder: 'DESC',
        },
        name: 'Цена по убыванию',
      },
      {
        order: {
          sortField: 'commonArea',
          sortOrder: 'ASC',
        },
        name: 'Площадь по возрастанию',
      },
      {
        order: {
          sortField: 'commonArea',
          sortOrder: 'DESC',
        },
        name: 'Площадь по убыванию',
      },
    ];

    const valueControll = {
      order: {
        sortField: 'commonArea',
        sortOrder: 'DESC',
      },
      name: 'Площадь по убыванию',
    };

    const wrapper = mount(
      <DropDownLink
        data={data}
        onChange={(val) => val}
        value={valueControll}
        textField="name"
      />,
    );

    expect(wrapper.find('A').first().text()).toEqual('Площадь по убыванию');

    expect(wrapper.find('DropDownLink Item')).toHaveLength(5);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with array string', () => {
    const data = [
      'По умолчанию',
      'Цена по возрастанию',
      'Цена по убыванию',
      'Площадь по возрастанию',
      'Площадь по убыванию',
    ];

    const wrapper = mount(
      <DropDownLink
        data={data}
        onChange={(val) => val}
        value="По умолчанию"
      />,
    );

    expect(wrapper.find('DropDownLink Item')).toHaveLength(5);

    expect(wrapper.find('A a').last().text()).toEqual('Площадь по убыванию');

    expect(wrapper).toMatchSnapshot();
  });
});


describe('DropDownLink ATTRIBUTES', () => {
  it('should customize render items', () => {
    const data = [
      'По умолчанию',
      'Цена по возрастанию',
      'Цена по убыванию',
      'Площадь по возрастанию',
      'Площадь по убыванию',
    ];

    const wrapper = mount(
      <DropDownLink
        data={data}
        onChange={(val) => val}
        value="По умолчанию"
        itemRender={({ componentProps: { item } }) => <span>{`---${item}`}</span>}
      />,
    );

    expect(wrapper.find('DropDownLink Item').first().find('span').text()).toEqual('---По умолчанию');

    expect(wrapper.find('DropDownLink Item').last().find('span').text()).toEqual('---Площадь по убыванию');

    expect(wrapper).toMatchSnapshot();
  });

  it('should customize title', () => {
    const data = [
      'По умолчанию',
      'Цена по возрастанию',
      'Цена по убыванию',
      'Площадь по возрастанию',
      'Площадь по убыванию',
    ];

    const valueControll = 'По умолчанию';

    const wrapper = mount(
      <DropDownLink
        data={data}
        onChange={(val) => val}
        value={valueControll}
        titleRender={({ elementProps: { children } }) => <span>{`$$${children}$$`}</span>}
      />,
    );

    expect(wrapper.find('Title').text()).toEqual('$$По умолчанию$$');

    expect(wrapper).toMatchSnapshot();
  });
});

describe('ButtonGroup forward ref', () => {
  it('should return ref', () => {
    const myRef = React.createRef();

    const data = [
      'По умолчанию',
      'Цена по возрастанию',
      'Цена по убыванию',
      'Площадь по возрастанию',
      'Площадь по убыванию',
    ];

    let valueControll = 'По умолчанию';

    const handleClick = (val) => {
      valueControll = val.target.value;
    };

    mount(
      <>
        <DropDownLink
          ref={myRef}
          data={data}
          onChange={handleClick}
          value={valueControll}
          titleRender={({ elementProps: { children } }) => <span>{`$$${children}$$`}</span>}
          name="Eltsen"
        />,
      </>,
    );

    expect(myRef.current).toBeDefined();

    expect(myRef.current.wrapper.textContent).toEqual('$$По умолчанию$$По умолчаниюЦена по возрастаниюЦена по убываниюПлощадь по возрастаниюПлощадь по убыванию');
  });
});
