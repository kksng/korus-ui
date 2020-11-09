import React from 'react';
import { isFunction } from 'lodash';
import { bindFunctionalRef, useProps } from '../../utils';
import { CustomEventHandler } from '../../commonTypes';
import { AProps, ARefCurrent } from './types';

export const A = React.forwardRef((props: AProps, ref?: React.Ref<ARefCurrent>): React.ReactElement | null => {
  const {
    children,
    href,
    onClick,
    shouldRender,
    ...restProps
  } = useProps(props);

  if (shouldRender === false) return null;

  const handleClick: CustomEventHandler<React.MouseEvent<HTMLAnchorElement>> = (ev) => {
    // если href не передали, то нужен preventDefault, иначе - нет
    if (!href) ev.preventDefault();

    if (isFunction(onClick)) onClick(ev);
  };

  return (
    <a
      {...restProps}
      href={href}
      onClick={handleClick}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component,
      }))}
    >
      {children}
    </a>
  );
}) as React.FC<AProps>;

A.displayName = 'A';
