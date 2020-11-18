import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: FooterRefCurrent,
  shouldRender?: boolean,
}

export interface FooterRefCurrent {
  wrapper: HTMLElement | null,
}

export const Footer = htmlTagFactory('Footer') as React.FC<FooterProps>;
