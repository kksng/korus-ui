import * as React from 'react';
import {
  isString, isBoolean,
} from 'lodash';

import { SuggestionList } from '~/src/SuggestionList';
import {
  bindFunctionalRef,
  getClassNames,
  getIsEmptyAndRequired,
  useElement,
  useProps,
  useTheme,
} from '~/utils';
import { COMPONENTS_NAMESPACES } from '~/constants';
import { Div } from '~/components/Div';
import { LedaContext } from '~/components/LedaProvider';
import { useValidation } from '~/components/Validation';
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
  AutoCompleteProps,
  AutoCompleteRefCurrent,
  Suggestion,
  AutoCompleteState,
} from './types';

/**
 * AutoComplete component renders input with dropdown list
 * autocompletes typed suggestions
 *
 * @param {AutoCompleteProps} properties of component
 *
 * @return {React.ReactElement}
 */
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
    isOpen: isOpenProp,
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
    value: valueProp,
    ...restProps
  } = useProps(props);

  // todo handle props format errors

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.autoComplete);

  const autoCompleteState: AutoCompleteState = {
    highlightedSuggestion: null,
    selectedSuggestion: null,
    isFocused: false,
    isOpen: false,
    lastCorrectValue: '',
    value: '',
  };

  const [state, mergeState] = React.useReducer((oldState: AutoCompleteState, newState: Partial<AutoCompleteState>) => ({
    ...oldState, ...newState,
  }), autoCompleteState);

  const {
    isValid, validateCurrent, InvalidMessage,
  } = useValidation(props, state, {
    reset: createResetHandler({
      props, mergeState, value: '',
    }),
  });

  const {
    value: stateValue, highlightedSuggestion, isFocused, selectedSuggestion,
  } = state;
  const isValueControlled = valueProp === null || isString(valueProp);
  const value = valueProp === undefined ? stateValue : valueProp;
  const inputValue = value === null ? '' : value;
  const suggestionListValue = value === undefined ? null : value;

  const suggestions = getSuggestions({
    data, textField, value, filterRule, isOpen: isOpenProp, minSearchLength, shouldShowAllSuggestions, searchFields,
  });

  const isSuggestionsListOpen = (() => {
    if (isDisabled) return false;

    if (suggestions.length === 0 && safeTrim(value).length === 0) return false;

    if (isBoolean(isOpenProp)) return isOpenProp;

    // do not show dropdown list until minimal input length is reached
    if (
      minSearchLength && minSearchLength > 0 && value != null
      && value.length < minSearchLength
    ) {
      return false;
    }

    return state.isOpen;
  })();

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handlerData = {
    props, state, mergeState, isValueControlled, inputRef, validate: validateCurrent, value,
  };

  const inputChangeHandler = inputChangeHandlerCreator(handlerData);
  const suggestionClickHandler = suggestionClickHandlerCreator(handlerData);
  const clearButtonClickHandler = clearButtonClickHandlerCreator(handlerData);
  const inputFocusHandler = inputFocusHandlerCreator(handlerData);
  const inputBlurHandler = inputBlurHandlerCreator(handlerData);
  const inputKeyDownHandler = inputKeyDownHandlerCreator({ ...handlerData, suggestions, isSuggestionsListOpen });
  const inputClickHandler = () => {
    mergeState({
      isOpen: true,
    });
  };

  const shouldShowClearButton = hasClearButton && !isDisabled && value && value.length > 0;

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
          onClick={inputClickHandler}
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
