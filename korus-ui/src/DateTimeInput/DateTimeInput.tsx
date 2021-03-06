import * as React from 'react';
import { isNil, isDate } from 'lodash';
import { useValidation } from '../../components/Validation';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { getCalendarConditions } from '../Calendar/helpers';
import { Div } from '../../components/Div';
import {
  bindFunctionalRef, getClassNames, useProps, useTheme,
} from '../../utils';
import { Calendar } from '../Calendar';
import { COMPONENT_TYPES } from './constants';
import {
  createBlurHandler,
  createCalendarClickHandler,
  createCalendarIconMouseDownHandler,
  createCalendarMouseDownHandler,
  createChangeHandler,
  createFocusHandler,
  createKeyDownHandler,
  createResetHandler,
  handleErrors,
} from './handlers';
import {
  convertToDate,
  createMask,
  getInputWrapperClassNames, getValue, stringToDate, normalizeTimeLimits,
} from './helpers';
import {
  useCustomElements, useDateTimeInputEffects, useDateTimeInputState,
} from './hooks';
import { Span } from '../../components/Span';
import { DateTimeInputProps, DateTimeInputRefCurrent } from './types';

export const DateTimeInput = React.forwardRef((props: DateTimeInputProps, ref: React.Ref<DateTimeInputRefCurrent>) => {
  const {
    boundingContainerRef,
    calendarHeaderRender,
    calendarWrapperRender,
    className,
    dateCellRender,
    dateViewRender,
    disabledDates,
    format = 'dd.MM.yyyy',
    hasTodayButton,
    iconRender,
    inputRender,
    invalidMessage,
    invalidMessageRender,
    isDisabled,
    isOpen: isOpenProp,
    isRequired,
    isValid: isValidProp,
    max: maxProp,
    min: minProp,
    timeMin: timeMinProp,
    timeMax: timeMaxProp,
    monthViewRender,
    name,
    onEnterPress,
    placeholder,
    requiredMessage,
    shouldValidateUnmounted,
    theme: themeProp,
    type = COMPONENT_TYPES.DATE_ONLY,
    validator,
    value: valueProp,
    weeksRowRender,
    wrapperRender,
    yearViewRender,
    monthNames,
    shortMonthNames,
    weekDayNames,
    shortWeekDayNames,
    ...restProps
  } = useProps(props);

  handleErrors(props);

  // Converting moment to Date if moment is passed
  const min = React.useMemo(() => convertToDate(minProp), [minProp]);

  const max = React.useMemo(() => convertToDate(maxProp), [maxProp]);

  const timeMin = React.useMemo(() => normalizeTimeLimits(timeMinProp), [timeMinProp]);

  const timeMax = React.useMemo(() => normalizeTimeLimits(timeMaxProp), [timeMaxProp]);

  const newProps = {
    ...props, max, min, timeMax, timeMin,
  };

  const [state, dispatch] = useDateTimeInputState(newProps);

  // ref of maskedInput, used for validation and for focus / blur
  const maskedInputRef = React.useRef<HTMLInputElement | null>(null);

  // набор условий для обработки событий календаря (отключенные даты, неактивные стрелочки и тд)
  const conditions = getCalendarConditions({
    max, min, value: state.date, viewDate: state.viewDate, viewType: state.viewType,
  });
  // validation by Date, not by string. Because 12.__.____ is not a valid date
  const validationValue = isDate(valueProp) || isNil(valueProp) ? valueProp : stringToDate(valueProp, format);

  const validationProps = React.useMemo(() => ({
    ...newProps,
    value: validationValue,
  }), [newProps, validationValue]);

  const validationState = React.useMemo(() => ({
    value: state.date,
  }), [state.date]);

  const {
    validateCurrent, isValid, InvalidMessage,
  } = useValidation(validationProps, validationState, {
    reset: createResetHandler({
      dispatch, props,
    }),
  });

  useDateTimeInputEffects({
    conditions, dispatch, props: newProps, state,
  });

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.dateTimeInput);

  const mask = createMask(format, type);

  const isOpen = isNil(isOpenProp) ? state.isOpen : isOpenProp;


  const handlersData = {
    conditions,
    dispatch,
    maskedInputRef,
    props: newProps,
    state,
    validate: validateCurrent,
  };

  const handleBlur = createBlurHandler(handlersData);
  const handleCalendarIconMouseDown = createCalendarIconMouseDownHandler(handlersData);
  const handleCalendarKeyDown = createKeyDownHandler(handlersData);
  const handleCalendarMouseDown = createCalendarMouseDownHandler(handlersData);
  const handleCalendarClick = createCalendarClickHandler(handlersData);
  const handleChange = createChangeHandler(handlersData);
  const handleFocus = createFocusHandler(handlersData);

  const {
    Wrapper,
    Icon,
    Input,
  } = useCustomElements(props, state);

  const wrapperClassNames = getClassNames(
    className,
    theme.wrapper,
  );

  const inputValue = getValue({
    dateState: state.date,
    format,
    valueProp,
    valueState: state.value,
  });

  return (
    <Wrapper
      className={wrapperClassNames}
      onKeyDown={(ev) => handleCalendarKeyDown(ev)}
      ref={ref && ((divComponent) => bindFunctionalRef(divComponent, ref, divComponent && {
        input: maskedInputRef.current,
        wrapper: divComponent.wrapper,
      }))}
    >
      <Div
        className={getInputWrapperClassNames(theme, newProps, state, isValid)}
      >
        <Input
          {...restProps}
          aria-invalid={!isValid}
          aria-required={isRequired}
          className={theme.input}
          isDisabled={isDisabled}
          mask={mask}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          ref={maskedInputRef}
          value={inputValue}
        />
        <Span className={theme.iconsWrapper}>
          {type !== COMPONENT_TYPES.TIME_ONLY && (
            <Icon
              onMouseDown={handleCalendarIconMouseDown}
              className={theme.calendarIcon}
            />
          )}
        </Span>
      </Div>
      {!state.isFocused && !isDisabled && <InvalidMessage />}
      {type !== COMPONENT_TYPES.TIME_ONLY && (
        <Calendar
          boundingContainerRef={boundingContainerRef}
          calendarHeaderRender={calendarHeaderRender}
          calendarWrapperRender={calendarWrapperRender}
          dateCellRender={dateCellRender}
          dateViewRender={dateViewRender}
          disabledDates={disabledDates}
          dispatch={dispatch}
          format={format}
          hasTodayButton={hasTodayButton}
          isDisabled={isDisabled}
          isOpen={isOpen}
          max={max}
          min={min}
          monthViewRender={monthViewRender}
          onClick={handleCalendarClick}
          onMouseDown={handleCalendarMouseDown}
          theme={theme.calendar}
          value={state.date}
          viewDate={state.viewDate}
          viewType={state.viewType}
          weeksRowRender={weeksRowRender}
          yearViewRender={yearViewRender}
          monthNames={monthNames}
          shortMonthNames={shortMonthNames}
          weekDayNames={weekDayNames}
          shortWeekDayNames={shortWeekDayNames}
        />
      )}
    </Wrapper>
  );
});

DateTimeInput.displayName = 'DateTimeInput';
