import * as React from 'react';
import { CustomRender, SomeObject } from '../../commonTypes';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';

export interface VStepperProps {
  /** Шаги */
  children: React.ReactNode,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.vstepper],
  /** Текущий шаг, если передано - текущему шагу передается класс progress, а всем предыдущим класс success
  * Не работает если в VStepperItem передан typeField
  * Если undefined - все шаги пустые
  * Если null - все шаги success */
  value?: SomeObject | null,
  ref?: React.Ref<VStepperRefCurrent>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface VStepperItemProps {
  /** Классы для компонента */
  className?: string,
  /** Поле из item с заголовком шага */
  titleTextField?: string,
  /** Содержимое шага */
  children?: React.ReactNode,
  /** Поле из item с текстом для статуса шага */
  statusTextField?: string,
  /** Текст заголовка, используется если не передан item */
  titleText?: string,
  /** Текст статуса, используется если не передан item */
  statusText?: string,
  /** Поле из item с типом текущего шага (по-умолчанию принимаются типы "success, progress, danger" */
  typeField?: string,
  /** Кастомизация иконки */
  iconRender?: CustomRender<VStepperItemProps, { isOpen: boolean}, IconProps>,
  /** Кастомизация содержимого шага */
  contentRender?: CustomRender<VStepperItemProps, { isOpen: boolean}, ContentProps>,
  /** Кастомизация враппера шага */
  wrapperRender?: CustomRender<VStepperItemProps, { isOpen: boolean}, WrapperProps>,
  /** Кастомизация статуса */
  statusRender?: CustomRender<VStepperItemProps, { isOpen: boolean}, StatusProps>,
  /** Кастомизация заголовка */
  headingRender?: CustomRender<VStepperItemProps, { isOpen: boolean}, HeadingProps>,
  /** */
  bodyRender?: CustomRender<VStepperItemProps, { isOpen: boolean}, BodyProps>,
  /** Вместо цифры используется галка или крестик (в зависимости от статуса) */
  hasSignIcon?: boolean,
  /** Отключение шага */
  isDisabled?: boolean,
  /** Объект с данными шага */
  item?: SomeObject,
  /** Состояние шага - открыт/закрыт */
  isOpen?: boolean,
  /** Обработчик клика по заголовку */
  onClick?: React.MouseEventHandler,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface IconProps {
  className?: string,
  type?: string,
  children?: React.ReactNode,
}

export interface ContentProps {
  className?: string,
  children?: React.ReactNode,
}

export interface WrapperProps {
  className?: string,
  children?: React.ReactNode,
}

export interface StatusProps {
  className?: string,
  children?: React.ReactNode,
}

export interface HeadingProps {
  className?: string,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
}

export interface BodyProps {
  children?: React.ReactNode,
}

export interface ItemClassNames {
  wrapperClassName?: string,
  iconClassName?: string,
  headingIconClassName?: string,
}

export interface CustomElements {
  Body: React.FC<BodyProps>,
  Content: React.FC<ContentProps>,
  Heading: React.FC<HeadingProps>,
  Icon: React.FC<IconProps>,
  Status: React.FC<StatusProps>,
  Wrapper: React.FC<WrapperProps>,
}

export interface VStepperRefCurrent {
  wrapper: HTMLDivElement | null,
}
