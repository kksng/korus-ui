import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import shortid from 'shortid';
import userEvent from '@testing-library/user-event';
import { Notifications } from './index';
import { ChangeEvent, Item } from './types';
import { Button } from '../Button';

jest.useFakeTimers();

describe('Notifications SNAPSHOTS', () => {
  it('should render basic usage', () => {
    const items = [
      {
        color: 'success',
        delay: 10,
        icon: 'success',
        id: 1,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
      {
        color: 'danger',
        delay: 15,
        icon: 'danger',
        id: 2,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
    ];

    const onChange = jest.fn();

    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        method: 'delay',
        value: expect.any(Array),
      }),
    });

    const { container } = render(
      <Notifications
        value={items}
        onChange={onChange}
        maxItems={3}
      />,
    );

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(2);

    expect(container).toMatchSnapshot();

    jest.advanceTimersByTime(100);

    expect(onChange).toHaveBeenCalledTimes(2);

    expect(onChange).toHaveBeenCalledWith(eventMatcher);
  });

  it('should render items < maxItems', () => {
    const items = [
      {
        color: 'success',
        delay: 10,
        icon: 'success',
        id: 1,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
      {
        color: 'danger',
        delay: 10,
        icon: 'danger',
        id: 2,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
      {
        color: 'danger',
        delay: 10,
        icon: 'danger',
        id: 3,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
      {
        color: 'danger',
        delay: 10,
        icon: 'danger',
        id: 4,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
      {
        color: 'danger',
        delay: 10,
        icon: 'danger',
        id: 5,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
    ];

    const { container } = render(
      <Notifications
        value={items}
        onChange={jest.fn()}
        maxItems={3}
      />,
    );

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(3);

    expect(container).toMatchSnapshot();
  });

  it('should render action button', () => {
    const items = [
      {
        color: 'success',
        delay: 10,
        icon: 'success',
        id: 1,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
      {
        color: 'danger',
        delay: 15,
        icon: 'danger',
        id: 2,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
    ];

    const { container } = render(
      <Notifications
        value={items}
        onChange={jest.fn()}
        actionButtonRender={() => <Button>text</Button>}
        maxItems={3}
      />,
    );

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(2);

    expect(container.querySelectorAll('button')).toHaveLength(2);

    expect(container.querySelector('button')?.textContent).toEqual('text');

    expect(container).toMatchSnapshot();
  });
});

describe('Notifications handlers', () => {
  it('should trigger onChange close', () => {
    const items = [
      {
        color: 'success',
        delay: 10,
        icon: 'success',
        id: 1,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
      {
        color: 'danger',
        delay: 15,
        icon: 'danger',
        id: 2,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
    ];

    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        method: 'delay',
        value: expect.any(Array),
      }),
    });

    const Wrapper = () => {
      const [value, setValue] = React.useState<Item[]>(items);

      const handleChange = (ev: ChangeEvent) => {
        expect(ev).toMatchObject(eventMatcher);

        setValue(ev.component.value);
      };

      return (
        <Notifications
          value={value}
          onChange={handleChange}
          maxItems={3}
        />
      );
    };

    const { container } = render(<Wrapper />);

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(2);

    expect(container).toMatchSnapshot();

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(0);

    expect(container).toMatchSnapshot();
  });

  it('should not delete items with delay 0', () => {
    const items = [
      {
        color: 'success',
        delay: 0,
        icon: 'success',
        id: 1,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
      {
        color: 'danger',
        delay: 15,
        icon: 'danger',
        id: 2,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
    ];

    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        method: 'delay',
        value: expect.any(Array),
      }),
    });

    const Wrapper = () => {
      const [value, setValue] = React.useState<Item[]>(items);

      const handleChange = (ev: ChangeEvent) => {
        expect(ev).toMatchObject(eventMatcher);

        setValue(ev.component.value);
      };

      return (
        <Notifications
          value={value}
          onChange={handleChange}
          maxItems={3}
        />
      );
    };

    const { container } = render(<Wrapper />);

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(2);

    expect(container).toMatchSnapshot();

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(1);

    expect(container).toMatchSnapshot();
  });

  it('should delete items by close icon click', () => {
    const items = [
      {
        color: 'success',
        delay: 0,
        icon: 'success',
        id: 1,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
      {
        color: 'danger',
        delay: 0,
        icon: 'danger',
        id: 2,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
    ];

    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        method: 'close-icon-click',
        value: expect.any(Array),
      }),
    });

    const Wrapper = () => {
      const [value, setValue] = React.useState<Item[]>(items);

      const handleChange = (ev: ChangeEvent) => {
        expect(ev).toMatchObject(eventMatcher);

        setValue(ev.component.value);
      };

      return (
        <Notifications
          value={value}
          onChange={handleChange}
          maxItems={3}
        />
      );
    };

    const { container } = render(<Wrapper />);

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(2);

    expect(container).toMatchSnapshot();

    act(() => {
      const icon = container.querySelector('.notifications-icon-close');

      expect(icon).toBeDefined();

      userEvent.click(icon as HTMLElement);
    });

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(1);

    act(() => {
      const icon = container.querySelector('.notifications-icon-close');

      expect(icon).toBeDefined();

      userEvent.click(icon as HTMLElement);
    });

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(0);

    expect(container).toMatchSnapshot();
  });

  it('should pass deleted item to onChange handler as component.currentItem', () => {
    const item1 = {
      color: 'success',
      delay: 0,
      icon: 'success',
      id: 1,
      text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
    };
    const item2 = {
      color: 'danger',
      delay: 0,
      icon: 'danger',
      id: 2,
      text: 'Прочь сомнения!',
    };
    const items = [
      item1,
      item2,
    ];

    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        currentItem: expect.objectContaining(item2),
        method: 'close-icon-click',
        value: expect.any(Array), // should receive removed item
      }),
    });

    const Wrapper = () => {
      const [value, setValue] = React.useState<Item[]>(items);

      const handleChange = (ev: ChangeEvent) => {
        expect(ev).toMatchObject(eventMatcher);

        setValue(ev.component.value);
      };

      return (
        <Notifications
          value={value}
          onChange={handleChange}
          maxItems={3}
        />
      );
    };

    const { container } = render(<Wrapper />);

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(2);

    act(() => {
      const item2CloseIcon = container.querySelectorAll('.notifications-icon-close')[1]; // get item2 close icon

      expect(item2CloseIcon).toBeDefined();

      userEvent.click(item2CloseIcon as HTMLElement);
    });

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(1);
  });
});

