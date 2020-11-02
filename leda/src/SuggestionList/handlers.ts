import * as React from 'react';
import { dispatchEvent } from '~/utils';
import { CustomEventHandler } from '~/commonTypes';
import { SuggestionItemProps } from './types';

export const createClickHandler = (
  props: SuggestionItemProps,
): CustomEventHandler<React.MouseEvent<HTMLElement>> => (ev) => {
  const { onClick, item } = props;

  dispatchEvent(ev, onClick, {
    value: item as NonNullable<typeof item>,
  });
};
