import React from 'react';
import {
  getNodeText, render, screen, fireEvent,
} from '@testing-library/react';
import last from 'lodash/last';
import userEvent from '@testing-library/user-event';
import { DropDownSelect } from './index';

describe('DropDownSelect SNAPSHOTS', () => {
  test('should render', () => {
    const data = [
      { id: 0, value: 'value0' },
      { id: 1, value: 'value1' },
    ];

    const wrapper = render((
      <DropDownSelect data={data} />
    ));

    expect(wrapper).toMatchSnapshot();
  });

  describe('controllable mode', () => {
    test('should render value', () => {
      const data = [
        { id: 0, value: 'value0' },
        { id: 1, value: 'value1' },
      ];

      const wrapper = render((
        <DropDownSelect textField="value" value={data[0]} data={data} />
      ));

      expect(screen.getByRole('textbox')).toHaveValue(data[0].value);
      expect(wrapper).toMatchSnapshot();

      wrapper.rerender((
        <DropDownSelect textField="value" value={data[1]} data={data} />
      ));

      expect(screen.getByRole('textbox')).toHaveValue(data[1].value);
      expect(wrapper).toMatchSnapshot();
    });

    test('should render data', () => {
      const data = [
        { id: 0, value: 'value0' },
        { id: 1, value: 'value1' },
      ];
      const wrapper = render((
        <DropDownSelect data={data.map((value) => value.value)} isOpen />
      ));

      screen.getByRole('textbox').focus();

      expect(screen.getAllByRole('listitem')).toHaveLength(data.length);
      expect(screen.getAllByRole('listitem').map(getNodeText)).toEqual(data.map((value) => value.value));
      expect(wrapper).toMatchSnapshot();

      screen.getByRole('textbox').blur();

      wrapper.rerender((
        <DropDownSelect data={data} textField="value" isOpen />
      ));

      screen.getByRole('textbox').focus();

      expect(screen.getAllByRole('listitem')).toHaveLength(data.length);
      expect(screen.getAllByRole('listitem').map(getNodeText)).toEqual(data.map((value) => value.value));
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('should test different component states', () => {
    test('should be isOpen', () => {
      const data = [
        { id: 0, value: 'value0' },
        { id: 1, value: 'value1' },
      ];

      const wrapper = render((
        <DropDownSelect textField="value" data={data} isOpen />
      ));

      expect(screen.getAllByRole('listitem')).toHaveLength(2);
      expect(wrapper).toMatchSnapshot();
    });

    test('should be disabled', () => {
      const wrapper = render((
        <DropDownSelect data={['0']} isDisabled />
      ));

      expect(screen.getByRole('textbox')).toBeDisabled();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('multi-type attributes', () => {
    describe('data', () => {
      test('should render string data', () => {
        const data = ['value0', 'value1'];

        const wrapper = render((
          <DropDownSelect data={data} isOpen />
        ));

        expect(screen.getAllByRole('listitem')).toHaveLength(2);
        expect(wrapper).toMatchSnapshot();
      });

      test('should render object data', () => {
        const data = [
          { id: 0, value: 'value0' },
          { id: 1, value: 'value1' },
        ];

        const wrapper = render((
          <DropDownSelect data={data} textField="value" isOpen />
        ));

        expect(screen.getAllByRole('listitem')).toHaveLength(2);
        expect(wrapper).toMatchSnapshot();
      });
    });

    test('should render string placeholder', () => {
      const placeholder = 'placeholder';

      const wrapper = render((
        <DropDownSelect data={['0']} placeholder={placeholder} />
      ));

      expect(screen.getAllByPlaceholderText(placeholder)).toHaveLength(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('DropDownSelect HANDLERS', () => {
  test('should handle keydown enter', () => {
    const handleEnterPress = jest.fn();

    const data = [
      { id: 0, value: 'value0' },
      { id: 1, value: 'value1' },
    ];

    render((
      <DropDownSelect data={data} onEnterPress={handleEnterPress} />
    ));

    fireEvent.keyDown(screen.getByRole('textbox'), {
      key: 'Enter',
    });

    expect(handleEnterPress).toBeCalledTimes(1);
  });

  test('should trigger onChange and have correct event format', () => {
    const onChangeHandler = jest.fn();
    const name = 'name';
    const data = [
      { id: 0, value: 'value0' },
      { id: 1, value: 'value1' },
    ];
    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        name,
        value: data[1],
      }),
      target: expect.objectContaining({
        value: data[1],
      }),
    });

    render((
      <DropDownSelect textField="value" name={name} isOpen onChange={onChangeHandler} data={data} />
    ));

    screen.getAllByRole('listitem')[1].click();

    expect(onChangeHandler).toBeCalledTimes(1);
    expect(onChangeHandler).lastCalledWith(eventMatcher);
  });

  test('should trigger onFilterChange by typing', () => {
    const onFilterChangeHandler = jest.fn();
    const name = 'name';
    const value = 'value';
    const data = [
      { id: 0, value: 'value0' },
      { id: 1, value: 'value1' },
    ];
    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        name,
        value,
      }),
      target: expect.objectContaining({
        value,
      }),
    });

    render((
      <DropDownSelect textField="value" name={name} isOpen onFilterChange={onFilterChangeHandler} shouldFilterValues data={data} />
    ));

    userEvent.type(screen.getByRole('textbox'), value);

    expect(onFilterChangeHandler).toBeCalledTimes(value.length);
    expect(onFilterChangeHandler).lastCalledWith(eventMatcher);
  });

  test('should trigger onFilterChange by suggestion click', () => {
    const onFilterChangeHandler = jest.fn();
    const name = 'name';
    const value = 'value1';
    const data = [
      { id: 0, value: 'value0' },
      { id: 1, value: 'value1' },
    ];
    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        name,
        value,
      }),
    });

    render((
      <DropDownSelect textField="value" name={name} isOpen onFilterChange={onFilterChangeHandler} shouldFilterValues data={data} />
    ));

    screen.getByRole('textbox')?.focus();

    const listItem = last(document.querySelectorAll('.suggestion-item'));

    expect(listItem).toBeDefined();
    userEvent.click(listItem as HTMLElement);

    expect(onFilterChangeHandler).toBeCalledTimes(1);
    expect(onFilterChangeHandler).lastCalledWith(eventMatcher);
  });
});

describe('DropDownSelect ATTRIBUTES', () => {
  test('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = render((
      <DropDownSelect data={['0']} _box />
    ));

    expect(document.querySelector('div.dropdownselect-wrapper')).toHaveClass('box');

    wrapper.rerender((
      <DropDownSelect data={['0']} _active />
    ));

    expect(document.querySelector('div.dropdownselect-wrapper')).not.toHaveClass('box');
    expect(document.querySelector('div.dropdownselect-wrapper')).toHaveClass('active');

    wrapper.rerender((
      <DropDownSelect data={['0']} _active className="test" />
    ));

    expect(document.querySelector('div.dropdownselect-wrapper')).not.toHaveClass('box');
    expect(document.querySelector('div.dropdownselect-wrapper')).toHaveClass('active');
    expect(document.querySelector('div.dropdownselect-wrapper')).toHaveClass('test');
  });

  test('should display loader if dataLoading', () => {
    const wrapper = render((
      <DropDownSelect data={['0']} isOpen isLoading _box />
    ));

    expect(document.querySelectorAll('div.loader-wrapper')).toHaveLength(1);
    expect(document.querySelectorAll('span.loader-element')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  test('should display noDataTemplate if no data', () => {
    const value = 'no data we are sorry';
    const noSuggestionsRender = () => (
      <span className="nodata">{value}</span>
    );
    const wrapper = render((
      <DropDownSelect isOpen noSuggestionsRender={noSuggestionsRender} _box />
    ));

    expect(document.querySelector('span.nodata')).toHaveTextContent(value);
    expect(wrapper).toMatchSnapshot();
  });

  test('should display custom values with string data', () => {
    const data = ['one', 'two'];
    const placeholder = 'placeholder';
    const transform = (value: string) => `--${value}--`;
    const itemRender = ({
      Element, elementProps,
    }: any) => (
      <Element {...elementProps}>{transform(elementProps.children)}</Element>
    );

    const wrapper = render(<DropDownSelect
      data={data}
      placeholder="placeholder"
      isOpen
      itemRender={itemRender}
      shouldAllowEmpty
    />);

    expect(screen.getAllByRole('listitem')).toHaveLength(1 + data.length);
    expect(screen.getAllByRole('listitem').map(getNodeText)).toEqual([placeholder, ...data].map(transform));
    expect(wrapper).toMatchSnapshot();
  });

  test('should render custom values with object data', () => {
    const data = [
      { id: 0, value: 'value0' },
      { id: 1, value: 'value1' },
    ];
    const transform = (value: string) => `--${value}--`;
    const itemRender = ({
      elementProps,
    }: any) => (
      <li {...elementProps}>{transform(elementProps.children)}</li>
    );

    const wrapper = render((
      <DropDownSelect
        data={data}
        placeholder="placeholder"
        textField="value"
        isOpen
        itemRender={itemRender}
      />
    ));

    expect(screen.getAllByRole('listitem').map(getNodeText)).toEqual(data.map((value) => transform(value.value)));
    expect(wrapper).toMatchSnapshot();
  });

  test('should display custom values with JSX', () => {
    const data = ['one', 'two'];
    const transform = (value: string) => `--${value}--`;
    const itemRender = ({
      elementProps,
    }: any) => (
      <li {...elementProps}>{transform(elementProps.children)}</li>
    );

    const wrapper = render(<DropDownSelect
      data={data}
      placeholder="placeholder"
      isOpen
      itemRender={itemRender}
    />);

    expect(screen.getAllByRole('listitem').map(getNodeText)).toEqual(data.map(transform));
    expect(wrapper).toMatchSnapshot();
  });

  describe('compareObjectsBy', () => {
    test('should set defaultValue as selected', () => {
      const data = [
        { id: 0, value: 'value0' },
        { id: 1, value: 'value1' },
      ];

      render(
        <DropDownSelect
          data={data}
          isOpen
          textField="value"
          defaultValue={{ ...data[0] }}
          compareObjectsBy="id"
        />,
      );

      expect(document.querySelector('li.selected')?.textContent).toEqual(data[0].value);
    });

    it('should not work if the string does not match data objects structure', () => {
      const data = [
        { id: 0, value: 'value0' },
        { id: 1, value: 'value1' },
      ];

      render(
        <DropDownSelect
          data={data}
          isOpen
          textField="value"
          defaultValue={{ ...data[0] }}
          compareObjectsBy="INVALID"
        />,
      );

      expect(document.querySelectorAll('li.selected')).toHaveLength(0);
    });

    it('should use function as value', () => {
      const data = [
        { id: 0, value: 'value0' },
        { id: 1, value: 'value1' },
      ];

      render(
        <DropDownSelect
          data={data}
          isOpen
          textField="value"
          defaultValue={{ ...data[0] }}
          compareObjectsBy={(item) => item.id}
        />,
      );

      expect(document.querySelector('li.selected')?.textContent).toEqual(data[0].value);
    });

    it('should not work if function return value does not match data objects structure', () => {
      const data = [
        { id: 0, value: 'value0' },
        { id: 1, value: 'value1' },
      ];

      render(
        <DropDownSelect
          data={data}
          isOpen
          textField="value"
          defaultValue={{ ...data[0] }}
          // @ts-ignore
          compareObjectsBy={(item) => item.INVALID}
        />,
      );

      expect(document.querySelectorAll('li.selected')).toHaveLength(0);
    });

    it('should set value as selected', () => {
      const data = [
        { id: 0, value: 'value0' },
        { id: 1, value: 'value1' },
      ];

      render(
        <DropDownSelect
          data={data}
          isOpen
          textField="value"
          value={{ ...data[0] }}
          compareObjectsBy={(item) => item.id}
        />,
      );

      expect(document.querySelector('li.selected')?.textContent).toEqual(data[0].value);
    });
  });
});

describe('DropDownSelect VALIDATION', () => {
  it('should be invalid if component is isRequired, value is empty and onBlur was called', async () => {
    render((
      <DropDownSelect placeholder="placeholder" form="form" name="name" isRequired />
    ));

    screen.getByRole('textbox').focus();
    screen.getByRole('textbox').blur();

    expect(document.querySelector('div.dropdownselect-input-wrapper')).toHaveClass('danger');
  });
});
