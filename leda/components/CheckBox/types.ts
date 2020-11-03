import * as React from 'react';
import { CustomRender } from '~/commonTypes';
import { PartialGlobalDefaultTheme } from '~/utils/useTheme';
import { COMPONENTS_NAMESPACES } from '~/constants';

export interface ChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  component: {
    value: boolean,
    name?: string,
  },
}

export interface CheckBoxProps {
  /** Всё, что обёрнуто в L.Checkbox, попадает в label */
  children?: React.ReactNode,
  /** Значение по-умолчанию, если не передано - false */
  defaultValue?: boolean,
  /** Id для чекбокса */
  id?: string,
  /** Кастомизация инпута, непосредственно инпут - невидим, но данный рендер позволяет добавить атрибуты в тег <input> */
  inputRender?: CustomRender<CheckBoxProps, {}, React.InputHTMLAttributes<HTMLInputElement>>,
  /** Отключение чекбокса */
  isDisabled?: boolean,
  /** Получекбокс (минус вместо галочки) */
  isSemi?: boolean,
  /** Кастомизация элемента label */
  labelRender?: CustomRender<CheckBoxProps, {}, React.LabelHTMLAttributes<any>>,
  /** Имя компонента */
  name?: string,
  /** Обработчик изменения состояния элементов */
  onChange?: (event: ChangeEvent) => void,
  /** Реф */
  ref?: React.Ref<CheckBoxRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.checkBox],
  /** Значение чекбокса */
  value?: boolean,
  /** Кастомизация враппера */
  wrapperRender?: CustomRender<CheckBoxProps, {}, Partial<CheckBoxProps>>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface CheckBoxRefCurrent {
  wrapper: HTMLElement | null,
  input: HTMLInputElement | null,
  label: HTMLLabelElement | null,
}
