import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  [x: string]: unknown,
  ref?: React.Ref<SpanRefCurrent>,
  shouldRender?: boolean,
}

export interface SpanRefCurrent {
  wrapper: HTMLSpanElement | null,
}

export const Span = htmlTagFactory('Span') as React.FC<SpanProps>;
