import * as React from 'react';

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  [x: string]: unknown,
  ref?: React.Ref<HeaderRefCurrent>,
  shouldRender?: boolean,
}

export interface HeaderRefCurrent {
  wrapper: HTMLHeadingElement | null,
}
