import React from 'react';
import 'svgxuse'; // svg support for IE
import {
  bindFunctionalRef,
  getClassNames,
  useProps,
} from '../../utils';
import { extractIdAndNamespace } from './helpers';
import { SvgProps, SvgRefCurrent } from './types';

export const Svg = React.forwardRef((props: SvgProps, ref?: React.Ref<SvgRefCurrent>): React.ReactElement => {
  const {
    className,
    noIconClass,
    ...restProps
  } = useProps(props);

  const { id, namespace, ...wrapperProps } = extractIdAndNamespace(restProps);

  const combinedClassNames = getClassNames(
    {
      [`icon-${namespace}`]: !noIconClass,
    },
    className,
  );

  return (
    <svg
      {...wrapperProps}
      className={combinedClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component,
      }))}
    >
      <use xlinkHref={`/assets/images/svg/${namespace}.svg#${id}`} />
    </svg>
  );
}) as React.FC<SvgProps>;

Svg.displayName = 'Svg';
