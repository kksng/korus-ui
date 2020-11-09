import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface LiProps extends React.HTMLAttributes<HTMLLIElement> {
  ref?: React.Ref<LiRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface LiRefCurrent {
  wrapper: HTMLLIElement | null,
}

export const Li = htmlTagFactory('Li') as React.FC<LiProps>;
