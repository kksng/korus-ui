import * as React from 'react';
import { isNil } from 'lodash';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { DateTimeInput } from '../DateTimeInput';
import {
  bindFunctionalRef, getClassNames, useProps, useTheme,
} from '../../utils';
import { DateTimeInputRefCurrent } from '../DateTimeInput/types';
import {
  getDisabled, getName, getOpen, getPlaceholder, getRequired, getRequiredMessage, isDateValue, getReplacedValue,
} from './helpers';
import { useCustomElements, useDateRange } from './hooks';
import {
  createChangeHandler, createEnterPressHandler, handleErrors,
} from './handlers';
import { DateTimeInputRangeProps, DateTimeInputRangeRefCurrent, DateTimeInputRangeState } from './types';

export const DateTimeInputRange = React.forwardRef((props: DateTimeInputRangeProps, ref: React.Ref<DateTimeInputRangeRefCurrent>) => {
  const {
    boundingContainerRef,
    calendarHeaderRender,
    className,
    dateCellRender,
    dateViewRender,
    delimiterRender,
    disabledDates,
    format = 'dd.MM.yyyy',
    form,
    iconRender,
    inputsRender,
    isDisabled: disabledProp,
    isOpen: openProp,
    isRequired: requiredProp,
    requiredMessage: requiredMessageProp,
    max,
    min,
    monthViewRender,
    name: nameProp,
    onBlur,
    onChange,
    onEnterPress,
    onFocus,
    placeholder: placeholderProp,
    theme: themeProp,
    type,
    value: valueProp,
    weeksRowRender,
    wrapperRangeRender,
    wrapperRender,
    yearViewRender,
    calendarWrapperRender,
    monthNames,
    shortMonthNames,
    weekDayNames,
    shortWeekDayNames,
    ...restProps
  } = useProps(props);

  handleErrors(props);

  const state: DateTimeInputRangeState = useDateRange(props);

  const toDateTimeInputRef = React.useRef<DateTimeInputRefCurrent | null>(null);

  const {
    date,
    setDate,
    value: valueState,
  } = state;

  const value = isNil(valueProp) ? date : getReplacedValue(valueProp);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.dateTimeInputRange);

  const placeholders = getPlaceholder(placeholderProp);

  const required = getRequired(requiredProp);

  const open = getOpen(openProp);

  const disabled = getDisabled(disabledProp);

  const name = getName(nameProp);

  const requiredMessages = getRequiredMessage(requiredMessageProp);

  const handleChange = createChangeHandler(props, state);

  const handleEnterPress = createEnterPressHandler(props, toDateTimeInputRef);

  const {
    WrapperRange,
    Delimiter,
  } = useCustomElements(props, state);

  React.useEffect((): void => {
    if (isDateValue(valueProp)) {
      setDate(valueProp);
    }
  }, [valueProp, setDate]);

  const wrapperClassNames = getClassNames(
    className,
    theme.wrapper,
  );

  return (
    <WrapperRange
      {...restProps}
      className={wrapperClassNames}
      ref={ref && ((component) => {
        const inputs = (component && component.wrapper && component.wrapper.querySelectorAll('input')) || [null, null];
        bindFunctionalRef(component, ref, component && {
          inputFrom: inputs[0],
          inputTo: inputs[1],
          wrapper: component.wrapper,
        });
      })}
    >
      <DateTimeInput
        boundingContainerRef={boundingContainerRef}
        calendarHeaderRender={calendarHeaderRender}
        dateCellRender={dateCellRender}
        dateViewRender={dateViewRender}
        disabledDates={disabledDates}
        format={format}
        form={form}
        iconRender={iconRender}
        inputRender={inputsRender?.[0] ?? undefined}
        isDisabled={disabled[0]}
        isOpen={open[0]}
        isRequired={required[0]}
        max={date[1] || max}
        min={min}
        monthViewRender={monthViewRender}
        name={name[0]}
        onBlur={onBlur}
        onChange={handleChange('from')}
        onEnterPress={handleEnterPress('from')}
        onFocus={onFocus}
        placeholder={placeholders[0]}
        theme={theme.from}
        type={type}
        value={value[0]}
        weeksRowRender={weeksRowRender}
        wrapperRender={wrapperRender}
        yearViewRender={yearViewRender}
        calendarWrapperRender={calendarWrapperRender}
        requiredMessage={requiredMessages[0]}
        monthNames={monthNames}
        shortMonthNames={shortMonthNames}
        weekDayNames={weekDayNames}
        shortWeekDayNames={shortWeekDayNames}
      />
      <Delimiter className={theme.delimiter}>&mdash;</Delimiter>
      <DateTimeInput
        boundingContainerRef={boundingContainerRef}
        calendarHeaderRender={calendarHeaderRender}
        dateCellRender={dateCellRender}
        dateViewRender={dateViewRender}
        disabledDates={disabledDates}
        format={format}
        form={form}
        iconRender={iconRender}
        inputRender={inputsRender?.[1] ?? undefined}
        isDisabled={disabled[1]}
        isOpen={open[1]}
        isRequired={required[1]}
        max={max}
        min={date[0] || min}
        monthViewRender={monthViewRender}
        name={name[1]}
        onBlur={onBlur}
        onChange={handleChange('to')}
        onEnterPress={handleEnterPress('to')}
        onFocus={onFocus}
        placeholder={placeholders[1]}
        ref={toDateTimeInputRef}
        theme={theme.to}
        type={type}
        value={value[1]}
        weeksRowRender={weeksRowRender}
        wrapperRender={wrapperRender}
        yearViewRender={yearViewRender}
        calendarWrapperRender={calendarWrapperRender}
        requiredMessage={requiredMessages[1]}
        monthNames={monthNames}
        shortMonthNames={shortMonthNames}
        weekDayNames={weekDayNames}
        shortWeekDayNames={shortWeekDayNames}
      />
    </WrapperRange>
  );
});

DateTimeInputRange.displayName = 'DateTimeInputRange';
