import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface MarkProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: React.Ref<MarkRefCurrent>,
  shouldRender?: boolean,
}

export interface MarkRefCurrent {
  wrapper: HTMLElement | null,
}

export const Mark = htmlTagFactory('Mark') as React.FC<MarkProps>;
