import * as React from 'react';
import { isFunction } from 'lodash';
import { SetState } from '../../commonTypes';
import { CheckBoxProps } from './types';

export const createChangeHandler = (props: CheckBoxProps, setUncontrolledValue: SetState<boolean>): React.ChangeEventHandler<HTMLInputElement> => (ev) => {
  const { onChange, name } = props;

  setUncontrolledValue(ev.currentTarget.checked);

  if (!isFunction(onChange)) return;

  const customEvent = {
    ...ev,
    component: {
      name,
      value: ev.currentTarget.checked,
    },
  };

  onChange(customEvent);
};
