import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  [x: string]: unknown,
  shouldRender?: boolean,
}

export const Blockquote = htmlTagFactory('Blockquote') as React.FC<BlockquoteProps>;
