import { isFunction } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { SomeObject } from '../../commonTypes';
import { useInterval, useProps } from '../../utils';
import { getDelta } from './helpers';
import { CountDownProps } from './types';

/**
 * Hook creates countdown timer
 * @param {props} CountDownProps
 *
 * @returns number
 */
export const useCountDown = ({
  time, onTick, onStart, onComplete, onPause, interval = 1000,
}: CountDownProps): number => {
  const [countDown, setCountDown] = useState(time);
  const [delay, setDelay] = useState<number | null>(interval);
  const startTimestamp = useRef<number>(0);

  const tick = (): void => {
    if (countDown === time && isFunction(onStart)) onStart();

    const newDelta = getDelta(startTimestamp.current);
    if (newDelta === 0) {
      if (isFunction(onComplete)) onComplete();
      setDelay(null);
    }

    setCountDown(newDelta);

    if (isFunction(onTick)) onTick();
  };

  useEffect(() => {
    startTimestamp.current = Date.now() + time;
  }, [time]);

  useEffect(() => {
    if (interval === null) {
      if (isFunction(onPause)) onPause();
      setDelay(null);
    } else {
      setDelay(interval);
      const pauseTime = Date.now() + countDown - startTimestamp.current;
      if (pauseTime) {
        startTimestamp.current += pauseTime;
      }
    }
  }, [interval, onPause]);

  useInterval(tick, delay);

  return countDown;
};

/**
 * Hook excludes unused props from restProps
 * @param {CountDownProps} props
 *
 * @returns SomeObject
 */
export const useCountDownRestProps = (props: CountDownProps): SomeObject => {
  const {
    // should not get in restProps
    time,
    onTick,
    onStart,
    onComplete,
    onPause,
    interval,
    className,
    text,
    wrapperRender,
    format,
    theme,
    // the end of what should not get into restProps
    ...restProps
  } = useProps(props);

  return restProps;
};
