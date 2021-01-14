import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface TagIProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: React.Ref<TagIRefCurrent>,
  shouldRender?: boolean,
}

export interface TagIRefCurrent {
  wrapper: HTMLElement | null,
}

export const I = htmlTagFactory('I') as React.FC<TagIProps>;
