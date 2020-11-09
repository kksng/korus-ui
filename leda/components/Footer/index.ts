import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  ref?: FooterRefCurrent,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface FooterRefCurrent {
  wrapper: HTMLElement | null,
}

export const Footer = htmlTagFactory('Footer') as React.FC<FooterProps>;
