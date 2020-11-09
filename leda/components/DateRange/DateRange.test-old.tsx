// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import {
  render,
} from '@testing-library/react';
import { DateRange } from './index';
import { fixJSON } from '../../utils';

describe('DateRange ATTRIBUTES', () => {
  it('should show requiredMessage when isRequired and invalid', async () => {
    const { container, findAllByText } = render(
      <DateRange
        form="form"
        name="name"
        isRequired
        requiredMessage="REQUIRED"
      />,
    );

    const [inputFrom, inputTo] = document.querySelectorAll('input');

    expect(inputFrom).toBeDefined();
    expect(inputTo).toBeDefined();

    await inputFrom.focus();
    await inputTo.focus();
    await inputTo.blur();

    const query = await findAllByText('REQUIRED');

    expect(query).toHaveLength(2);

    expect(container).toMatchSnapshot();
  });

  it('should show different requiredMessage when isRequired and invalid', async () => {
    const { container, findByText } = render(
      <DateRange
        form="form"
        name="name"
        isRequired
        requiredMessage={['one', 'two']}
      />,
    );

    const [inputFrom, inputTo] = document.querySelectorAll('input');

    expect(inputFrom).toBeDefined();
    expect(inputTo).toBeDefined();

    await inputFrom.focus();
    await inputTo.focus();
    await inputTo.blur();

    await findByText('one');
    await findByText('two');

    expect(container).toMatchSnapshot();
  });
});
