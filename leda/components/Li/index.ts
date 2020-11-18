import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface LiProps extends React.HTMLAttributes<HTMLLIElement> {
  [x: string]: unknown,
  ref?: React.Ref<LiRefCurrent>,
  shouldRender?: boolean,
}

export interface LiRefCurrent {
  wrapper: HTMLLIElement | null,
}

export const Li = htmlTagFactory('Li') as React.FC<LiProps>;
