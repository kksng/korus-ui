import { isFunction } from 'lodash';
import * as React from 'react';
import {
  RatingProps, SetCurrentSelected, SetIsHovered,
} from './types';
import { getCurrentStarValue } from './helpers';

export const createChangeHandler = (props: RatingProps) => (event: React.MouseEvent<HTMLElement>): void => {
  const {
    onChange, onClick, name,
  } = props;

  const currentSelected = getCurrentStarValue(event.target as Element);

  const customEvent = {
    ...event,
    component: {
      index: currentSelected - 1,
      name,
      value: currentSelected,
    },
  };

  if (isFunction(onClick)) onClick(event);
  if (isFunction(onChange)) onChange(customEvent);
};

export const createMouseOutHandler = (value: number | undefined, setCurrentSelected: SetCurrentSelected, setIsHovered: SetIsHovered) => () => {
  setCurrentSelected(value ? value - 1 : -1);
  setIsHovered(false);
};

export const createMouseOverHandler = (setCurrentSelected: SetCurrentSelected, setIsHovered: SetIsHovered) => (event: React.MouseEvent<HTMLElement>) => {
  setCurrentSelected(getCurrentStarValue(event.target as Element) - 1);
  setIsHovered(true);
};
