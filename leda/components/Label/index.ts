import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  ref?: React.Ref<LabelRefCurrent>,
  [x: string]: unknown,
}

export interface LabelRefCurrent {
  wrapper: HTMLLabelElement | null,
}

export const Label = htmlTagFactory('Label') as React.FC<LabelProps>;
