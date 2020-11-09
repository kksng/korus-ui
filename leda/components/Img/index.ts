import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface ImgProps extends React.HTMLAttributes<HTMLImageElement> {
  ref?: React.Ref<ImgRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface ImgRefCurrent {
  wrapper: HTMLImageElement | null,
}

export const Img = htmlTagFactory('Img') as React.FC<ImgProps>;
