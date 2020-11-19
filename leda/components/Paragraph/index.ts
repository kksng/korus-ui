import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  [x: string]: unknown,
  ref?: React.Ref<ParagraphRefCurrent>,
  shouldRender?: boolean,
}

export interface ParagraphRefCurrent {
  wrapper: HTMLParagraphElement | null,
}

export const P = htmlTagFactory('P') as React.FC<ParagraphProps>;
