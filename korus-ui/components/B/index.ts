import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface BProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: React.Ref<BRefCurrent>,
  shouldRender?: boolean,
}

export interface BRefCurrent {
  wrapper: HTMLLIElement | null,
}

export const B = htmlTagFactory('B') as React.FC<BProps>;
