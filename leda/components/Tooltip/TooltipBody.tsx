import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TooltipBodyProps } from './types';

export const TooltipBody = React.forwardRef((props: TooltipBodyProps, ref?: React.Ref<HTMLDivElement>): React.ReactElement => {
  const {
    onTransitionEnd: handleTransitionEnd,
    tooltipClassNames: className,
    style,
    title,
  } = props;

  // Width should be set explicitly for correct displaying in IE
  const { width } = style;

  const tooltip = (
    <div
      className={className}
      ref={ref}
      style={style}
      onTransitionEnd={handleTransitionEnd}
    >
      <div style={{ width }}>
        {title}
      </div>
    </div>
  );

  return ReactDOM.createPortal(tooltip, document.body);
}) as React.FC<TooltipBodyProps>;

TooltipBody.displayName = 'TooltipBody';
