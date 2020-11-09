import React from 'react';
import {
  getClassNames,
} from '../../utils';
import {
  ItemClassNames, VStepperItemProps, VStepperProps,
} from './types';
import { SomeObject } from '../../commonTypes';

export const VSTEPPER_STATUS_TYPES = {
  SUCCESS: 'success',
  PROGRESS: 'progress',
  DANGER: 'danger',
} as const;

export type StepTypes = typeof VSTEPPER_STATUS_TYPES[keyof typeof VSTEPPER_STATUS_TYPES];

export const getItemClassNames = (props: VStepperItemProps, theme: NonNullable<Required<VStepperProps['theme']>>, type: StepTypes): ItemClassNames => {
  const {
    className, isOpen, hasSignIcon, isDisabled,
  } = props;

  const isItemAvailable = !isDisabled && isOpen;

  const iconClassName = getClassNames(
    theme.itemIcon,
    {
      [theme.itemIconCheck]: hasSignIcon && type === VSTEPPER_STATUS_TYPES.SUCCESS && !isDisabled,
      [theme.itemIconStop]: hasSignIcon && type === VSTEPPER_STATUS_TYPES.DANGER && !isDisabled,
    },
  );

  const wrapperClassName = getClassNames(
    className,
    theme.itemWrapper,
    {
      [theme.statusSuccess]: type === VSTEPPER_STATUS_TYPES.SUCCESS && !isDisabled,
      [theme.statusDanger]: type === VSTEPPER_STATUS_TYPES.DANGER && !isDisabled,
      [theme.statusProgress]: type === VSTEPPER_STATUS_TYPES.PROGRESS && !isDisabled,
      [theme.itemActive]: isItemAvailable,
      [theme.itemWrapperDisabled]: isDisabled,
    },
  );

  const headingIconClassName = getClassNames(
    theme.itemHeadingIcon,
    { [theme.itemHeadingIconOpen]: isItemAvailable },
  );

  return {
    wrapperClassName,
    iconClassName,
    headingIconClassName,
  };
};

export const getChildren = (children: React.ReactElement, value?: SomeObject | null): React.ReactNode => {
  const currentIndex = React.Children.toArray(children).findIndex((child) => {
    if ((child as React.ReactElement).props) {
      return (child as React.ReactElement).props.item === value;
    }
    return false;
  });

  return React.Children.map(children, (child, index) => {
    const type: StepTypes | undefined = (() => {
      if (value === null) return VSTEPPER_STATUS_TYPES.SUCCESS;
      if (value === undefined) return undefined;
      if (index === currentIndex) return VSTEPPER_STATUS_TYPES.PROGRESS;
      if (index < currentIndex) return VSTEPPER_STATUS_TYPES.SUCCESS;
      return undefined;
    })();

    return React.cloneElement(child, { type });
  });
};
