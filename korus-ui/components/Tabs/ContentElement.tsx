import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ContentProps } from './types';
import { Div } from '../Div';

export const ContentElement = (props: ContentProps): React.ReactElement | null => {
  const {
    children, tabContentNode, ...restProps
  } = props;

  if (tabContentNode === undefined) {
    return <Div {...restProps}>{children}</Div>;
  }

  if (tabContentNode) return ReactDOM.createPortal(children, tabContentNode);

  return null;
};
