import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface OlProps extends React.HTMLAttributes<HTMLOListElement> {
  [x: string]: unknown,
  ref?: React.Ref<OlRefCurrent>,
  shouldRender?: boolean,
}

export interface OlRefCurrent {
  wrapper: HTMLOListElement | null,
}

export const Ol = htmlTagFactory('Ol') as React.FC<OlProps>;
