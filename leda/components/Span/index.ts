import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  ref?: React.Ref<SpanRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface SpanRefCurrent {
  wrapper: HTMLSpanElement | null,
}

export const Span = htmlTagFactory('Span') as React.FC<SpanProps>;
