import * as React from 'react';
import { isFunction, isNil } from 'lodash';
import { VStepperItemProps } from './types';
import { Display } from './constants';

export const createClickHandler = (
  props: VStepperItemProps,
  isOpenState: boolean,
  setIsOpenState: React.Dispatch<React.SetStateAction<boolean>>,
  contentDisplay: Display,
  setContentDisplay: React.Dispatch<React.SetStateAction<Display>>,
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

  if (contentDisplay === Display.None) setContentDisplay(Display.Block);

  setIsOpenState(!isOpenState);
};
