import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  ref?: React.Ref<ParagraphRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface ParagraphRefCurrent {
  wrapper: HTMLParagraphElement | null,
}

export const P = htmlTagFactory('P') as React.FC<ParagraphProps>;
