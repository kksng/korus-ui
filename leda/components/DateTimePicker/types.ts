import * as React from 'react';
import {
  BlurEvent, ChangeEvent, FocusEvent, DateTimeInputProps,
  DateTimeInputRefCurrent, TimeLimits,
} from '../../src/DateTimeInput/types';

export interface DateTimePickerProps extends DateTimeInputProps {
  /** Формат отображаемой и вводимой даты. По-умолчанию "dd.MM.yyyy hh:mm" */
  format?: string,
  /** Признак принудительного открытия календаря */
  isOpen?: boolean,
  /** Признак отключения инпута */
  isDisabled?: boolean,
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
  /** Минимальное время */
  timeMin?: TimeLimits,
  /** Максимальное время */
  timeMax?: TimeLimits,
  /** Реф */
  ref?: React.Ref<DateTimeInputRefCurrent>,
  /** Значение поля ввода */
  value?: string | Date | null,
  /** Классы переданные через _ */
  [x: string]: unknown,
}
