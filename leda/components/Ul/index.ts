import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface UlProps extends React.HTMLAttributes<HTMLUListElement> {
  ref?: React.Ref<UlRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface UlRefCurrent {
  wrapper: HTMLUListElement | null,
}

export const Ul = htmlTagFactory('Ul') as React.FC<UlProps>;
