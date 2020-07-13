import * as React from 'react';

export interface ContentProps {
  goTo: (stepNumber: number) => void,
  next: () => void,
  prev: () => void,
  stopTour: () => void,
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
  /** Положение модалки */
  position: 'top' | 'right' | 'bottom' | 'left',
  /** Идентификатор шага */
  stepKey: string | number,
}

export interface ChangeEvent {
  component: {
    value: number | string | null,
    item: TourStepItem | null,
  },
}

export interface TourProps {
  /** Идентификатор активного шага, если null - гайд-тур закрыт */
  activeStepKey?: number | string | null,
  /** Шаги гайд-тура */
  data: TourStepItem[],
  /** Обработчик изменения */
  onChange: (ev: ChangeEvent) => void,
}
