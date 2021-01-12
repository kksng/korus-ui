import * as React from 'react';
import { isNil } from 'lodash';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { SuggestionList } from '../../src/SuggestionList';
import {
  bindFunctionalRef, useProps, useTheme,
} from '../../utils';
import { Div } from '../Div';
import { useValidation } from '../Validation';
import {
  createBlurHandler,
  createChangeHandler,
  createClearIconClickHandler,
  createFilterChangeHandler,
  createFocusHandler,
  createIconClickHandler,
  createKeyDownHandler,
  createResetHandler,
} from './handlers';
import { filterData, getComponentClassNames, getInputValue } from './helpers';
import {
  useCorrectSuggestionsInControlledMode, useCustomElements, useSyncedHighlightedValue,
} from './hooks';
import {
  DropDownSelectProps, DropDownSelectRefCurrent, DropDownSelectState, Value,
} from './types';
import { Span } from '../Span';
import { getText } from '../../src/SuggestionList/helpers';

/**
 * DropDownSelect component. Renders input with dropdown list with possibility to select one item
 * @param {DropDownSelectProps} props
 *
 * @returns {React.ReactElement}
 */
export const DropDownSelect = React.forwardRef((props: DropDownSelectProps, ref: React.Ref<DropDownSelectRefCurrent>): React.ReactElement | null => {
  const {
    autoComplete = 'off',
    boundingContainerRef,
    className,
    compareObjectsBy,
    data,
    defaultValue = null,
    filterRule,
    filterValue: filterValueProp,
    form,
    groupBy,
    hasClearButton,
    iconRender,
    inputRender,
    invalidMessage,
    invalidMessageRender,
    isDisabled = false,
    isLoading = false,
    isOpen: isOpenProp,
    isRequired = false,
    isValid: isValidProp,
    itemRender,
    listRender,
    name,
    noSuggestionsRender,
    onBlur,
    onChange,
    onFilterChange,
    onFocus,
    onEnterPress,
    placeholder,
    requiredMessage,
    searchFields,
    shouldAllowEmpty = false,
    shouldFilterValues = false,
    shouldValidateUnmounted,
    sortSuggestions,
    textField,
    theme: themeProp,
    validator,
    value: valueProp,
    wrapperRender,
    ...restProps
  } = useProps(props);

  const [state, mergeState] = React.useReducer((oldState: DropDownSelectState, newState: Partial<DropDownSelectState>) => ({
    ...oldState, ...newState,
  }), {
    filterValue: null,
    highlightedSuggestion: defaultValue ?? null,
    isFocused: false,
    isOpen: false,
    selectedSuggestion: defaultValue ?? null,
    value: defaultValue,
  });

  const { isFocused, highlightedSuggestion, selectedSuggestion } = state;
  const isOpen = isNil(isOpenProp) ? state.isOpen : isOpenProp;
  const value = valueProp === undefined ? state.value : valueProp;
  const filterValue = isNil(filterValueProp) ? state.filterValue : filterValueProp;

  const inputValue = getInputValue(value, filterValue, shouldFilterValues, textField);
  const inputSuggestion = getText(value, textField) === inputValue ? value : null;

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.dropDownSelect);

  const {
    isValid, validateCurrent, InvalidMessage,
  } = useValidation(props, state, {
    reset: createResetHandler({
      mergeState, props, value: defaultValue,
    }),
  });

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const {
    inputWrapperClassNames,
    selectIconClassNames,
    wrapperClassNames,
  } = getComponentClassNames({
    className, isDisabled, isFocused, isOpen, isRequired, isValid, theme, value,
  });

  const handlerData = {
    inputRef, mergeState, props, state, validate: validateCurrent, value,
  };

  const handleChange = createChangeHandler(handlerData);
  const handleBlur = createBlurHandler(handlerData);
  const handleFocus = createFocusHandler(handlerData);
  const handleIconClick = createIconClickHandler(handlerData);
  const handleKeyDown = createKeyDownHandler(handlerData);
  const handleFilterChange = createFilterChangeHandler(handlerData);
  const handleClearIconClick = createClearIconClickHandler(handlerData);


  useSyncedHighlightedValue({
    data,
    filterValue,
    mergeState,
    shouldFilterValues,
    textField,
  });

  useCorrectSuggestionsInControlledMode({
    mergeState, valueProp,
  });

  const {
    Wrapper,
    Input,
    Icon,
  } = useCustomElements(props, state, { inputSuggestion });

  const shouldRenderClearIcon = !isDisabled && hasClearButton && (value !== null || filterValue !== null);

  const suggestionListData = (() => {
    const filteredData = shouldFilterValues
      ? filterData({
        data, filterRule, filterValue, searchFields, textField,
      })
      : data;

    if (sortSuggestions) {
      return [...filteredData].sort(sortSuggestions);
    }

    return filteredData;
  })();

  const handleInputClick = () => {
    mergeState({
      isOpen: true,
    });
  };

  const handleIconMouseDown: React.MouseEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Wrapper
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        input: inputRef.current,
        wrapper: component.wrapper,
      }))}
    >
      <Div className={inputWrapperClassNames}>
        <Input
          {...restProps}
          aria-invalid={!isValid}
          aria-required={isRequired}
          autoComplete={autoComplete}
          className={theme.input}
          disabled={isDisabled}
          form={form}
          name={name}
          onBlur={handleBlur}
          onChange={handleFilterChange}
          onClick={handleInputClick}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={isNil(value) ? placeholder : ''}
          readOnly={!shouldFilterValues}
          ref={inputRef}
          value={getInputValue(value, filterValue, shouldFilterValues, textField)}
        />
        {shouldRenderClearIcon && (
          <Span
            className={theme.clearIcon}
            onClick={handleClearIconClick}
          />
        )}
        <Icon className={selectIconClassNames} onMouseDown={handleIconMouseDown} onClick={handleIconClick} />
      </Div>
      <SuggestionList
        boundingContainerRef={boundingContainerRef}
        compareObjectsBy={compareObjectsBy}
        data={suggestionListData}
        groupBy={groupBy}
        highlightedSuggestion={highlightedSuggestion}
        isLoading={isLoading}
        isOpen={isDisabled ? false : isOpen}
        itemRender={itemRender}
        listRender={listRender}
        noSuggestionsRender={noSuggestionsRender}
        onClick={handleChange}
        placeholder={placeholder}
        selectedSuggestion={selectedSuggestion}
        shouldAllowEmpty={shouldAllowEmpty}
        textField={textField}
        theme={theme}
        value={value}
      />
      {!isDisabled && !isLoading && !isOpen && !isFocused && (
        <InvalidMessage />
      )}
    </Wrapper>
  );
}) as <T extends Value>(props: DropDownSelectProps<T>, ref?: React.Ref<DropDownSelectRefCurrent>) => React.ReactElement;

(DropDownSelect as React.FC<DropDownSelectProps>).displayName = 'DropDownSelect';
