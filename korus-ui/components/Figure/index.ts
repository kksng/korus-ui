import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface FigureProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: React.Ref<FigureRefCurrent>,
  shouldRender?: boolean,
}

export interface FigureRefCurrent {
  wrapper: HTMLElement | null,
}

export const Figure = htmlTagFactory('Figure') as React.FC<FigureProps>;