describe('Notifications add item', () => {
  it('should add new item', () => {
    const items = [
      {
        color: 'success',
        delay: 10,
        icon: 'success',
        id: 1,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
    ];

    const item = {
      color: 'danger',
      delay: 10,
      icon: 'danger',
      id: 2,
      text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
    };

    const Wrapper = () => {
      const [value, setValue] = React.useState<Item[]>(items);

      const handleChange = (ev: ChangeEvent) => {
        setValue(ev.component.value);
      };

      const addNewItem = () => setValue([...value, item]);

      return (
        <>
          <Notifications
            value={value}
            onChange={handleChange}
            maxItems={3}
          />
          <Button onClick={() => addNewItem()} />
        </>
      );
    };

    const { container } = render(<Wrapper />);

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(1);

    act(() => {
      const button = container.querySelector('button');

      expect(button).toBeDefined();

      userEvent.click(button as HTMLElement);
    });

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(2);

    expect(container).toMatchSnapshot();
  });

  it('should add new items and delete more than maxItems', () => {
    const items = [
      {
        color: 'success',
        delay: 10,
        icon: 'success',
        id: 1,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
      {
        color: 'success',
        delay: 10,
        icon: 'success',
        id: 3,
        text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
      },
    ];

    const item = {
      color: 'danger',
      delay: 10,
      icon: 'danger',
      text: 'Сомнение определяет <a href="#">эмпирический катарсис</a>, не&nbsp;учитывая мнения авторитетов.',
    };

    const Wrapper = () => {
      const [value, setValue] = React.useState<Item[]>(items);

      const handleChange = (ev: ChangeEvent) => {
        setValue(ev.component.value);
      };

      const addNewItem = () => {
        setValue([...value, { ...item, id: shortid.generate() }]);
      };

      return (
        <>
          <Notifications
            value={value}
            onChange={handleChange}
            maxItems={3}
          />
          <Button onClick={() => addNewItem()} />
        </>
      );
    };

    const { container } = render(<Wrapper />);

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(2);

    act(() => {
      const button = container.querySelector('button');

      expect(button).toBeDefined();

      userEvent.click(button as HTMLElement);
    });

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(3);

    act(() => {
      const button = container.querySelector('button');

      expect(button).toBeDefined();

      userEvent.click(button as HTMLElement);
    });

    expect(container.querySelectorAll('.notifications-item')).toHaveLength(3);

    act(() => {
      const button = container.querySelector('button');

      expect(button).toBeDefined();

      userEvent.click(button as HTMLElement);
    });
    // не более 3 элементов за раз
    expect(container.querySelectorAll('.notifications-item')).toHaveLength(3);

    expect(container).toMatchSnapshot();
  });
});
