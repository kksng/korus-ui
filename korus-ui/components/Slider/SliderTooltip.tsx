import React from 'react';
import { SliderTooltipProps } from './types';

export const SliderTooltip = (props: SliderTooltipProps): React.ReactElement | null => {
  const { value, theme, shouldRender } = props;

  if (!shouldRender) return null;

  return (
    <div className={theme.tooltipWrap} key={value.toLocaleString()}>
      <div className={theme.tooltipArrow} />
      <div className={theme.tooltipInner}>
        {value.toLocaleString()}
      </div>
    </div>
  );
};
