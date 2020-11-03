import * as React from 'react';
import { RenderEvent } from '~/commonTypes';
import { PartialGlobalDefaultTheme } from '~/utils/useTheme';
import { COMPONENTS_NAMESPACES } from '~/constants';

/**
 * Custom elements
 */
export interface CustomElements {
  Wrapper: React.FC<WrapperProps>,
}

export interface DropDownProps extends React.HTMLAttributes<HTMLElement> {
  /** Ссылка на контейнер, относительно которого нужно позиционировать элемент */
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement | null }>,
  /** Принудительное открытие списка */
  isOpen?: boolean,
  /** Реф */
  ref?: React.Ref<DropDownRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropDown],
  /** Тег-обертка, при наведении на который, будет отображаться данный dropdown, по умолчанию <div> */
  wrapperRender?: (props: RenderEvent<DropDownProps>) => React.ReactNode,
  /** Открытие по клику, по умолчанию открытие по наведению */
  interactionMode?: 'click',
  /** Классы переданные через _ */
  [x: string]: unknown,
}

/**
 * Component's current ref
 */
export interface DropDownRefCurrent {
  /** Wrapper element */
  wrapper: HTMLElement | null,
}

/**
 * Props of Wrapper component
 */
export interface WrapperProps {
  /** Custom class */
  className?: string,
  /** Child elements */
  children?: React.ReactNode,
  /** Component's current ref */
  ref?: React.Ref<DropDownRefCurrent>,
  /** Classes passed through _ */
  [x: string]: unknown,
}
