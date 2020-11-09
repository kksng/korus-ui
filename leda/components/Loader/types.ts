import * as React from 'react';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender } from '../../commonTypes';

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  iconRender?: CustomRender<LoaderProps, {}, {}>,
  /** Глобальный лоадер */
  isGlobal?: boolean,
  /** Показывается ли лоадер */
  isLoading?: boolean,
  /** Реф */
  ref?: React.Ref<LoaderRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.loader],
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface IconProps {
  className?: string,
}

export interface LoaderRefCurrent {
  wrapper: HTMLDivElement | null,
}
