import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

/**
 * Change event
 */
export interface ChangeEvent {
  component: {
    /** Current TourStepItem */
    item: TourStepItem | null,
    /** Current step key */
    value: number | string | null,
  },
}

/**
 * Modal window content properties
 */
export interface ContentProps {
  /** Function allows to jump to any tour item */
  goTo: (stepNumber: number) => void,
  /** Function switches to next tour item */
  next: () => void,
  /** Function switches to previous tour item */
  prev: () => void,
  /** Function stops tour  */
  stopTour: () => void,
}

export interface TourProps {
  /** Идентификатор активного шага, если null - гайд-тур закрыт */
  activeStepKey?: number | string | null,
  /** Шаги гайд-тура */
  data: TourStepItem[],
  /** Обработчик изменения */
  onChange: (ev: ChangeEvent) => void,
  /** Пауза перед отрисовкой шага гайд-тура. Передается в секундах */
  stepDelay?: number,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tour],
}

export interface TourStepItem {
  /** Скругление у выделенных элементов в px, по-умолчанию 15px */
  borderRadius?: number,
  /** Контент */
  content: (props: ContentProps) => React.ReactElement | null,
  /** Элемент, который надо подсветить */
  element: HTMLElement | null,
  /** Отступ при скролле в px, по умолчанию 200px */
  offsetTop?: number,
  /** Отступы выделенной области в px, по-умолчанию 0px */
  padding?: number,
  /** Положение модалки */
  position: 'top' | 'right' | 'bottom' | 'left' | 'top-left' | 'top-center' | 'bottom-left' | 'bottom-center',
  /** Идентификатор шага */
  stepKey: string | number,
}
