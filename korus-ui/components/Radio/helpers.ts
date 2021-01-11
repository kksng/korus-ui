import React from 'react';

import { RadioButton } from './RadioButton';
import { RadioValue } from './types';

/**
 * Helper checks if value was passed through props and returns value from props or otherwise from state
 * @param {RadioValue | undefined} valueProp - value was passed through props
 * @param {RadioValue} valueState - value defined in state (by default value of first RadioButton)
 *
 * @returns {RadioValue} - value of RadioGroup
 */
export const getValue = (valueProp: RadioValue | undefined, valueState: RadioValue): RadioValue => (valueProp === undefined ? valueState : valueProp);

/**
 * Helper checks if element is valid RadioButton
 * @param {React.ReactNode} element
 *
 * @returns {boolean}
 */
export const isValidRadioButton = (element: React.ReactNode) => (!!(element
  && React.isValidElement(element)
  && (element.type === RadioButton || (element.type as { name?: string }).name === 'RadioButton')));

/**
 * Helper gets value of the first component's child RadioButton
 * @param {React.ReactNode} children - child component's elements
 *
 * @returns {RadioValue} - value of the first child RadioButton
 */
export const getFirstChildValue = (children: React.ReactNode): RadioValue => {
  const childrenArray = React.Children.toArray(children);
  const validRadioButtons = childrenArray.filter((child) => isValidRadioButton(child)) as React.ReactElement[];
  const firstChild = validRadioButtons[0];
  return firstChild.props.value;
};
