import React from 'react';
import {
  render,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StatusBar } from './index';

const data = [
  { id: 'todo', labelText: 'To do' },
  { id: 'work', labelText: 'In progress' },
  { id: 'done', labelText: 'Done' },
];

const customData = [
  { id: '1', value: 'success' },
  { id: '2', value: 'danger' },
  { id: '3', value: 'progress' },
  { id: '4' },
];

describe('StatusBar SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = render((
      <StatusBar
        data={data}
        textField="labelText"
        value={data[0]}
      />
    ));

    expect(document.querySelectorAll('span')).toHaveLength(6);

    expect(document.querySelector('.first .statusbar-icon')).toHaveClass('progress');

    expect(wrapper).toMatchSnapshot();
  });
});

describe('StatusBar HANDLERS', () => {
  it('should trigger onClick', () => {
    const handleClick = jest.fn();

    render((
      <StatusBar
        onClick={handleClick}
        data={data}
        textField="labelText"
        value={data[0]}
      />
    ));

    userEvent.click(document.querySelectorAll('span.statusbar-icon')[0]);

    expect(handleClick).toBeCalledTimes(1);
  });
});

describe('StatusBar ATTRIBUTES', () => {
  it('should add progress class to current item', () => {
    render((
      <StatusBar
        data={data}
        textField="labelText"
        value={data[0]}
      />
    ));

    expect(document.querySelector('.first .statusbar-icon')).toHaveClass('progress');
  });

  it('should give first an last item suitable className', () => {
    render((
      <StatusBar
        data={data}
        textField="value"
        value={data[0]}
      />
    ));

    expect(document.querySelectorAll('.statusbar-status-item')[0]).toHaveClass('first');

    expect(document.querySelectorAll('.statusbar-status-item')[2]).toHaveClass('last');
  });

  it('should add success className to all items before current', () => {
    render((
      <StatusBar
        data={data}
        textField="labelText"
        value={data[1]}
      />
    ));

    expect(document.querySelectorAll('span.success')).toHaveLength(1);

    expect(document.querySelectorAll('div.statusbar-status-item span.statusbar-icon')[0]).toHaveClass('success');

    expect(document.querySelectorAll('div.statusbar-status-item span.statusbar-icon')[1]).toHaveClass('progress');
  });

  it('should take typeField form data', () => {
    render((
      <StatusBar
        data={customData}
        textField="id"
        typeField="value"
      />
    ));

    expect(document.querySelectorAll('.danger')).toHaveLength(1);
    expect(document.querySelectorAll('.progress')).toHaveLength(1);
    expect(document.querySelectorAll('.success')).toHaveLength(1);

    expect(document.querySelector('.last .statusbar-icon')).not.toHaveClass('danger');
    expect(document.querySelector('.last .statusbar-icon')).not.toHaveClass('progress');
    expect(document.querySelector('.last .statusbar-icon')).not.toHaveClass('success');
  });
});
