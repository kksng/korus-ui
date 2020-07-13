import * as React from 'react';
import {
  BlurEvent, ChangeEvent, FocusEvent,
} from '../../src/DateTimeInput/types';
import {
  CustomRangeEvent,
  DateTimeInputRangeProps,
  DateTimeInputRangeRefCurrent,
  DateTimeInputValueType,
} from '../../src/DateTimeInputRange/types';

export interface DateRangeProps extends DateTimeInputRangeProps {
  /** Формат отображаемой и вводимой даты. По-умолчанию "dd.MM.yyyy" */
  format?: string,
  /** Признак отключения инпута */
  isDisabled?: boolean | [boolean, boolean],
  /** Открытое состояние компонента */
  isOpen?: boolean | [boolean, boolean],
  /** Являются ли поля обязательными для заполнения */
  isRequired?: boolean | [boolean, boolean],
  /** Максимальное значение диапазона */
  max?: Date,
  /** Минимальное значение диапазона */
  min?: Date,
  /** Имя полей ввода */
  name?: string | [string | undefined, string | undefined],
  /** Функция обратного вызова при блюре */
  onBlur?: (ev: BlurEvent) => void,
  /** Функция обратного вызова при изменении значения полей */
  onChange?: (ev: CustomRangeEvent) => void,
  /** Функция обратного вызова при фокусе */
  onFocus?: (ev: FocusEvent) => void,
  /** Функция обратного вызова при нажатии Enter в поле "до" */
  onEnterPress?: (ev: ChangeEvent) => void,
  /** Плейсхолдер полей "от" и "до" */
  placeholder?: string | [string | undefined, string | undefined],
  /** Реф */
  ref?: React.Ref<DateTimeInputRangeRefCurrent>,
  /** Значения полей "от" и "до" */
  value?: [DateTimeInputValueType, DateTimeInputValueType] | null,
  /** Классы переданные через _ */
  [x: string]: unknown,
}
