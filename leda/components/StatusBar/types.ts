import * as React from 'react';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { DATA_TYPES, STEP_POSITION } from './constants';
import { CustomRender, CustomEventHandler } from '../../commonTypes';

export interface StatusItem {
  [x: string]: any,
}

export interface ItemProps {
  className?: string,
  children?: React.ReactNode,
}

export interface IconProps {
  className?: string,
  onClick?: CustomEventHandler<React.MouseEvent<HTMLDivElement>>,
}

export interface LabelProps {
  className?: string,
  children?: React.ReactNode,
}

export type DataType = typeof DATA_TYPES[keyof typeof DATA_TYPES];

export interface StatusBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /** Процент завершенности текущего шага */
  currentStepProgress?: number,
  /** Массив объектов или строк, которые представляют собой шаги */
  data: StatusItem[] | string[],
  /** Кастомизация иконки */
  iconRender?: CustomRender<StatusBarItemProps, {}, IconProps>,
  /** Кастомизация StatusBarItem целиком */
  itemRender?: CustomRender<StatusBarItemProps, {}, ItemProps>,
  /** Кастомизация лейбла, если не передано, то в качестве врапперов используется span */
  labelRender?: CustomRender<StatusBarItemProps, {}, LabelProps>,
  /** Обработчик клика */
  onClick?: CustomEventHandler<StatusBarItemClickEvent>,
  /** Реф */
  ref?: React.Ref<StatusBarRefCurrent>,
  /** Поле из которого извлекается текст для лейбла, работает только если в data объекты */
  textField?: string,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.statusBar],
  /** Поле из которого извлекается тип шага, работает только если в data объекты */
  typeField?: string,
  /** Текущий шаг, игнорируется если StatusItem содержит тип type  */
  value?: StatusItem | string,
}

export interface StatusBarItemClickEvent {
  target: {
    item: string | StatusItem,
    index: number,
  },
}

export type PositionType = typeof STEP_POSITION[keyof typeof STEP_POSITION];

export interface StatusBarItemProps {
  className?: string,
  iconRender?: CustomRender<StatusBarItemProps, {}, IconProps>,
  index: number,
  isFirst: boolean,
  isLast: boolean,
  item: string | StatusItem,
  itemRender?: CustomRender<StatusBarItemProps, {}, ItemProps>,
  key: string,
  labelRender?: CustomRender<StatusBarItemProps, {}, LabelProps>,
  labelText: string,
  onClick?: CustomEventHandler<StatusBarItemClickEvent>,
  position: PositionType | null,
  currentStepProgress?: number,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.statusBar],
  type: string | null,
}

export interface StatusBarRefCurrent {
  wrapper: HTMLDivElement | null,
}
