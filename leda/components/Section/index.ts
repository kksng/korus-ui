import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<SectionRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface SectionRefCurrent {
  wrapper: HTMLElement | null,
}

export const Section = htmlTagFactory('Section') as React.FC<SectionProps>;
