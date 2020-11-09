import React, { useEffect } from 'react';
import {
  bindFunctionalRef, getClassNames, useTheme, useElement, useProps,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { IconProps, LoaderProps, LoaderRefCurrent } from './types';
import { Span } from '../Span';
import { Div } from '../Div';

export const Loader = React.forwardRef((props: LoaderProps, ref?: React.Ref<LoaderRefCurrent>): React.ReactElement => {
  const {
    children,
    className,
    iconRender,
    isGlobal,
    isLoading = true,
    theme: themeProp,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.loader);

  const wrapperClassName = getClassNames(
    className,
    [theme.wrapper],
    { [theme.fullscreen]: isGlobal },
  );

  const loaderClassName = getClassNames(
    theme.element,
  );

  useEffect(() => {
    if (isLoading && isGlobal) {
      document.body.classList.add(theme.bodyOverflow);
    }

    return () => {
      if (isGlobal) {
        document.body.classList.remove(theme.bodyOverflow);
      }
    };
  }, [isLoading, isGlobal, theme.bodyOverflow]);

  const Icon = useElement<LoaderProps, {}, IconProps>(
    'Icon',
    Span,
    iconRender,
    props,
  );

  if (isGlobal) {
    return (isLoading && (
      <Div
        {...restProps}
        ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
          wrapper: component,
        }))}
        className={wrapperClassName}
      >
        <Icon className={loaderClassName} />
      </Div>
    )) as unknown as React.ReactElement;
  }

  return (
    <Div
      {...restProps}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component,
      }))}
      className={wrapperClassName}
    >
      {isLoading && (
        <div
          className={theme.container}
        >
          <Icon className={loaderClassName} />
        </div>
      )}
      {children}
    </Div>
  );
}) as React.FC<LoaderProps>;

Loader.displayName = 'Loader';
