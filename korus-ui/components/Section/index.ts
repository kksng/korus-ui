import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  [x: string]: unknown,
  ref?: React.Ref<SectionRefCurrent>,
  shouldRender?: boolean,
}

export interface SectionRefCurrent {
  wrapper: HTMLElement | null,
}

export const Section = htmlTagFactory('Section') as React.FC<SectionProps>;
