import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';
import { ButtonGroup } from './index';

const validName = 'buttonGroup';
const validData = ['one', 'two', 'three'];

describe('ButtonGroup snapshots test collection', () => {
  test('is ButtonGroup render right?', () => {
    const { container, queryAllByRole } = render(<ButtonGroup name={validName} data={['Petya', 'Vasya', 'Oleg']} />);

    expect(queryAllByRole('button'))
      .toHaveLength(3);

    expect(container.firstChild)
      .toMatchSnapshot();
  });
  test('is ButtonGroup render right without data?', () => {
    /**
     * ВВ
     * Такой тест был в старых тестах. Можно посмотреть в файл ButtonGroup.test-old.tsx
     */
    const { container, queryAllByRole } = render(<ButtonGroup name={validName} />);

    expect(queryAllByRole('button'))
      .toHaveLength(0);

    expect(container.firstChild)
      .toMatchSnapshot();
  });
});
describe('ButtonGroup different work mode test collection', () => {
  test('is ButtonGroup render right in RadioTypeMode?', () => {
    const { container } = render(<ButtonGroup name={validName} data={validData} />);

    expect(container.querySelectorAll('.first'))
      .toHaveLength(1);

    expect(container.querySelectorAll('.last'))
      .toHaveLength(1);

    expect(container.querySelectorAll('.button-group-item'))
      .toHaveLength(3);
  });
  test('is ButtonGroup render right in CheckboxTypeMode?', () => {
    const { container } = render(<ButtonGroup type="checkbox" name={validName} data={validData} />);

    expect(container.querySelectorAll('.first'))
      .toHaveLength(1);

    expect(container.querySelectorAll('.last'))
      .toHaveLength(1);

    expect(container.querySelectorAll('.button-group-item'))
      .toHaveLength(3);

    expect(container.querySelectorAll('div[type="checkbox"]'))
      .toHaveLength(1);
  });
  test('is ButtonGroup work right in RadioTypeMode?', () => {
    const onClick = jest.fn();
    const { container } = render(<ButtonGroup name={validName} data={validData} onClick={onClick} />);
    const buttons = container.querySelectorAll('.button-group-item');

    buttons.forEach((b) => {
      fireEvent.click(b);
    });
    expect(onClick)
      .toHaveBeenCalledTimes(3);

    expect(container.querySelectorAll('.button-group-item.active.last'))
      .toHaveLength(1);
  });
  test('is ButtonGroup work right in CheckboxTypeMode?', () => {
    const onClick = jest.fn();
    const { container } = render(<ButtonGroup type="checkbox" name={validName} data={validData} onClick={onClick} />);
    const buttons = container.querySelectorAll('.button-group-item');

    buttons.forEach((b) => {
      fireEvent.click(b);
    });
    expect(onClick)
      .toHaveBeenCalledTimes(3);

    expect(container.querySelectorAll('.button-group-item.active'))
      .toHaveLength(3);
  });
});
describe('ButtonGroup value property test collection', () => {
  test('is ButtonGroup render right with value as Number?', () => {
    const { getAllByText } = render(<ButtonGroup name={validName} data={[1, 2, 3]} />);

    expect(getAllByText('1'))
      .toHaveLength(1);

    expect(getAllByText('2'))
      .toHaveLength(1);

    expect(getAllByText('3'))
      .toHaveLength(1);
  });
  test('is ButtonGroup render right with value as String?', () => {
    const { getAllByText } = render(<ButtonGroup name={validName} data={['a', 'b', 'c']} />);

    expect(getAllByText('a'))
      .toHaveLength(1);

    expect(getAllByText('b'))
      .toHaveLength(1);

    expect(getAllByText('c'))
      .toHaveLength(1);
  });
  test('is ButtonGroup render right with value as Object?', () => {
    const { getAllByText } = render(<ButtonGroup name={validName} textField="key" data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }]} />);

    expect(getAllByText('a'))
      .toHaveLength(1);

    expect(getAllByText('b'))
      .toHaveLength(1);

    expect(getAllByText('c'))
      .toHaveLength(1);
  });
});
describe('ButtonGroup attributes test collection', () => {
  test('is ButtonGroup render right with different atributes?', () => {
    /**
     * ВВ
     * Это Артем меня просил все в один тест перенести
     * А бы сделал много маленьких тестов
     */
    const { container, rerender } = render(<ButtonGroup _primary data={['a', 'b', 'c']} />);
    const mockedData = ['a', 'b', 'c'];

    expect(container.querySelectorAll('.primary'))
      .toHaveLength(1);

    rerender(<ButtonGroup _secondary data={mockedData} />);

    expect(container.querySelectorAll('.secondary'))
      .toHaveLength(1);

    rerender(<ButtonGroup _success data={mockedData} />);

    expect(container.querySelectorAll('.success'))
      .toHaveLength(1);

    rerender(<ButtonGroup _warning data={mockedData} />);

    expect(container.querySelectorAll('.warning'))
      .toHaveLength(1);

    rerender(<ButtonGroup _danger data={mockedData} />);

    expect(container.querySelectorAll('.danger'))
      .toHaveLength(1);
  });
});
describe('ButtongGroup event handler test collection', () => {
  test('is ButtonGroup in RadioTypeMode onClick and onChange handling right?', () => {
    const onClick = jest.fn();
    const onChange = jest.fn();
    const { container } = render(<ButtonGroup data={['a', 'b', 'c']} onClick={onClick} onChange={onChange} />);

    fireEvent.click(container.querySelectorAll('.button-group-item.first')[0]);

    expect(onClick)
      .toHaveBeenCalledTimes(1);

    expect(onClick)
      .toHaveBeenLastCalledWith(expect.any(Object));

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          value: 'a',
        }),
      }));
  });
  test('is ButtonGroup in CheckboxTypeMode onClick and onChange handling right?', () => {
    const onClick = jest.fn();
    const onChange = jest.fn();
    const { container } = render(<ButtonGroup type="checkbox" data={['a', 'b', 'c']} onClick={onClick} onChange={onChange} />);
    const firstButton = container.querySelectorAll('.button-group-item.first')[0];
    const lastButton = container.querySelectorAll('.button-group-item.last')[0];

    fireEvent.click(firstButton);
    fireEvent.click(lastButton);

    expect(onClick)
      .toHaveBeenCalledTimes(2);

    expect(onClick)
      .toHaveBeenLastCalledWith(expect.any(Object));

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          value: ['a', 'c'],
        }),
      }));
  });
});
describe('ButtonGroup quality test collection', () => {
  test('is ButtonGroup rendered right in RadioTypeMode with right defaultValue if data is String?', () => {
    const { container } = render(<ButtonGroup type="radio" defaultValue="1" name={validName} data={['1', '2', '3']} />);

    expect(container.querySelectorAll('.active'))
      .toHaveLength(1);
  });
  test('is ButtonGroup rendered right in RadioTypeMode with right defaultValue if data is Object?', () => {
    const { container } = render(<ButtonGroup type="radio" defaultValue={{ key: 'a' }} name={validName} textField="key" data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }]} />);

    expect(container.querySelectorAll('.active'))
      .toHaveLength(1);
  });
  test('is ButtonGroup rendered right in CheckboxTypeMode with right dafaultValue if data is String?', () => {
    const { container } = render(<ButtonGroup type="checkbox" defaultValue={['a', 'b']} name={validName} data={['a', 'b', 'c']} />);

    expect(container.querySelectorAll('.active'))
      .toHaveLength(2);
  });
  test('is ButtonGroup rendered right in CheckboxTypeMode with right dafaultValue if data is Object?', () => {
    const { container } = render(<ButtonGroup type="checkbox" defaultValue={[{ key: 'a' }]} textField="key" name={validName} data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }]} />);

    expect(container.querySelectorAll('.active'))
      .toHaveLength(1);
  });
});
