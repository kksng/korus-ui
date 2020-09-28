import { GlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender } from '../../commonTypes';

/**
 *  Custom properties of component's item
 */
export interface ItemProps {
  /** Item's custom class name */
  className?: string,
  /** Item's child nodes */
  children?: React.ReactNode,
}

/**
 *  Data passed to component
 */
export type WizardData = WizardStepItem[] | string[];

/**
 *  Properties of component's item
 */
export interface WizardItemProps {
  /** Customization of component's item */
  itemRender?: CustomRender<WizardItemProps, {}, ItemProps>,
  /** Default theme */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.wizard],
  /** Flag shows if item is first */
  isFirst: boolean,
  /** Flag shows if item is last */
  isLast: boolean,
  /** Flag shows if item has success status */
  isSuccess: boolean,
  /** Flag shows if item is active */
  isActive: boolean,
  /** Label of item */
  labelText: string,
  /** Percentage of completion of the current step */
  currentStepProgress?: number,
}

export interface WizardProps {
  /** Тема компонента */
  theme?: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.wizard],
  /** Поле из которого извлекается текст для лейбла, работает только если в data объекты */
  textField?: string,
  /** Массив объектов или строк, которые представляют собой шаги */
  data: WizardData,
  /** Кастомизация Wizard целиком */
  itemRender?: CustomRender<WizardItemProps, {}, ItemProps>,
  /** Процент завершенности текущего шага */
  currentStepProgress?: number,
  /** Текущий шаг */
  value: WizardValue,
}

/**
 *  Object with component's values
 */
export interface WizardStepItem {
  [x: string]: any,
}

/**
 *  Component's current ref
 */
export interface WizardRefCurrent {
  wrapper: HTMLDivElement | null,
}

/**
 *  Value of component's item
 */
export type WizardValue = string | WizardStepItem;
