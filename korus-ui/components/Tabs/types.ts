import React from 'react';
import { CustomRender } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { LiProps } from '../Li';
import { defaultTabsTheme } from './theme';

export interface TabsProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Устанавливает номер выбранного таба */
  activeTabKey?: string | number,
  /** Вложенные элементы */
  children?: React.ReactNode,
  /** Кастомный content */
  contentRender?: CustomRender<TabsProps, TabsState, ContentProps>,
  /** Кастомный heading */
  headingRender?: CustomRender<TabsProps, TabsState, HeadingProps>,
  /** Обработчик выбора таба */
  onChange?: (event: ChangeEvent) => void,
  /** Reference */
  ref?: React.Ref<TabsRefCurrent>,
  /** Скролл для табов */
  shouldScrollTabs?: boolean,
  /** DOM-узел, в который будет помещено содержимое вкладки */
  tabContentNode?: HTMLElement | null,
  /** Кастомный tab */
  tabRender?: CustomRender<TabProps, {}, LiProps>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tabs],
  /** Кастомный wrapper */
  wrapperRender?: CustomRender<TabsProps, TabsState, WrapperProps>,
}

export interface TabsState {
  activeTabKey: string | number,
}

export type TabProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Вложенные элементы */
  children?: React.ReactNode,
  /** Делает вкладку неактивной */
  isDisabled?: boolean,
  /** Номер вкладки. Нумерация от 0, т.к. обработчик onSelect комопнента Tabs возвращает номер вкладки начиная с 0. */
  tabKey: string | number,
  /** Кастомный tab */
  tabRender?: CustomRender<TabProps, {}, LiProps>,
  /** Тема копмонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tabs],
  /** Название таба. Может принимать название в виде строки или ReactNode */
  title: React.ReactNode,
};

export interface TabsContextType {
  activeTabKey: string | number,
  onTabSelect: SelectHandler,
  tabRender?: CustomRender<TabProps, {}, LiProps>,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tabs],
}

export interface SelectHandler {
  (ev: React.MouseEvent<HTMLLIElement>, tabKey: string | number): void,
}

export interface CreateSelectHandler {
  (
    props: TabsProps,
    activeTabKey: string | number,
    setActiveTabKey: React.Dispatch<React.SetStateAction<string | number>>
  ): SelectHandler,
}

export interface TabContentProps {
  /** EventKey выбранной вкладки */
  activeTabKey: string | number,
  /** Вложенные элементы */
  children?: React.ReactNode,
}

export interface ChangeEvent extends React.MouseEvent {
  component: {
    value: string | number,
  },
}

export interface WrapperProps {
  children?: React.ReactNode,
  className?: string,
  ref?: React.Ref<TabsRefCurrent>,
  style?: React.CSSProperties,
}

export interface ContentProps {
  children?: React.ReactNode,
  className?: string,
  tabContentNode?: Element | null,
}

export interface HeadingProps {
  children?: React.ReactNode,
  className?: string,
}

export interface CustomElements {
  Content: React.FC<ContentProps>,
  Heading: React.FC<HeadingProps>,
  Wrapper: React.FC<WrapperProps>,
}

export interface TabsRefCurrent {
  content: HTMLElement | null,
  wrapper: HTMLElement | null,
}

export interface TabRefCurrent {
  wrapper: HTMLLIElement | null,
}

export interface ArrowProps {
  onClick: React.MouseEventHandler,
  theme: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tabs],
}

export interface TabsScroll {
  containerRef: React.Ref<any>,
  hasLeftArrow: boolean,
  hasRightArrow: boolean,
  hasScroll: boolean,
  onLeftClick: React.MouseEventHandler,
  onRightClick: React.MouseEventHandler,
}

export interface TabsScrollProps {
  shouldScrollTabs?: boolean,
  theme: typeof defaultTabsTheme,
}
