import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface AsideProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: React.Ref<AsideRefCurrent>,
  shouldRender?: boolean,
}

export interface AsideRefCurrent {
  wrapper: HTMLElement | null,
}

export const Aside = htmlTagFactory('Aside') as React.FC<AsideProps>;
