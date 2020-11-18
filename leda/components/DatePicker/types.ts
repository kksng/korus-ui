import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  BlurEvent,
  ChangeEvent,
  FocusEvent,
  DateTimeInputProps,
  DateTimeInputRefCurrent,
} from '../../src/DateTimeInput/types';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface DatePickerProps extends DateTimeInputProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /* Dates that are disabled to be selected. Array of dates or dates ranges. */
  disabledDates?: (Date | [Date, Date])[],
  /** Формат отображаемой и вводимой даты. По-умолчанию dd.MM.yyyy */
  format?: string,
  /** Признак отключения инпута */
  isDisabled?: boolean,
  /** Признак принудительного открытия календаря */
  isOpen?: boolean,
  /** Максимально доступная дата для выбора */
  max?: Date,
  /** Минимально доступная дата для выбора */
  min?: Date,
  /** Имя поля ввода */
  name?: string,
  /** Функция обратного вызова при потере фокуса */
  onBlur?: (ev: BlurEvent) => void,
  /** Функция обратного вызова при изменении значения в поле ввода */
  onChange?: (ev: ChangeEvent) => void,
  /**  Функция обратного вызова при нажатии Enter */
  onEnterPress?: (ev: ChangeEvent) => void,
  /** Функция обратного вызова при фокусе поля ввода */
  onFocus?: (ev: FocusEvent) => void,
  /** Плейсхолдер для поля ввода */
  placeholder?: string,
  /** Реф */
  ref?: React.Ref<DateTimeInputRefCurrent>,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dateTimeInput],
  /** Значение поля ввода */
  value?: string | Date | null,
}
