import * as React from 'react';
import { CustomRender } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface ChangeEvent extends React.MouseEvent<HTMLDivElement> {
  component: {
    name?: string,
    value: boolean,
  },
}

export interface SwitcherProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Кастомный switcher для компонента (подложка + иконка) */
  baseRender?: CustomRender<SwitcherProps, SwitcherState, BaseProps>,
  /** Дочерние элементы (рендерятся внутри <label> */
  children?: React.ReactNode,
  /** Кастомная иконка для компонента (перемещающийся круг) */
  iconRender?: CustomRender<SwitcherProps, SwitcherState, IconProps>,
  /** Отключение переключателя */
  isDisabled?: boolean,
  /** Кастомный label для компонента */
  labelRender?: CustomRender<SwitcherProps, SwitcherState, LabelProps>,
  /** Имя элемента, возвращаемое в функции обратного вызова */
  name?: string,
  /** Функция обратного вызова при смене состояния переключателя */
  onChange?: (ev: ChangeEvent) => void,
  /** Функция обратного вызова при клике по переключателю */
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void,
  /** Реф */
  ref?: React.Ref<SwitcherRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.switcher],
  /** Состояние переключателя */
  value?: boolean,
  /** Кастомный wrapper для компонента */
  wrapperRender?: CustomRender<SwitcherProps, SwitcherState, WrapperProps>,
}

export interface SwitcherState {
  value: boolean,
}

export interface WrapperProps {
  children?: React.ReactNode,
  className?: string,
  ref?: React.Ref<SwitcherRefCurrent> | null,
}

export interface LabelProps {
  children?: React.ReactNode,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLSpanElement>,
}

export interface BaseProps {
  className?: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
}

export interface IconProps {
  className?: string,
}

export interface CustomElements {
  Base: React.FC<BaseProps>,
  Icon: React.FC<IconProps>,
  Label: React.FC<LabelProps>,
  Wrapper: React.FC<WrapperProps>,
}

export interface SwitcherRefCurrent {
  wrapper: HTMLElement | null,
}
