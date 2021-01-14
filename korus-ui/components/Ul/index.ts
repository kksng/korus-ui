import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface UlProps extends React.HTMLAttributes<HTMLUListElement> {
  [x: string]: unknown,
  ref?: React.Ref<UlRefCurrent>,
  shouldRender?: boolean,
}

export interface UlRefCurrent {
  wrapper: HTMLUListElement | null,
}

export const Ul = htmlTagFactory('Ul') as React.FC<UlProps>;
