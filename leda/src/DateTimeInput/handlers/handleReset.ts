import * as React from 'react';
import { isFunction } from 'lodash';
import { DateTimeInputProps, AllActions } from '../types';
import { setDate, setValue } from '../actions';

export const createResetHandler = ({
  props,
  dispatch,
}: {
  props: DateTimeInputProps,
  dispatch: React.Dispatch<AllActions>,
}) => () => {
  const date = null;
  const value = '';
  dispatch(setValue(value));
  dispatch(setDate(date));
  if (isFunction(props.onChange)) {
    props.onChange({
      component: {
        date,
        name: props.name,
        value,
      },
    });
  }
};
