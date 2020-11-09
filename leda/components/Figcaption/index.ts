import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface FigcaptionProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<FigcaptionRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface FigcaptionRefCurrent {
  wrapper: HTMLElement | null,
}

export const Figcaption = htmlTagFactory('Figcaption') as React.FC<FigcaptionProps>;
