import { CustomRender } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

/** CountDown properties */
export interface CountDownProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Формат времени таймера. По-умолчанию mm:ss */
  format?: string,
  /** Интервал отсчета (в милисекундах, по умолчанию 1000). Чтобы поставить таймер на паузу, передать null */
  interval?: number | null,
  /** Функция обратного вызова при завершении отсчета таймера */
  onComplete?: () => void,
  /** Функция обратного вызова при паузе таймера */
  onPause?: () => void,
  /** Функция обратного вызова при старте таймера */
  onStart?: () => void,
  /** Функция обратного вызова при каждом изменении таймера */
  onTick?: () => void,
  /** Текст таймера */
  text?: string,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.countDown],
  /** Стартовое время отсчета (в милисекундах) */
  time: number,
  /** Кастомизация враппера */
  wrapperRender?: CustomRender<CountDownProps, {}, WrapperProps>,
}

/** Current ref of CountDown */
export interface CountDownRefCurrent {
  /** Wrapper element */
  wrapper: HTMLElement | null,
}

/** Wrapper properties */
export interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  /** Current ref of wrapper */
  ref?: React.Ref<CountDownRefCurrent>,
}
