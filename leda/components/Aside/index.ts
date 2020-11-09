import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface AsideProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<AsideRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface AsideRefCurrent {
  wrapper: HTMLElement | null,
}

export const Aside = htmlTagFactory('Aside') as React.FC<AsideProps>;
