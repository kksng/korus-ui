import * as React from 'react';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Реф */
  ref?: React.Ref<TagsRefCurrent>,
  /* Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tags],
  /** Кастомный wrapper */
  wrapperRender?: CustomRender<TagsProps, {}, WrapperProps>,
}

export interface IconProps {
  className?: string,
  onClick?: CustomEventHandler<React.MouseEvent<HTMLSpanElement>>,
}

export interface WrapperProps {
  children?: React.ReactNode,
  className?: string,
  ref?: React.Ref<TagsRefCurrent>,
}

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Иконка для тега */
  iconRender?: CustomRender<TagProps, {}, IconProps>,
  /** Обработчик клика по иконке */
  onIconClick?: CustomEventHandler<React.MouseEvent<HTMLSpanElement>>,
  /** Реф */
  ref?: React.Ref<TagsRefCurrent>,
  /** Тема для компонента (передается через Tags) */
  theme?: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tags],
  /** Кастомный wrapper */
  wrapperRender?: CustomRender<TagProps, {}, WrapperProps>,
}

export interface TagsRefCurrent {
  wrapper: HTMLElement | null,
}
