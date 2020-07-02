import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';

import { Slider } from './index';

describe('Check Slider snapshots collection', () => {
  test('is Slider render right?', () => {
    const { container, debug } = render(<Slider name="test" />);

    expect(container.firstChild)
      .toMatchSnapshot();
  });
  test('is Slider render right if isDisabled set true?', () => {
    const { container } = render(<Slider isDisabled name="test" />);
    const elem = container.querySelectorAll('.slider-container.disabled')[0];

    expect(elem)
      .toBeInTheDocument();

    expect(container.firstChild)
      .toMatchSnapshot();
  });
  test('is Slider render right if set value?', () => {
    const { container } = render(<Slider value={50} name="test" />);
    const slider = container.querySelectorAll('.slider-handle')[0];

    expect(slider)
      .toHaveAttribute('aria-valuemax', '100');

    expect(slider)
      .toHaveAttribute('aria-valuemin', '0');

    expect(slider)
      .toHaveAttribute('aria-valuenow', '50');

    expect(container.firstChild)
      .toMatchSnapshot();
  });
});
describe('Check Slider attributes test collection', () => {
  test('is Slider work right if isDisabled attrubites set?', () => {
    const onFocus = jest.fn();
    const { container } = render(<Slider isDisabled onFocus={onFocus} name="test" />);
    const wrapper = container.querySelectorAll('.slider-container')[0];

    expect(wrapper)
      .toHaveClass('disabled');

    fireEvent.focus(wrapper);

    expect(wrapper)
      .not
      .toHaveFocus();
  });
  test('is Slider work right if defaultValue set?', () => {
    const validValue = 50;
    const validName = 'test';
    const { container } = render(<Slider defaultValue={validValue} name={validName} />);
    const slider = container.querySelectorAll('.slider-handle')[0];

    expect(slider)
      .toHaveAttribute('aria-valuenow', String(validValue));
  });
  test('is Slider work right if hasTooltip set?', () => {
    const validValue = 50;
    const validName = 'test';
    const showTooltip = true;
    const hideTooltip = false;
    const { container, rerender, getByText } = render(<Slider hasTooltip={showTooltip} value={validValue} name={validName} />);
    const tooltip = container.querySelectorAll('.tooltip-inner')[0];

    expect(tooltip)
      .toBeInTheDocument();

    expect(getByText(String(validValue)))
      .toBeInTheDocument();

    rerender(<Slider hasTooltip={hideTooltip} value={validValue} name={validName} />);

    expect(tooltip)
      .not
      .toBeInTheDocument();
  });
  test('is Slider work right with different labelType value?', () => {
    const validValue = 50;
    const validName = 'test';
    const currentLabelType = 'current';
    const minmaxLabelType = 'minmax';
    const { container, rerender, getByText } = render(<Slider labelType={currentLabelType} value={validValue} name={validName} />);
    const label = container.querySelectorAll('.slider-label')[0];

    expect(label)
      .toBeInTheDocument();

    expect(getByText(String(validValue)))
      .toBeInTheDocument();

    rerender(<Slider labelType={minmaxLabelType} value={validValue} name={validName} />);

    expect(container.querySelectorAll('.slider-label'))
      .toHaveLength(2);

    expect(getByText('0'))
      .toBeInTheDocument();

    expect(getByText('100'))
      .toBeInTheDocument();
  });
  test('is Slider work right if max attributes set?', () => {
    const validValue = 50;
    const validName = 'test';
    const max = 60;
    const { container, getByText } = render(<Slider max={max} value={validValue} name={validName} />);
    const slider = container.querySelectorAll('.slider-handle')[0];

    expect(getByText(String(max)))
      .toBeInTheDocument();

    expect(slider)
      .toHaveAttribute('aria-valuemax', String(max));
  });
  test('is Slider work right if min attributes set?', () => {
    const validValue = 50;
    const validName = 'test';
    const min = 20;
    const { container, getByText, debug } = render(<Slider min={min} value={validValue} name={validName} />);
    const slider = container.querySelectorAll('.slider-handle')[0];

    expect(getByText(String(min)))
      .toBeInTheDocument();

    expect(slider)
      .toHaveAttribute('aria-valuemin', String(min));
  });
  test('is Slider work right if units attributes set?', () => {
    const validValue = 4;
    const validName = 'test';
    const { container } = render(<Slider hasTooltip unitsRender={() => 'pounds'} labelType="minmax" value={validValue} name={validName} />);

    expect(container.querySelectorAll('.tooltip-inner')[0].innerHTML)
      .toEqual(String(4));

    expect(container.querySelectorAll('.slider-label')[0].innerHTML)
      .toEqual('0 pounds');

    expect(container.querySelectorAll('.slider-label')[1].innerHTML)
      .toEqual('100 pounds');
  });
  test.skip('is Slider work right if minRange attributes set?', () => {
    /**
     * ВВ
     * В старых тестах проверяется только то, что данные из HTML
     * атрибута в компонент были переданы. Сравнивается мессиав props
     * компонента, с тем что было написано в HTML.
     * Саму работу проверить нельзя
     * @reat-test-library не дает возможности сделать проверку
     * полученных значений porps
     * Реализовать
     * https://stackoverflow.com/questions/58623666/test-if-a-component-is-rendered-with-the-right-props-with-react-testing-library
     * мне не удалось
     */
  });
  test('is Slider work right if step attributes set?', () => {
  });
  test('is Slider work right with different attributes _with50, _with30 etc set?', () => {
    const validValue = 4;
    const validName = 'test';
    const { container, rerender } = render(<Slider _width-50 value={validValue} name={validName} />);

    expect(container.querySelectorAll('.slider-wrapper')[0])
      .toHaveClass('width-50');

    rerender(<Slider _width-30 value={validValue} name={validName} />);

    expect(container.querySelectorAll('.slider-wrapper')[0])
      .toHaveClass('width-30');
  });
});
describe('Check Slider event test collection', () => {
  test('is Slider work right with onChange event listener?', () => {
    const validValue = 4;
    const validName = 'test';
    const onChange = jest.fn();
    const { container } = render(<Slider value={validValue} name={validName} onChange={onChange} />);
    const slider = container.querySelectorAll('.slider-handle')[0];
    const startPosition = { clientX: 5, clientY: 5 };
    const finishPosition = { clientX: 150, clientY: 5 };

    /**
     * ВВ
     * К сожалению, ни как не получается добиться реального "таскания"
     * ползунка. В этих двух тестах можно проверить наличие события
     * и его формат. Но значение - нет
     * Нужно вносить изменение в сам компонент, так чтобы внутри него был <input />
     * Тогда можно будет вызывать
     *
     * fireEvent.input()
     */
    fireEvent.mouseEnter(slider, startPosition);
    fireEvent.mouseDown(slider, startPosition);
    fireEvent.mouseMove(slider, finishPosition);
    fireEvent.mouseUp(slider);

    expect(onChange)
      .toHaveBeenCalled();

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: validValue,
        }),
      }));
  });
  test('is Slider work right with onMove event listener?', () => {
    const validValue = 4;
    const validName = 'test';
    const onMove = jest.fn();
    const { container } = render(<Slider value={validValue} name={validName} onMove={onMove} />);
    const slider = container.querySelectorAll('.slider-handle')[0];
    const startPosition = { clientX: 5, clientY: 5 };
    const finishPosition = { clientX: 150, clientY: 5 };

    fireEvent.mouseEnter(slider, startPosition);
    fireEvent.mouseDown(slider, startPosition);
    fireEvent.mouseMove(slider, finishPosition);
    fireEvent.mouseUp(slider);

    expect(onMove)
      .toHaveBeenCalled();

    expect(onMove)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: NaN,
        }),
      }));
  });
});
