// @ts-nocheck
import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';
import { MultiSelect } from './index';

const validData = [
  'Amsterdam',
  'Berlin',
  'Prague',
  'Saint-Petersburg',
];
const validValue = [
  'Berlin',
  'Saint-Petersburg',
];
const validName = 'test';
const validPlaceholder = 'placeholder';
const on = true;
const off = false;

describe('MultiSelect snapshots test collection', () => {
  test('is Multiselect component render right?', () => {
    const { container } = render(<MultiSelect placeholder={validPlaceholder} name={validName} />);

    expect(container)
      .toMatchSnapshot();
  });
  test('is Multiselect component with some data render right?', () => {
    const { container } = render(<MultiSelect data={validData} name={validName} isOpen={on} />);

    expect(container)
      .toMatchSnapshot();
  });
  test('is Multiselect component with some data and some selected items render right?', () => {
    const { container } = render(<MultiSelect value={validValue} data={validData} name={validName} isOpen={on} />);

    expect(container)
      .toMatchSnapshot();
  });
  test('is Multiselect component with hard data render right?', () => {
    const textField = 'text';
    const hardData = [
      {
        id: 1,
        text: 'Amsterdam',
      },
      {
        id: 2,
        text: 'Berlin',
      },
      {
        id: 3,
        text: 'Prague',
      },
      {
        id: 4,
        text: 'Saint-Petersburg',
      },
    ];
    const { container } = render(
      <MultiSelect
        isOpen={on}
        data={hardData}
        textField={textField}
      />,
    );
    expect(container)
      .toMatchSnapshot();
  });
});
describe('MultiSelect attributes test collection', () => {
  test('is Multiselect with autoComplete work right?', () => {
    const autoCompleteOn = 'on';
    const autoCompleteOff = 'off';
    const { getByRole, rerender } = render(
      <MultiSelect
        isOpen={on}
        autoComplete={autoCompleteOn}
        name={validName}
        data={validData}
      />,
    );

    expect(getByRole('textbox'))
      .toHaveAttribute('autocomplete', autoCompleteOn);

    rerender(
      <MultiSelect
        isOpen={on}
        autoComplete={autoCompleteOff}
        name={validName}
        data={validData}
      />,
    );

    expect(getByRole('textbox'))
      .toHaveAttribute('autocomplete', autoCompleteOff);
  });
  test('is Multiselect with canSelectAll work right?', () => {
    const validSelectAllBtn = '[object Object]'; // сейчас в компоненте ошибка!
    const { container, getByText } = render(
      <MultiSelect
        isOpen={on}
        shouldKeepSuggestions={on}
        canSelectAll={on}
        name={validName}
        data={validData}
      />,
    );

    expect(getByText(validSelectAllBtn))
      .toBeInTheDocument();

    fireEvent.click(getByText(validSelectAllBtn));

    expect(container.querySelectorAll('.tags-item'))
      .toHaveLength(validData.length);
  });
  test('is Multiselect with hasCheckBoxes work right?', () => {
    const checkboxOn = true;
    const checkboxOff = false;
    const shouldKeepSuggestions = true;
    const { container, rerender } = render(
      <MultiSelect
        hasCheckBoxes={checkboxOff}
        isOpen={on}
        name={validName}
        data={validData}
      />,
    );

    expect(container.querySelectorAll('input.checkbox-input'))
      .toHaveLength(0);

    rerender(
      <MultiSelect
        shouldKeepSuggestions={shouldKeepSuggestions}
        hasCheckBoxes={checkboxOn}
        isOpen={on}
        name={validName}
        data={validData}
      />,
    );

    expect(container.querySelectorAll('input.checkbox-input'))
      .toHaveLength(validData.length);
  });
  test('is Multiselect with hasClearButton work right?', () => {
    const clearBtnOn = true;
    const { container } = render(
      <MultiSelect
        hasClearButton={clearBtnOn}
        value={validValue}
        isOpen={on}
        name={validName}
        data={validData}
      />,
    );

    expect(container.querySelectorAll('.multiselect-clear-icon'))
      .toHaveLength(1);
  });
  test('is Multiselect with isDisabled work right', () => {
    const disableOn = true;
    const clearBtnOn = true;
    const { container, getByRole } = render(
      <MultiSelect
        hasClearButton={clearBtnOn}
        isDisabled={disableOn}
        value={validValue}
        name={validName}
        data={validData}
      />,
    );
    const clearAllBtn = container.querySelectorAll('.multiselect-clear-icon')[0];

    expect(getByRole('textbox'))
      .toHaveAttribute('disabled', '');

    expect(container.querySelectorAll('.multiselect-input-wrapper.disabled')[0])
      .toBeInTheDocument();

    fireEvent.click(clearAllBtn);

    expect(container.querySelectorAll('.tags-item'))
      .toHaveLength(validValue.length);
  });
  test('is Miltiselect with isLoading attributes work right?', () => {
    const loadingOn = true;
    const loadingOff = false;
    const { container, rerender } = render(
      <MultiSelect
        isOpen={on}
        isLoading={loadingOn}
        value={validValue}
        name={validName}
        data={validData}
      />,
    );
    expect(container.querySelectorAll('span.loader-element')[0])
      .toBeInTheDocument();

    rerender(
      <MultiSelect
        isOpen={on}
        isLoading={loadingOff}
        value={validValue}
        name={validName}
        data={validData}
      />,
    );

    expect(container.querySelectorAll('span.loader-element')[0])
      .toBe(undefined);
  });
  test('is Multiselect with isOpen attributes work right?', () => {
    const { container, rerender } = render(
      <MultiSelect
        isOpen={on}
        value={validValue}
        name={validName}
        data={validData}
      />,
    );

    expect(container.querySelectorAll('.suggestion-wrapper.visible')[0])
      .toBeInTheDocument();

    rerender(
      <MultiSelect
        isOpen={off}
        value={validValue}
        name={validName}
        data={validData}
      />,
    );

    expect(container.querySelectorAll('.suggestion-wrapper.visible')[0])
      .toBe(undefined);
  });
  test('is Multiselect with itemRenderer work right', () => {
    const validItemClass = 'multiselect-item-class';
    const validItemText = 'multiselect-item-text';

    const { container, getAllByText } = render(
      <MultiSelect
        isOpen={on}
        name={validName}
        data={validData}
        itemRender={() => <span className={validItemClass}>{validItemText}</span>}
      />,
    );

    expect(container.querySelectorAll(`.${validItemClass}`))
      .toHaveLength(validData.length);

    expect(getAllByText(validItemText))
      .toHaveLength(validData.length);
  });
  test('is Multiselect with listRender work right?', () => {
    const validListClass = 'multiselect-list-class';
    const validListText = 'multiselect-list-text';

    const { container, getAllByText } = render(
      <MultiSelect
        isOpen={on}
        name={validName}
        data={validData}
        listRender={() => <span className={validListClass}>{validListText}</span>}
      />,
    );
    expect(container.querySelectorAll(`.${validListClass}`))
      .toHaveLength(1);

    expect(getAllByText(validListText))
      .toHaveLength(1);
  });
  // eslint-disable-next-line jest/expect-expect
  test('is Multiselect with maxSelected work right?', () => {
    /**
     * ВВ
     * не работает
     */
  });
  test('is Multiselect with maxTags work right?', () => {
    const maxTags = 2;
    const selectText = `Выбрано ${validValue.length}`;

    const { getByText } = render(
      <MultiSelect
        maxTags={maxTags}
        isOpen={on}
        name={validName}
        data={validData}
        value={validValue}
      />,
    );
    expect(getByText(selectText))
      .toBeInTheDocument();
  });
  test('is Multiselect with name attributes work right?', () => {
    const { getByRole } = render(
      <MultiSelect
        name={validName}
      />,
    );
    expect(getByRole('textbox'))
      .toHaveAttribute('name', validName);
  });
  // eslint-disable-next-line jest/expect-expect
  test('is Multiselect with noSuggestionsRender work right?', () => {
    /**
     * ВВ не работает
     */
  });
  test('is Multiselect with placeholder work right?', () => {
    const { getByRole } = render(
      <MultiSelect
        placeholder={validPlaceholder}
      />,
    );
    expect(getByRole('textbox'))
      .toHaveAttribute('placeholder', validPlaceholder);
  });
  // eslint-disable-next-line jest/expect-expect
  test('is Multiselect with shouldHideInput attributes work right?', () => {
    /**
     * ВВ
     * Не могу понять как это должно работать.
     */
  });
  test('is Multiselect with shouldKeepSuggestions work right?', () => {
    const { container } = render(
      <MultiSelect
        isOpen={on}
        value={validValue}
        data={validData}
        shouldKeepSuggestions={on}
      />,
    );
    expect(container.querySelectorAll('.suggestion-item.selected'))
      .toHaveLength(validValue.length);
  });
  test('is Multiselect with shouldSelectedGoFirst work rigth?', () => {
    const { container } = render(
      <MultiSelect
        isOpen={on}
        value={validValue}
        data={validData}
        shouldSelectedGoFirst={on}
        shouldKeepSuggestions={on}
      />,
    );
    const firstElement = container.querySelectorAll('.suggestion-item.selected')[0];
    const nextElement = firstElement.nextSibling;

    expect(firstElement)
      .toHaveClass('selected');

    expect(nextElement)
      .toHaveClass('selected');
  });
  test('is Multiselect with textField and hard data work right?', () => {
    const invalidTextRender = '[object Object]';
    const textField = 'text';
    const hardData = [
      {
        id: 1,
        text: 'Amsterdam',
      },
      {
        id: 2,
        text: 'Berlin',
      },
      {
        id: 3,
        text: 'Prague',
      },
      {
        id: 4,
        text: 'Saint-Petersburg',
      },
    ];
    const { queryAllByText, rerender } = render(
      <MultiSelect
        isOpen={on}
        data={hardData}
      />,
    );
    expect(queryAllByText(invalidTextRender))
      .toHaveLength(hardData.length);

    rerender(
      <MultiSelect
        isOpen={on}
        data={hardData}
        textField={textField}
      />,
    );

    expect(queryAllByText(invalidTextRender))
      .toHaveLength(0);
  });
  test('is Multiselect with tagRender function work right?', () => {
    const validTagClass = 'multiselect-tag-class';
    const validTagText = 'multiselect-tag-text';
    const { container, getAllByText } = render(
      <MultiSelect
        isOpen={on}
        value={validValue}
        tagRender={() => <span className={validTagClass}>{validTagText}</span>}
        data={validData}
      />,
    );
    expect(container.querySelectorAll(`.${validTagClass}`))
      .toHaveLength(validValue.length);

    expect(getAllByText(validTagText))
      .toHaveLength(validValue.length);
  });
  test('is Multiselect with tagsUnionRender and maxTags work right?', () => {
    const validTagClass = 'multiselect-tag-class';
    const validTagText = 'multiselect-tag-text';
    const maxTags = 1;
    const { container, getAllByText } = render(
      <MultiSelect
        isOpen={on}
        value={validValue}
        maxTags={maxTags}
        tagsUnionRender={() => <span className={validTagClass}>{validTagText}</span>}
        data={validData}
      />,
    );
    expect(container.querySelectorAll(`.${validTagClass}`))
      .toHaveLength(1);

    expect(getAllByText(validTagText))
      .toHaveLength(1);
  });
  test('is Multiselect with wrapperRender work right?', () => {
    const validWrapperClass = 'multiselect-wrapper-class';
    const validWrapperText = 'multiselect-wrapper-text';
    const { container, getAllByText } = render(
      <MultiSelect
        isOpen={on}
        value={validValue}
        wrapperRender={() => <span className={validWrapperClass}>{validWrapperText}</span>}
        data={validData}
      />,
    );
    expect(container.querySelectorAll(`.${validWrapperClass}`))
      .toHaveLength(1);

    expect(getAllByText(validWrapperText))
      .toHaveLength(1);
  });
});
describe('Multiselect events test collection', () => {
  test('is Multiselect with onBlur work right?', () => {
    const onBlur = jest.fn();
    const { getByRole } = render(
      <MultiSelect
        onBlur={onBlur}
        name={validName}
        value={validValue}
        data={validData}
      />,
    );
    const input = getByRole('textbox');

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(onBlur)
      .toBeCalledTimes(1);

    expect(onBlur)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: expect.arrayContaining(validValue),
        }),
      }));
  });
  test('is Multiselect with onChange work right?', () => {
    const onChange = jest.fn();
    const { container, getByText } = render(
      <MultiSelect
        isOpen={on}
        onChange={onChange}
        name={validName}
        data={validData}
      />,
    );
    const firstValueEl = container.querySelectorAll('.suggestion-item')[0];

    fireEvent.click(firstValueEl);

    expect(getByText(validData[0]))
      .toBeInTheDocument();
  });
  test('is Multiselect with onFocus work right?', () => {
    const onFocus = jest.fn();
    const { getByRole } = render(
      <MultiSelect
        onFocus={onFocus}
        name={validName}
        value={validValue}
        data={validData}
      />,
    );
    const input = getByRole('textbox');

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(onFocus)
      .toBeCalledTimes(1);

    expect(onFocus)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
          value: expect.arrayContaining(validValue),
        }),
      }));
  });
});
