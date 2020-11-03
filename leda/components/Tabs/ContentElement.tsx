import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Div } from '~/components/Div';
import { ContentProps } from './types';

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
