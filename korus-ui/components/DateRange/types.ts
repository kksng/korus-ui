import * as React from 'react';
import {
  BlurEvent, ChangeEvent, FocusEvent,
} from '../../src/DateTimeInput/types';
import {
  CustomRangeEvent,
  DateTimeInputRangeProps,
  DateTimeInputRangeState,
  DateTimeInputRangeRefCurrent,
  DateTimeInputValueType,
} from '../../src/DateTimeInputRange/types';
import { CustomRender } from '../../commonTypes';
import { MaskedInputBaseProps } from '../../src/MaskedInputBase/types';


export interface DateRangeProps extends DateTimeInputRangeProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /* Dates that are disabled to be selected. Array of dates or dates ranges. */
  disabledDates?: (Date | [Date, Date])[],
  /** Формат отображаемой и вводимой даты. По-умолчанию "dd.MM.yyyy" */
  format?: string,
  /** Кастомизация полей ввода */
  inputRender?: CustomRender<DateRangeProps, DateTimeInputRangeState, MaskedInputBaseProps>,
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
  /** Функция обратного вызова при нажатии Enter в поле "до" */
  onEnterPress?: (ev: ChangeEvent) => void,
  /** Функция обратного вызова при фокусе */
  onFocus?: (ev: FocusEvent) => void,
  /** Плейсхолдер полей "от" и "до" */
  placeholder?: string | [string | undefined, string | undefined],
  /** Реф */
  ref?: React.Ref<DateTimeInputRangeRefCurrent>,
  /** Значения полей "от" и "до" */
  value?: [DateTimeInputValueType, DateTimeInputValueType] | null,
}
