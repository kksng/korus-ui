import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  [x: string]: unknown,
  ref?: React.Ref<DivRefCurrent>,
  shouldRender?: boolean,
}

export interface DivRefCurrent {
  wrapper: HTMLDivElement | null,
}

export const Div = htmlTagFactory('Div') as React.FC<DivProps>;
