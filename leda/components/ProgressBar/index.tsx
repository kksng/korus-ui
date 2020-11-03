import React, { useContext } from 'react';
import { Div } from '~/components/Div';
import {
  bindFunctionalRef, getClassNames, useElement, useProps, useTheme,
} from '~/utils';
import { COMPONENTS_NAMESPACES } from '~/constants';
import { Span } from '~/components/Span';
import { LedaContext } from '~/components/LedaProvider';
import { ProgressBarProps, ProgressBarRefCurrent } from './types';

export const ProgressBar = React.forwardRef((props: ProgressBarProps, ref?: React.Ref<ProgressBarRefCurrent>) => {
  const {
    value,
    className,
    theme: themeProp,
    valueRender,
    ...restProps
  } = useProps(props);

  const width = `${value}%`;

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.progressBar);

  const { renders: { progressBar: customRenders } } = useContext(LedaContext);

  const wrapperClassNames = getClassNames(className, theme.wrapper);

  const Value = useElement(
    'Value',
    Span,
    valueRender ?? customRenders.valueRender,
    props,
  );

  return (
    <Div
      {...restProps}
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
    >
      <div className={theme.fill} style={{ width }}>
        <Value data-value={value} className={theme.value}>
          {value > 10 && width}
        </Value>
      </div>
    </Div>
  );
}) as React.FC<ProgressBarProps>;

ProgressBar.displayName = 'ProgressBar';
