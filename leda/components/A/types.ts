import React from 'react';
import { CustomEventHandler } from '../../commonTypes';

export interface AProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Текст ссылки */
  children?: React.ReactNode,
  /** Ссылка */
  href?: string,
  /** Обработчик клика */
  onClick?: CustomEventHandler<React.MouseEvent<HTMLAnchorElement>>,
  /** Реф */
  ref?: React.Ref<ARefCurrent>,
  /** Если передано false, компонент не будет рендериться */
  shouldRender?: boolean,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface ARefCurrent {
  wrapper: HTMLAnchorElement | null,
}
