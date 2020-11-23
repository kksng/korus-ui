import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface MainProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: React.Ref<MainRefCurrent>,
  shouldRender?: boolean,
}

export interface MainRefCurrent {
  wrapper: HTMLElement | null,
}

export const Main = htmlTagFactory('Main') as React.FC<MainProps>;
