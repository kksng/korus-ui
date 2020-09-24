import * as React from 'react';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { DivRefCurrent } from '../Div';

export type WindowSizeType = 'sm' | 'md' | 'lg';

export interface ModalProps {
  /** Дочерние элементы */
  children?: React.ReactNode,
  /** Имена классов */
  className?: string,
  /** Кастомный рендер для иконки закрытия */
  iconRender?: CustomRender<ModalWindowProps, {}, IconProps>,
  /** Is Alert open */
  isAlertOpen?: boolean,
  /** Признак состояния. Обязательное, т.к. всегда нужен стейт для отслеживания состояния */
  isOpen: boolean,
  /** Alert close handler */
  onAlertClose?: (ev: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void,
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
  /** Render alert content */
  renderAlert?: React.ReactNode,
  /** Размер окна.
   * Имеет три стандартных значения sm=480, md=608, lg=868.
   * Принимает строку вида "50%", "50px", "50rem"
   * Если не задан, то устанавливается значение md=608 */
  size?: WindowSizeType | string,
  /** Темизация компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.modal],
  /** Кастомный рендер для wrapper */
  wrapperRender?: CustomRender<ModalWindowProps, {}, WrapperProps>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export type ModalWindowProps = ModalProps & { innerRef?: React.Ref<ModalRefCurrent> };

export interface ModalElementsProps {
  children?: React.ReactNode,
  className?: string,
  wrapperRender?: CustomRender<ModalElementsProps, {}, React.HTMLAttributes<HTMLDivElement>>,
  [x: string]: unknown,
}

export interface ModalAlertProps {
  children?: React.ReactNode,
  className?: string,
  /** Is Alert open */
  isOpen?: boolean,
  /** Alert close */
  onClose?: (ev: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void,
  [x: string]: unknown,
}

export interface ModalContextType {
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
