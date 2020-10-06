import * as React from 'react';
import * as L from '@korus/leda';

export const RenderEvent = () => (
  <L.Tooltip
    title={(
      <pre>
        {`
  { 
    Element: HTMLElement,
    componentProps: PropsObject,
    componentState: StateObject,
    elementProps: ElementPropsObject,
  }
        `}
      </pre>
    )}
  >
    <L.Span _txt-success>RenderEvent</L.Span>
  </L.Tooltip>
);
