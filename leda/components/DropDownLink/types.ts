import * as React from 'react';
import {
  CustomRender, DataObject, CustomEventHandler,
} from '../../commonTypes';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';

export type Value = DataObject | string | number;

export interface ClickEvent<T = Value> extends React.MouseEvent<HTMLElement> {
  component: {
    name?: string,
    value: T,
  },
}

export interface ChangeEvent<T = Value> extends React.ChangeEvent<HTMLElement> {
  component: {
    name: string,
    value: T,
  },
}

export interface DropDownLinkProps<T extends Value = Value> extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Дополнительные классы компонента */
  className?: string,
  /** Данные для отображения в списке.
   * Если передаётся массив обьектов, нужно указать textField - поле обьекта, которое содержит данные для вывода в списке
   * и valueField (не обязательно), если в onChange нужно передавать данные другого поля обьекта (например id) */
  data: DataObject[] | string[],
  /** Функция для кастомизации значения и внешнего вида элемента выпадающего списка. Вызывается когда элемент собирается визуализироваться. */
  itemRender?: CustomRender<DropDownLinkItemProps, {}, ItemProps>,
  /** Имя компонента */
  name?: string,
  /** Обработчик выбора элемента */
  onChange: (event: ChangeEvent) => void,
  /** Имя поля объекта, данные из которого будут рендериться в качестве элементов списка */
  textField?: T extends object ? string : never,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropDownLink],
  /** Функция для кастомизации текущего значения */
  titleRender?: CustomRender<DropDownLinkProps, {}, TitleProps>,
  /** Принудительное открытие списка */
  isOpen?: boolean,
  /** Реф */
  ref?: React.Ref<DropDownLinkRefCurrent>,
  /** Устанавливает текущее значение */
  value: T,
}

export interface DropDownLinkItemProps {
  className?: string,
  item: Value,
  itemRender?: CustomRender<DropDownLinkItemProps, {}, ItemProps>,
  name?: string,
  onClick: CustomEventHandler<ClickEvent>,
  textField: string,
}

export type DropDownLinkType = React.FC<DropDownLinkProps> & { Item?: React.FC<DropDownLinkItemProps> };

export interface ItemProps {
  children?: React.ReactNode,
  className?: string,
  onClick?: CustomEventHandler<React.MouseEvent<HTMLAnchorElement>>,
}

export interface TitleProps {
  children?: React.ReactNode,
  className?: string,
}

export interface DropDownLinkRefCurrent {
  wrapper: HTMLElement | null,
}
