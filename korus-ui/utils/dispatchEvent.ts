import * as React from 'react';
import { isFunction } from 'lodash';
import { CustomEventHandler } from '../commonTypes';

export const dispatchEvent = <E extends React.SyntheticEvent, T extends {}, B extends HTMLElement>(baseEvent: E, handler?: CustomEventHandler<E & { target: T & EventTarget & B }>, target?: T): void => {
  if (isFunction(handler)) {
    const customEvent = {
      ...baseEvent,
      target: {
        ...baseEvent.target,
        ...target,
      },
    } as E & { target: T & EventTarget & B };

    handler(customEvent);
  }
};
