import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<NavRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface NavRefCurrent {
  wrapper: HTMLElement | null,
}

export const Nav = htmlTagFactory('Nav') as React.FC<NavProps>;
