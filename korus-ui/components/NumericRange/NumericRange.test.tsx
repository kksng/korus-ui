import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import {
  NumericRange,
} from './index';

describe('NumericRange handlers', () => {
  it('should handle onEnterPress', () => {
    const handleEnterPress = jest.fn();

    const { container } = render((
      <NumericRange onEnterPress={handleEnterPress} />
    ));

    const inputA = container.querySelectorAll('input.numeric-text-box-input')[0];
    const inputB = container.querySelectorAll('input.numeric-text-box-input')[1];

    fireEvent.keyDown(inputA, {
      key: 'Enter',
    });

    fireEvent.keyDown(inputB, {
      key: 'Enter',
    });

    expect(handleEnterPress).toBeCalledTimes(2);
  });
});
