import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<DivRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface DivRefCurrent {
  wrapper: HTMLDivElement | null,
}

export const Div = htmlTagFactory('Div') as React.FC<DivProps>;
