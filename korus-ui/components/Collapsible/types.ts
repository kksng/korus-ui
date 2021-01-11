import * as React from 'react';

export interface TransitionOptions {
  /** Функция анимации коллапса. См. https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function */
  animation: string,
  /** Длительность задержки перед началом анимации. Число в миллисекундах. Строки с единицами измерения */
  delay?: number | string,
  /** Длительность анимации коллапса. Число в миллисекундах. Строки с единицами измерения */
  duration: number | string,
}

export interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Состояние элемента открыт/закрыт */
  isOpen: boolean,
  /** Функция обратного вызова при окончании закрытия коллапса */
  onClose?: () => void,
  /** Функция обратного вызова при окончании открытия коллапса */
  onOpen?: () => void,
  /** Функция обратного вызова при окончании анимации коллапса */
  onToggle?: () => void,
  /** Реф */
  ref?: React.Ref<CollapsibleRefCurrent>,
  /** Описание открытия/закрытия коллапса. Описывается как CSS Transition. См. https://developer.mozilla.org/en-US/docs/Web/CSS/transition. По умолчанию height 250ms cubic-bezier(.4, 0, .2, 1) */
  transition?: string | TransitionOptions,
}

export interface CollapsibleRefCurrent {
  wrapper: HTMLDivElement | null,
}
