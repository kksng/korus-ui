import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface ImgProps extends React.HTMLAttributes<HTMLImageElement> {
  [x: string]: unknown,
  ref?: React.Ref<ImgRefCurrent>,
  shouldRender?: boolean,
}

export interface ImgRefCurrent {
  wrapper: HTMLImageElement | null,
}

export const Img = htmlTagFactory('Img') as React.FC<ImgProps>;
