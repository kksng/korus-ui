import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckBox } from './index';
import { ChangeEvent } from './types';

describe('CheckBox SNAPSHOTS', () => {
  it('should render', () => {
    const { container } = render(<CheckBox id="test" />);

    expect(container.querySelector('input')).toBeDefined();

    expect(container.querySelector('label')).toBeDefined();

    expect(container).toMatchSnapshot();
  });

  it('should render controllable mode', () => {
    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        value: false,
        name: 'checker',
      }),
    });
    const Wrapper = () => {
      const [value, setValue] = React.useState(true);
      const handleChange = (ev: ChangeEvent) => {
        expect(ev).toMatchObject(eventMatcher);
        setValue(!value);
      };
      return (
        <CheckBox onChange={handleChange} id="test" name="checker" value={value} />
      );
    };
    const { container } = render(<Wrapper />);

    const input = document.querySelector('input');

    expect(input).toBeInTheDocument();

    expect(input?.checked).toBeTruthy();

    expect(container).toMatchSnapshot();

    const label = document.querySelector('label');

    expect(label).not.toEqual(null);

    userEvent.click(label as HTMLElement);

    expect(input?.checked).toBeFalsy();

    expect(container).toMatchSnapshot();
  });
});

describe('CheckBox HANDLERS', () => {
  it('should trigger onChange', () => {
    const onChange = jest.fn();
    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        value: true,
        name: 'chegevara',
      }),
    });
    const { container } = render(<CheckBox onChange={onChange} id="test" name="chegevara" />);

    const input = container.querySelector('input');

    expect(input).toBeInTheDocument();

    expect(input?.checked).toBeFalsy();

    userEvent.click(container.querySelector('label') as HTMLElement);

    expect(input?.checked).toBeTruthy();

    expect(onChange).toHaveBeenCalledTimes(1);

    expect(onChange).toHaveBeenCalledWith(eventMatcher);
  });

  describe('should trigger onClick', () => {
    it('should trigger onClick', () => {
      const onClick = jest.fn();

      const { container } = render(<CheckBox id="test" onClick={onClick} />);

      const input = container.querySelector('input');

      expect(input).toBeInTheDocument();

      expect(input?.checked).toBeFalsy();
      // кликнем по инпуту
      userEvent.click(container.querySelector('label') as HTMLElement);
      // проверим, что значение изменилось
      expect(input?.checked).toBeTruthy();

      // проверим, что был вызван обработик
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onChange if checkbox is disabled', () => {
      const onChange = jest.fn();
      const { container } = render(<CheckBox isDisabled onChange={onChange} />);
      const input = container.querySelector('input');

      expect(input).toBeInTheDocument();

      expect(input?.disabled).toBeTruthy();
      // вызываем click
      userEvent.click(container.querySelector('label') as HTMLElement);
      // проверим, что значение в инпуте не изменилось
      expect(input?.checked).toBeFalsy();
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});

describe('CheckBox ATTRIBUTES', () => {
  describe(', should add classname "semi" to wrapper', () => {
    it('should have className', () => {
      const { container } = render(<CheckBox isSemi />);

      expect(container.querySelector('input')).toHaveClass('checkbox-input');

      expect(container.querySelector('label')).toHaveClass('checkbox-label');

      expect(container.querySelector('label.checkbox-label')).toHaveClass('semi');
    });
  });

  describe('children prop', () => {
    it('children should have correct className', () => {
      const { container } = render(<CheckBox><div className="lvl1"><span className="lvl2">TEXT</span></div></CheckBox>);

      expect(container.querySelector('div.lvl1')).toBeInTheDocument();

      expect(container.querySelector('span.lvl2')).toBeInTheDocument();
    });

    it('should have children', () => {
      const { container } = render(<CheckBox><div className="lvl1"><span className="lvl2">TEXT</span></div></CheckBox>);

      expect(container.children).toBeInstanceOf(HTMLCollection);

      expect(container.querySelector('div.lvl1 span.lvl2')?.textContent).toEqual('TEXT');
    });

    it('children should be passed to .checkbox-label', () => {
      const { container } = render(<CheckBox><div className="lvl1"><span className="lvl2">TEXT</span></div></CheckBox>);

      expect(container.querySelector('.checkbox-label div.lvl1 span.lvl2')).toBeInTheDocument();
    });
  });
});
