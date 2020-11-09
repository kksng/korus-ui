import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { Form, FormsObject, ValidationButtonProps } from '../Validation/types';

export interface SubmitEvent extends React.MouseEvent<HTMLButtonElement> {
  form?: FormsObject,
  forms?: Form[],
}

export type ValidationFailEvent = React.MouseEvent<HTMLButtonElement> & { invalidForms: Form[] };

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, ValidationButtonProps {
  /** Название формы */
  form?: string | string[],
  /** Отключение кнопки */
  isDisabled?: boolean,
  /** Показывать лоадер */
  isLoading?: boolean,
  /** Обработчик клика */
  onClick?: (event: SubmitEvent) => void,
  /** Применяется к кнопке. Обработчик, который срабатывает, если есть невалидные поля,
   * если срабатывает onValidationFail, то onClick на кнопке не сработает */
  onValidationFail?: (ev: ValidationFailEvent) => void,
  /** Реф */
  ref?: React.Ref<ButtonRefCurrent>,
  /** Задержка перед скроллом к невалидным полям */
  scrollDelay?: number,
  /** Дополнительный сдвиг в px при скролинге к кнопке */
  scrollOffset?: number,
  /** Если передано false, компонент не будет рендериться */
  shouldRender?: boolean,
  /** Прокрутка к невалидным полям при нажатии на кнопку */
  shouldScrollToInvalidFields?: boolean,
  /** Тема компонета */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.button],
  /** Тип кнопки */
  type?: React.ButtonHTMLAttributes<{}>['type'],
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface ButtonRefCurrent {
  wrapper: HTMLButtonElement | null,
}
