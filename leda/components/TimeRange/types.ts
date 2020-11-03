import * as React from 'react';
import {
  BlurEvent, ChangeEvent, FocusEvent, TimeLimits,
} from '~/src/DateTimeInput/types';
import {
  CustomRangeEvent, DateTimeInputRangeProps,
  DateTimeInputRangeRefCurrent,
} from '~/src/DateTimeInputRange/types';

export interface TimeRangeProps extends DateTimeInputRangeProps {
  /** Формат отображаемой и вводимой даты. По-умолчанию "hh:mm" */
  format?: string,
  /** Признак отключения инпута */
  isDisabled?: boolean | [boolean, boolean],
  /** Открытое состояние компонента */
  isOpen?: boolean | [boolean, boolean],
  /** Являются ли поля обязательными для заполнения */
  isRequired?: boolean | [boolean, boolean],
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
  /** Минимальное время, применяется к обоим полям */
  timeMin?: TimeLimits,
  /** Минимальное время, применяется к обоим полям */
  timeMax?: TimeLimits,
  /** Реф */
  ref?: React.Ref<DateTimeInputRangeRefCurrent>,
  /** Значение полей "от" и "до" */
  value?: [string, string] | [Date | null, Date | null],
  /** Классы переданные через _ */
  [x: string]: unknown,
}
