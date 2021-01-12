import * as React from 'react';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { DivRefCurrent } from '../Div';

export type WindowSizeType = 'sm' | 'md' | 'lg';

export interface ModalProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Alert unique ID key */
  activeAlertKey?: string | null,
  /** Дочерние элементы */
  children?: React.ReactNode,
  /** Имена классов */
  className?: string,
  /** Кастомный рендер для иконки закрытия */
  iconRender?: CustomRender<ModalWindowProps, {}, IconProps>,
  /** Признак состояния. Обязательное, т.к. всегда нужен стейт для отслеживания состояния */
  isOpen: boolean,
  /** Обработчик закрытия модалки по клику на оверлей, нажатию на крестик или нажатию Escape */
  onClose?: (ev: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void,
  /** Наличие кнопки закрытия окна и обработчик */
  onCloseButtonClick?: CustomEventHandler<React.MouseEvent<HTMLElement>>,
  /** Закрытие окна по escape и обработчик */
  onEscapePress?: CustomEventHandler<React.KeyboardEvent<HTMLElement>>,
  /** Обработчик клика за пределами модального окна */
  onOverlayClick?: CustomEventHandler<React.MouseEvent<HTMLElement>>,
  /** Реф */
  ref?: React.Ref<ModalRefCurrent>,
  /** Размер окна.
   * Имеет три стандартных значения sm=480, md=608, lg=868.
   * Принимает строку вида "50%", "50px", "50rem"
   * Если не задан, то устанавливается значение md=608 */
  size?: WindowSizeType | string,
  /** Темизация компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.modal],
  /** Кастомный рендер для wrapper */
  wrapperRender?: CustomRender<ModalWindowProps, {}, WrapperProps>,
}

export type ModalWindowProps = ModalProps & { innerRef?: React.Ref<ModalRefCurrent> };

export interface ModalElementsProps {
  [x: string]: unknown,
  children?: React.ReactNode,
  className?: string,
  wrapperRender?: CustomRender<ModalElementsProps, {}, React.HTMLAttributes<HTMLDivElement>>,
}

export interface ModalAlertProps {
  [x: string]: unknown,
  /** Alert unique ID key */
  alertKey: string,
  children?: React.ReactNode,
  className?: string,
  /** Alert close handler */
  onClose?: () => void,
}

export interface ModalContextType {
  /** Alert unique ID key */
  activeAlertKey?: string | null,
  bodyClassName: string,
  footerClassName: string,
  headerClassName: string,
}

export interface ModalRefCurrent {
  wrapper: HTMLDivElement | null,
}

export interface CustomElements {
  Icon: React.FC<IconProps>,
  Wrapper: React.FC<WrapperProps>,
}

export interface WrapperProps extends ModalElementsProps {
  onClick?: React.MouseEventHandler<HTMLElement>,
  ref?: React.Ref<DivRefCurrent>,
}

export interface IconProps extends ModalElementsProps {
  onClick?: React.MouseEventHandler<HTMLElement>,
}
