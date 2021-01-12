import * as React from 'react';
import { Span } from '../Span';
import { LABELS } from './constants';
import { SliderLabelsProps } from './types';

export const SliderLabels = (props: SliderLabelsProps): React.ReactElement | null => {
  const {
    shouldRender, theme, min, max, type, children, value,
  } = props;

  return shouldRender ? (
    <div className={theme.labelContainer}>
      {type === LABELS.MINMAX && (
        <>
          <Span className={theme.label}>
            {min.toLocaleString()}
            {' '}
            {children}
          </Span>
          <Span className={theme.label}>
            {max.toLocaleString()}
            {' '}
            {children}
          </Span>
        </>
      )}
      {type === LABELS.CURRENT && (
        <>
          <Span className={theme.label}>
            {value.toLocaleString()}
            {' '}
            {children}
          </Span>
        </>
      )}
    </div>
  )
    : null;
};
