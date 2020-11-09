import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  shouldRender?: boolean,
  [x: string]: unknown,
}

export const Blockquote = htmlTagFactory('Blockquote') as React.FC<BlockquoteProps>;
