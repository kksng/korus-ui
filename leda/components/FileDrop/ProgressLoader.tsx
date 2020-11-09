import * as React from 'react';
import isNumber from 'lodash/isNumber';
import { Div } from '../Div';
import { Loader } from '../Loader';
import { ProgressLoaderProps } from './types';

export const ProgressLoader = (props: ProgressLoaderProps): React.ReactElement | null => {
  const {
    isLoading, loadingProgress, theme,
  } = props;

  if (!isLoading) return null;

  // do not show loading progress
  if (!isNumber(loadingProgress)) {
    return <Loader />;
  }

  if (isNumber(loadingProgress) && (loadingProgress < 0 || loadingProgress > 100)) {
    console.error('FileDrop: loadingProgress cannot be less than 0 or bigger than 100');
    return <Loader />;
  }

  const radius = 34;
  const offset = 35;
  const circleLength = 2 * Math.PI * radius;
  const unfilledLength = circleLength - circleLength * (loadingProgress / 100);

  return (
    <Div className={theme.progressLoader}>
      <Div className={theme.progressBase} />
      <svg className={theme.progressCircle}>
        <circle
          r={radius}
          cx={offset}
          cy={offset}
          style={{
            strokeDasharray: circleLength,
            strokeDashoffset: unfilledLength,
          }}
          transform={`rotate(-90 ${offset} ${offset})`}
        />
      </svg>
    </Div>
  );
};
