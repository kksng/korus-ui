import * as React from 'react';
import { isNil } from 'lodash';
import {
  MultiSelectComponent, MultiSelectProps, MultiSelectRefCurrent, Value,
} from './types';
import {
  bindFunctionalRef, getClassNames, getIsEmptyAndRequired, useElement, useProps, useTheme,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { useValidation } from '../Validation';
import { SuggestionList } from '../../src';
import {
  createBlurHandler,
  createClearHandler,
  createFocusHandler,
  createKeyDownHandler,
  createMouseDownHandler,
  createResetHandler,
  createSelectHandler,
} from './handlers';
import { TagsContainer } from './TagsContainer';
import { Div } from '../Div';
import { LedaContext } from '../LedaProvider';
import { Tag } from '../Tags';
import {
  filterData, getShouldUniteTags, getSortedSuggestions, getValue,
} from './helpers';
import { createCheckBoxesRender, createCheckBoxesListRender } from './renders';
import { Span } from '../Span';
import { selectAllSuggestion, SelectedState } from './constants';

export const MultiSelect = React.forwardRef((props: MultiSelectProps, ref: React.Ref<MultiSelectRefCurrent>): React.ReactElement => {
  const {
    autoComplete = 'off',
    canSelectAll,
    className,
    compareObjectsBy,
    data,
    defaultValue,
    filterRule,
    form,
    groupBy,
    hasCheckBoxes,
    hasClearButton,
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
    maxSelected,
    maxTags,
    name,
    noSuggestionsRender,
    onBlur,
    onChange,
    onFocus,
    onEnterPress,
    placeholder,
    requiredMessage,
    selectAllItemRender,
    shouldHideInput,
    shouldKeepSuggestions,
    shouldSelectedGoFirst,
    shouldValidateUnmounted,
    sortSuggestions,
    tagRender,
    tagsUnionRender,
    textField,
    theme: themeProp,
    validator,
    value: valueProp,
    wrapperRender,
    ...restProps
  } = useProps(props);

  React.useEffect(() => {
    // Warn user about possible misused props
    if (hasCheckBoxes && !shouldKeepSuggestions) console.warn('Leda MultiSelect: you probably forgot using shouldKeepSuggestions with hasCheckBoxes prop.');
    if (canSelectAll && !shouldKeepSuggestions) console.warn('Leda MultiSelect: you probably forgot using shouldKeepSuggestions with canSelectAll prop.');
  }, [canSelectAll, hasCheckBoxes, shouldKeepSuggestions]);

  const [valueState, setValue] = React.useState<Value[]>(defaultValue || []);

  const [filterValue, setFilterValue] = React.useState<string>('');

  const [highlightedSuggestion, setHighlightedSuggestion] = React.useState<Value>(null);

  const value = getValue(valueProp, valueState);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.multiSelect);

  const {
    validateCurrent, isValid, InvalidMessage,
  } = useValidation(props, {
    value: valueState,
  }, {
    reset: createResetHandler({
      props, setValue, value: defaultValue || [],
    }),
  });

  const [isFocused, setFocused] = React.useState<boolean>(false);

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFocus = createFocusHandler(props, {
    setFocused,
    value,
  });

  const handleBlur = createBlurHandler(props, {
    setFilterValue,
    setFocused,
    validateCurrent,
    value,
  });

  const handleSelect = createSelectHandler(props, {
    data,
    setFilterValue,
    setFocused,
    setValue,
    value,
  });

  const handleKeyDown = createKeyDownHandler(props, {
    filterValue,
    handleSelect,
    highlightedSuggestion,
    setFocused,
    setHighlightedSuggestion,
    value,
  });

  const handleClear = createClearHandler(props, {
    setValue,
    value,
  });

  const handleMouseDown = createMouseDownHandler({
    inputRef,
  });

  const wrapperClassNames = getClassNames(className, theme.wrapper);

  const inputWrapperClassNames = getClassNames(theme.inputWrapper, {
    [theme.inputFocused]: isFocused,
    [theme.inputWrapperDisabled]: isDisabled,
    [theme.inputWrapperInvalid]: !isValid,
    [theme.inputWrapperRequired]: getIsEmptyAndRequired(value, isRequired),
  });

  const { renders: { [COMPONENTS_NAMESPACES.multiSelect]: multiSelectRenders } } = React.useContext(LedaContext);

  const state = {
    filterValue,
    isFocused,
    value: valueState,
  };

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || multiSelectRenders.wrapperRender,
    props,
    state,
  );

  const Input = useElement(
    'Input',
    'input' as unknown as React.FC<React.InputHTMLAttributes<HTMLInputElement>>,
    inputRender || multiSelectRenders.inputRender,
    props,
    state,
  );

  const TagItem = useElement(
    'TagItem',
    Tag,
    tagRender || multiSelectRenders.tagRender,
    props,
    state,
  );

  const TagsUnionElement = useElement(
    'TagUnion',
    Div,
    tagsUnionRender || multiSelectRenders.tagsUnionRender,
    props,
    state,
  );

  const filteredData = filterData({
    compareObjectsBy,
    data,
    filterRule,
    filterValue,
    shouldKeepSuggestions,
    textField,
    value,
  });

  const isMaxItemsSelected = !isNil(maxSelected) && value.length === maxSelected;

  const selectedSuggestions = shouldKeepSuggestions ? value : undefined;

  const shouldRenderClearButton = hasClearButton && !isDisabled;

  const shouldUniteTags = getShouldUniteTags({ maxTags, value });

  /** Дефолтный рендер для элемента списка в режиме чекбоксов */
  const checkBoxesRender = createCheckBoxesRender({ itemRender, theme });

  /** Обработчик нажатия на кнопку выбора в футере списка чекбоксов */
  const handleOnClickSetValueButton = (): void => {
    setFocused(!isFocused);
    inputRef.current?.blur();
  };

  /** Дефолтный рендер для списка в режиме чекбоксов */
  const checkBoxesListRender = createCheckBoxesListRender({
    filterValue,
    isOpen,
    listRender,
    onClearButtonClick: handleClear,
    onClickSetValueButton: handleOnClickSetValueButton,
    setFilterValue,
    setFocused,
    shouldHideInput,
    shouldRenderClearButton,
    theme,
  });

  const selectAllState = (() => {
    if (canSelectAll == null) return undefined;
    if (value.length === data?.length) return SelectedState.All;
    if (value.length === 0) return SelectedState.Nothing;
    return SelectedState.Some;
  })();

  const suggestionListData = (() => {
    const allSuggestions = getSortedSuggestions({
      filteredData,
      selectedSuggestions,
      shouldSelectedGoFirst,
      sortSuggestions,
    });

    if (canSelectAll) {
      // todo: canSelectAll
      return [selectAllSuggestion, ...allSuggestions];
    }

    return allSuggestions;
  })();

  return (
    <Wrapper
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        input: inputRef.current,
        wrapper: component.wrapper,
      }))}
    >
      <Div
        className={inputWrapperClassNames}
        onMouseDown={handleMouseDown}
      >
        {shouldUniteTags && (
          <>
            <TagsUnionElement className={theme.tagsUnion}>
              Выбрано {value.length}
            </TagsUnionElement>
            {shouldRenderClearButton && (
              <Span
                className={theme.clearIcon}
                onClick={handleClear}
              />
            )}
          </>
        )}
        {!shouldUniteTags && (
          <TagsContainer
            hasClearButton={shouldRenderClearButton}
            onClearIconClick={handleClear}
            onMouseDown={handleMouseDown}
            onTagClick={handleSelect}
            placeholder={placeholder}
            shouldHideInput={shouldHideInput || hasCheckBoxes}
            textField={textField}
            theme={theme}
            value={value}
          >
            <TagItem />
          </TagsContainer>
        )}
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
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
            if (shouldHideInput || hasCheckBoxes) return;
            setFilterValue(ev.target.value);
          }}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          ref={inputRef}
          style={(isMaxItemsSelected || shouldHideInput || hasCheckBoxes)
            ? {
              height: 0,
              opacity: 0,
              position: 'absolute',
              width: 0,
            }
            : undefined}
          value={filterValue}
        />
      </Div>
      {!isMaxItemsSelected && (
        <SuggestionList
          compareObjectsBy={compareObjectsBy}
          data={suggestionListData}
          groupBy={groupBy}
          highlightedSuggestion={highlightedSuggestion}
          isLoading={isLoading}
          isOpen={isNil(isOpen) ? isFocused : isOpen}
          itemRender={hasCheckBoxes ? checkBoxesRender : itemRender}
          listRender={hasCheckBoxes ? checkBoxesListRender : listRender}
          noSuggestionsRender={noSuggestionsRender}
          onClick={handleSelect}
          selectAllItemRender={selectAllItemRender}
          selectAllState={selectAllState}
          selectedSuggestion={selectedSuggestions}
          shouldAllowEmpty={false}
          textField={textField}
          theme={theme}
          value={value}
        />
      )}
      {!isFocused && !isDisabled && (
        <InvalidMessage />
      )}
    </Wrapper>
  );
}) as MultiSelectComponent;

MultiSelect.displayName = 'MultiSelect';
