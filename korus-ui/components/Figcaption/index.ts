import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface FigcaptionProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: React.Ref<FigcaptionRefCurrent>,
  shouldRender?: boolean,
}

export interface FigcaptionRefCurrent {
  wrapper: HTMLElement | null,
}

export const Figcaption = htmlTagFactory('Figcaption') as React.FC<FigcaptionProps>;
