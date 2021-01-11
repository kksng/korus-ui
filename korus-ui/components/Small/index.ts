import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface SmallProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: React.Ref<SmallRefCurrent>,
  shouldRender?: boolean,
}

export interface SmallRefCurrent {
  wrapper: HTMLElement | null,
}

export const Small = htmlTagFactory('Small') as React.FC<SmallProps>;
