import * as React from 'react';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender } from '../../commonTypes';

export interface ProgressBarProps {
  /** Реф */
  ref?: React.Ref<ProgressBarRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.progressBar],
  /** Значение "завершенности" прогресс бара */
  value: number,
  /** Кастомный рендер для цифр со значением компонента, если цифры не нужны - передайте () => null */
  valueRender?: CustomRender<ProgressBarProps, {}, ValueLabelProps>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface ValueLabelProps {
  'data-value': number,
  children: React.ReactNode,
  className: string,
}

export interface ProgressBarRefCurrent {
  wrapper: HTMLDivElement | null,
}
