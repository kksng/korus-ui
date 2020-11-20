import * as React from 'react';

export interface SvgProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Убрать дефолтный класс icon-namespace */
  noIconClass?: boolean,
  /** Обработчик клика */
  onClick?: React.MouseEventHandler<SVGSVGElement>,
  ref?: React.Ref<SvgRefCurrent>,
}

export interface SvgRefCurrent {
  wrapper: SVGSVGElement | null,
}
