import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface OlProps extends React.HTMLAttributes<HTMLOListElement> {
  ref?: React.Ref<OlRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface OlRefCurrent {
  wrapper: HTMLOListElement | null,
}

export const Ol = htmlTagFactory('Ol') as React.FC<OlProps>;
