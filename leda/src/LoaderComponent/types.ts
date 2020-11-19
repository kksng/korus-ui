import * as React from 'react';
import { CustomRender } from '../../commonTypes';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';

/**
 * Properties of custom item
 */
export interface CustomItemProps {
  /** Children */
  children?: React.ReactNode,
  /** Class name */
  className?: string,
}

export interface LoadingComponentProps {
  /** Класс */
  className?: string,
  /** Состояние загрузки */
  isLoading?: boolean,
  /** Прогресс загрузки, число от 1 до 100 */
  loadingProgress?: number,
  /** Кастомизация верстки состояния загрузки */
  loadingViewRender?: CustomRender<LoadingComponentProps, {}, CustomItemProps>,
  /** Сообщение загрузки */
  text?: string,
  /** Тема */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.loaderComponent],
}

/**
 * Properties of progress loader
 */
export interface ProgressLoaderProps {
  /** Flag defines loading state */
  isLoading?: boolean,
  /** Loading progress, number from 1 to 100 */
  loadingProgress?: number,
  /** Theme */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.loaderComponent],
}
