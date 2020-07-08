import * as React from 'react';
import {
  isString, isBoolean,
} from 'lodash';
import { SuggestionList } from '../../src/SuggestionList';
import {
  bindFunctionalRef,
  getClassNames,
  getIsEmptyAndRequired,
  useElement,
  useProps,
  useTheme,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { Div } from '../Div';
import {
  getSuggestions,
  safeTrim,
} from './helpers';
import {
  inputBlurHandlerCreator,
  inputChangeHandlerCreator,
  inputFocusHandlerCreator,
  inputKeyDownHandlerCreator,
  suggestionClickHandlerCreator,
  clearButtonClickHandlerCreator,
  createResetHandler,
} from './handlers';

import {
  AutoCompleteProps, AutoCompleteRefCurrent, Suggestion,
} from './types';
import { useValidation } from '../Validation';
import { LedaContext } from '../LedaProvider';

export const AutoComplete = React.forwardRef((props: AutoCompleteProps, ref: React.Ref<AutoCompleteRefCurrent>): React.ReactElement | null => {
  const {
    autoComplete = 'off',
    className,
    compareObjectsBy,
    data,
    filterRule,
    footerRender,
    form,
    groupBy,
    hasClearButton,
    headerRender,
    inputRender,
    invalidMessage,
    invalidMessageRender,
    isDisabled,
    isLoading,
    isOpen,
    isRequired,
    isValid: isValidProp,
    itemRender,
    listRender,
    minSearchLength,
    name,
    noSuggestionsRender,
    onBlur,
    onChange,
    onFocus,
    onEnterPress,
    onKeyDown,
    placeholder,
    requiredMessage,
    searchFields,
    shouldCorrectValue,
    shouldShowAllSuggestions,
    shouldValidateUnmounted,
    sortSuggestions,
    textField,
    theme: themeProp,
    validator,
    value: propValue,
    ...restProps
  } = useProps(props);

  // todo handle props format errors

  const isValueControlled = propValue === null || isString(propValue);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.autoComplete);

  const [stateValue, setStateValue] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = React.useState<Suggestion>(null);
  const [highlightedSuggestion, setHighlightedSuggestion] = React.useState<Suggestion>(null);
  const [lastCorrectValue, setLastCorrectValue] = React.useState('');

  const autoCompleteState = React.useMemo(() => ({
    highlightedSuggestion,
    isFocused,
    lastCorrectValue,
    selectedSuggestion,
    stateValue,
  }), [highlightedSuggestion, isFocused, lastCorrectValue, selectedSuggestion, stateValue]);

  const {
    isValid, validateCurrent, InvalidMessage,
  } = useValidation(props, {
    value: stateValue,
  }, {
    reset: createResetHandler({
      props, setStateValue, value: '',
    }),
  });

  const value = isValueControlled ? propValue : stateValue;
  const inputValue = value === null ? '' : value;
  const suggestionListValue = value === undefined ? null : value;

  const suggestions = getSuggestions({
    data, textField, value, filterRule, isOpen, minSearchLength, shouldShowAllSuggestions, searchFields,
  });

  const isSuggestionsListOpen = (() => {
    if (isDisabled) return false;

    if (suggestions.length === 0 && safeTrim(value).length === 0) return false;

    if (isBoolean(isOpen)) return isOpen;

    // do not show dropdown list until minimal input length is reached
    if (
      minSearchLength && minSearchLength > 0 && value != null
      && value.length < minSearchLength
    ) {
      return false;
    }

    return isFocused;
  })();

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const inputChangeHandler = inputChangeHandlerCreator({
    data,
    textField,
    name,
    onChange,
    isValueControlled,
    setSelectedSuggestion,
    setStateValue,
  });
  const suggestionClickHandler = suggestionClickHandlerCreator({
    props,
    lastCorrectValue,
    setLastCorrectValue,
    data,
    textField,
    name,
    onChange,
    isValueControlled,
    setHighlightedSuggestion,
    setStateValue,
    setIsFocused,
  });
  const clearButtonClickHandler = clearButtonClickHandlerCreator({
    inputRef,
    name,
    onChange,
    isValueControlled,
    setStateValue,
    isDisabled,
  });
  const inputFocusHandler = inputFocusHandlerCreator({
    onFocus,
    setIsFocused,
  });
  const inputBlurHandler = inputBlurHandlerCreator({
    isValueControlled,
    lastCorrectValue,
    props,
    setIsFocused,
    setLastCorrectValue,
    setStateValue,
    validateCurrent,
    value,
  });
  const inputKeyDownHandler = inputKeyDownHandlerCreator({
    lastCorrectValue,
    setLastCorrectValue,
    highlightedSuggestion,
    isSuggestionsListOpen,
    isValueControlled,
    props,
    setHighlightedSuggestion,
    setSelectedSuggestion,
    setIsFocused,
    setStateValue,
    suggestions,
  });

  const shouldShowClearButton = hasClearButton && value && value.length > 0;

  const wrapperClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  const inputWrapperClassNames = getClassNames(
    theme.inputWrapper,
    {
      [theme.inputWrapperDisabled]: isDisabled,
      [theme.inputWrapperFocused]: isFocused,
      [theme.inputWrapperInvalid]: !isValid,
      [theme.inputWrapperRequired]: getIsEmptyAndRequired(value, isRequired),
    },
  );

  const { renders: { [COMPONENTS_NAMESPACES.autoComplete]: autoCompleteRenders } } = React.useContext(LedaContext);

  const InputElement = useElement(
    'Input',
    'input' as unknown as React.FC<React.InputHTMLAttributes<HTMLInputElement>>,
    inputRender ?? autoCompleteRenders.inputRender,
    props,
    autoCompleteState,
  );

  const suggestionListData = sortSuggestions ? [...suggestions].sort(sortSuggestions) : suggestions;

  return (
    <Div
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
        input: inputRef.current,
      }))}
    >
      <Div className={inputWrapperClassNames}>
        <InputElement
          {...restProps}
          aria-invalid={!isValid}
          aria-required={isRequired}
          autoComplete={autoComplete}
          className={theme.input}
          disabled={isDisabled}
          form={form}
          name={name}
          onBlur={inputBlurHandler}
          onChange={inputChangeHandler}
          onFocus={inputFocusHandler}
          onKeyDown={inputKeyDownHandler}
          placeholder={placeholder}
          ref={inputRef}
          value={inputValue}
        />
        {shouldShowClearButton && (
          <i
            className={theme.closeIcon}
            onClick={clearButtonClickHandler}
          />
        )}
      </Div>
      <SuggestionList
        compareObjectsBy={compareObjectsBy}
        data={suggestionListData}
        groupBy={groupBy}
        highlightedSuggestion={highlightedSuggestion}
        isLoading={isLoading}
        isOpen={isSuggestionsListOpen}
        itemRender={itemRender}
        listRender={listRender}
        noSuggestionsRender={noSuggestionsRender}
        onClick={suggestionClickHandler}
        placeholder={placeholder}
        selectedSuggestion={selectedSuggestion}
        shouldAllowEmpty={false}
        textField={textField}
        theme={theme}
        value={suggestionListValue}
      />
      {!isDisabled && !isLoading && !isSuggestionsListOpen && !isFocused && (
        <InvalidMessage />
      )}
    </Div>
  );
}) as <T extends Suggestion>(props: AutoCompleteProps<T>) => React.ReactElement;

(AutoComplete as React.FC<AutoCompleteProps>).displayName = 'AutoComplete';
