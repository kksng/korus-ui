import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: React.Ref<NavRefCurrent>,
  shouldRender?: boolean,
}

export interface NavRefCurrent {
  wrapper: HTMLElement | null,
}

export const Nav = htmlTagFactory('Nav') as React.FC<NavProps>;
