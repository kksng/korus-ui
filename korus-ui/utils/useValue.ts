import * as React from 'react';
import { SetState } from '../commonTypes';

export const useValue = <V>(valueProp: V | undefined, defaultValue: V): [V, SetState<V>] => {
  const [value, setValue] = React.useState<V>(defaultValue);

  React.useDebugValue(valueProp === undefined ? JSON.stringify(value) : JSON.stringify(valueProp));
  // eslint-disable-next @typescript-eslint/no-empty-function
  return valueProp === undefined ? [value, setValue] : [valueProp, (() => {}) as SetState<V>];
};
