import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  bindFunctionalRef, getClassNames, useElement, useProps, useTheme,
} from '../../utils';
import { Div } from '../Div';
import { LedaContext } from '../LedaProvider';
import { Span } from '../Span';
import { Position } from './constants';
import { useDrawerStyle } from './hooks';
import { DrawerProps, DrawerRefCurrent, WrapperProps } from './types';

/**
 * Drawer component: a panel that slides in from the side
 * @param {DrawerProps} props
 *
 * @returns {React.ReactElement}
 */
export const Drawer = React.forwardRef((props: DrawerProps, ref?: React.Ref<DrawerRefCurrent>): React.ReactElement => {
  const {
    className,
    children,
    position = Position.Left,
    theme: themeProp,
    ...restProps
  } = useProps(props);

  const [isVisible, setIsVisible] = React.useState(false);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.drawer);

  const context = React.useContext(LedaContext);

  const wrapperClassNames = getClassNames(
    [theme.wrapper],
    className,
    {
      [theme.wrapperVisible]: isVisible,
      [theme.wrapperLeft]: position === Position.Left,
      [theme.wrapperRight]: position === Position.Right,
    },
  );

  const barClassNames = getClassNames(
    [theme.bars],
    {
      [theme.barsOpen]: isVisible,
    },
  );

  const Wrapper = useElement<DrawerProps, {}, WrapperProps>(
    'Wrapper',
    Div,
    context.renders[COMPONENTS_NAMESPACES.drawer].wrapperRender,
    props,
  );

  const {
    elementRef,
    style,
  } = useDrawerStyle(position, ref);

  return (
    <>
      <Wrapper
        className={wrapperClassNames}
        style={style}
        ref={ref
          ? ((component) => bindFunctionalRef(component, ref, component && {
            wrapper: component.wrapper || component,
          }))
          : elementRef}
        {...restProps}
      >
        {children}
        <Div
          className={barClassNames}
          onClick={() => setIsVisible(!isVisible)}
        >
          <Span />
        </Div>
      </Wrapper>
      <Div
        className={theme.overlay}
        onClick={() => setIsVisible(false)}
      />
    </>
  );
}) as React.FC<DrawerProps>;

Drawer.displayName = 'Drawer';
