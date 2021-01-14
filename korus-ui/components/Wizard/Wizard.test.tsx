import React from 'react';
import { render } from '@testing-library/react';

import { Wizard } from './index';

const data = [
  { labelText: 'To do' },
  { labelText: 'In progress' },
  { labelText: 'Done' },
];

describe('Wizard SNAPSHOTS', () => {
  it('should render', () => {
    const wizard = render((
      <Wizard
        data={data}
        textField="labelText"
        value={data[0]}
      />
    ));

    expect(document.querySelectorAll('.step')).toHaveLength(3);

    expect(wizard).toMatchSnapshot();
  });
});

describe('Wizard ATTRIBUTES', () => {
  it('should add active and progress class to current item', () => {
    render((
      <Wizard
        data={data}
        textField="labelText"
        value={data[0]}
      />
    ));

    expect(document.querySelector('.first.step')).toHaveClass('active', 'progress');
  });

  it('should add progress line for active item', () => {
    render((
      <Wizard
        data={data}
        textField="labelText"
        value={data[0]}
      />
    ));

    const activeStep = document.querySelector('.first.step');
    expect(activeStep?.querySelector('.progress-line')).toBeInTheDocument();
  });

  it('should give first an last item suitable className', () => {
    render((
      <Wizard
        data={data}
        textField="labelText"
        value={data[0]}
      />
    ));

    expect(document.querySelectorAll('.step')[0]).toHaveClass('first');

    expect(document.querySelectorAll('.step')[2]).toHaveClass('last');
  });

  it('should add success className to all items before current', () => {
    render((
      <Wizard
        data={data}
        textField="labelText"
        value={data[2]}
      />
    ));

    expect(document.querySelectorAll('.step.success')).toHaveLength(2);

    expect(document.querySelectorAll('.step')[0]).toHaveClass('success');

    expect(document.querySelectorAll('.step')[1]).toHaveClass('success');
  });
});
