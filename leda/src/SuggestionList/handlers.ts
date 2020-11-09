import * as React from 'react';
import { CustomEventHandler } from '../../commonTypes';
import { dispatchEvent } from '../../utils';
import { SuggestionItemProps } from './types';

export const createClickHandler = (
  props: SuggestionItemProps,
): CustomEventHandler<React.MouseEvent<HTMLElement>> => (ev) => {
  const { onClick, item } = props;

  dispatchEvent(ev, onClick, {
    value: item as NonNullable<typeof item>,
  });
};
