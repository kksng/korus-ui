import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  bindFunctionalRef, getClassNames, useElement, useProps, useTheme,
} from '../../utils';
import { Div } from '../Div';
import { LedaContext } from '../LedaProvider';
import { Span } from '../Span';
import { formatTime } from './helpers';
import { useCountDown, useCountDownRestProps } from './hooks';
import { CountDownProps, CountDownRefCurrent } from './types';

/**
 * CountDown component creates countdown timer
 * @param {CountDownProps} props
 *
 * @returns {React.ReactElement}
 */
export const CountDown = React.forwardRef((props: CountDownProps, ref: React.Ref<CountDownRefCurrent>): React.ReactElement => {
  const {
    className,
    text = '',
    wrapperRender,
    format = 'mm:ss',
    theme: themeProp,
  } = useProps(props);

  const countDown = useCountDown(props);

  const restProps = useCountDownRestProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.countDown);

  const context = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || context.renders[COMPONENTS_NAMESPACES.countDown].wrapperRender,
    props,
  );

  const wrapperClassNames = getClassNames(theme.wrapper, className);

  return (
    <Wrapper
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
      {...restProps}
    >
      {text}
      {' '}
      <Span className={theme.countdownTimer}>
        {formatTime(countDown, format)}
      </Span>
    </Wrapper>
  );
}) as React.FC<CountDownProps>;

CountDown.displayName = 'CountDown';
