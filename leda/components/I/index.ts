import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface TagIProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<TagIRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface TagIRefCurrent {
  wrapper: HTMLElement | null,
}

export const I = htmlTagFactory('I') as React.FC<TagIProps>;
