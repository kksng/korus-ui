import * as React from 'react';
import { CustomRender, SomeObject } from '../../commonTypes';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { VSTEPPER_STATUS_TYPES } from './constants';

export interface BodyProps {
  children?: React.ReactNode,
}

export interface ContentProps {
  children?: React.ReactNode,
  className?: string,
}

export interface CustomElements {
  Body: React.FC<BodyProps>,
  Content: React.FC<ContentProps>,
  Heading: React.FC<HeadingProps>,
  Icon: React.FC<IconProps>,
  Status: React.FC<StatusProps>,
  Wrapper: React.FC<WrapperProps>,
}

export interface HeadingProps {
  children?: React.ReactNode,
  className?: string,
  onClick?: React.MouseEventHandler,
}

export interface IconProps {
  children?: React.ReactNode,
  className?: string,
  type?: string,
}

export interface ItemClassNames {
  headingIconClassName?: string,
  iconClassName?: string,
  lineClassName?: string,
  wrapperClassName?: string,
}

export interface StatusProps {
  children?: React.ReactNode,
  className?: string,
}

export type StepTypes = typeof VSTEPPER_STATUS_TYPES[keyof typeof VSTEPPER_STATUS_TYPES];

export interface VStepperItemProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** */
  bodyRender?: CustomRender<VStepperItemProps, { isOpen: boolean}, BodyProps>,
  /** Содержимое шага */
  children?: React.ReactNode,
  /** Классы для компонента */
  className?: string,
  /** Кастомизация содержимого шага */
  contentRender?: CustomRender<VStepperItemProps, { isOpen: boolean}, ContentProps>,
  /** Содержимое футера шага */
  footerContent?: React.ReactNode,
  /** Вместо цифры используется галка или крестик (в зависимости от статуса) */
  hasSignIcon?: boolean,
  /** Кастомизация заголовка */
  headingRender?: CustomRender<VStepperItemProps, { isOpen: boolean}, HeadingProps>,
  /** Кастомизация иконки */
  iconRender?: CustomRender<VStepperItemProps, { isOpen: boolean}, IconProps>,
  /** Отключение шага */
  isDisabled?: boolean,
  /** Состояние шага - открыт/закрыт */
  isOpen?: boolean,
  /** Объект с данными шага */
  item?: SomeObject,
  /** Тип следующего шага (по-умолчанию принимаются типы "success, progress, danger, warning" */
  nextStepType?: StepTypes,
  /** Обработчик клика по заголовку */
  onClick?: React.MouseEventHandler,
  /** Кастомизация статуса */
  statusRender?: CustomRender<VStepperItemProps, { isOpen: boolean}, StatusProps>,
  /** Текст статуса, используется если не передан item */
  statusText?: string,
  /** Поле из item с текстом для статуса шага */
  statusTextField?: string,
  /** Текст заголовка, используется если не передан item */
  titleText?: string,
  /** Поле из item с заголовком шага */
  titleTextField?: string,
  /** Поле из item с типом текущего шага (по-умолчанию принимаются типы "success, progress, danger, warning" */
  typeField?: StepTypes,
  /** Кастомизация враппера шага */
  wrapperRender?: CustomRender<VStepperItemProps, { isOpen: boolean}, WrapperProps>,
}

export interface VStepperProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Шаги */
  children: React.ReactNode,
  /** Реф */
  ref?: React.Ref<VStepperRefCurrent>,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.vstepper],
  /** Текущий шаг, если передано - текущему шагу передается класс progress, а всем предыдущим класс success
  * Не работает если в VStepperItem передан typeField
  * Если undefined - все шаги пустые
  * Если null - все шаги success */
  value?: SomeObject | null,
}

export interface VStepperRefCurrent {
  wrapper: HTMLDivElement | null,
}

export interface WrapperProps {
  children?: React.ReactNode,
  className?: string,
}
