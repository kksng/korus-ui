import * as React from 'react';
import { isFunction, isNil } from 'lodash';
import { VStepperItemProps } from './types';

export const createClickHandler = (
  props: VStepperItemProps,
  isOpenState: boolean,
  setIsOpenState: React.Dispatch<React.SetStateAction<boolean>>,
): React.MouseEventHandler => (ev: React.MouseEvent<HTMLDivElement>): void => {
  const {
    onClick, isOpen: isOpenProp, index, isDisabled,
  } = props;

  if (isDisabled) return;

  if (isFunction(onClick)) {
    const customEvent = {
      ...ev,
      target: {
        ...ev.target,
        index,
        value: isNil(isOpenProp) ? isOpenState : isOpenProp,
      },
    };

    onClick(customEvent);
  }

  if (isOpenProp) return;

  setIsOpenState(!isOpenState);
};
