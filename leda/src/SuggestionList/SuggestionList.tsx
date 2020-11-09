import * as React from 'react';
import { LedaContext } from '../../components/LedaProvider';
import { Loader } from '../../components/Loader';
import { Div, DivRefCurrent } from '../../components/Div';
import { Li } from '../../components/Li';
import { Ul } from '../../components/Ul';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { useAdaptivePosition, useElement, useTheme } from '../../utils';
import { getSuggestionItemProps, scrollToSuggestion } from './helpers';
import { SuggestionItem } from './SuggestionItem';
import { SuggestionListProps, GroupedSomeObject, Value } from './types';
import { NoSuggestions } from './NoSuggestions';

export const SuggestionList = (props: SuggestionListProps): React.ReactElement | null => {
  const {
    boundingContainerRef,
    compareObjectsBy,
    data,
    groupBy,
    groupLabelRender,
    groupWrapperRender,
    highlightedSuggestion,
    isLoading,
    isOpen,
    itemRender,
    listRender,
    noSuggestionsRender,
    onClick,
    placeholder,
    selectAllItemRender,
    selectAllState,
    selectedSuggestion,
    shouldAllowEmpty,
    textField,
    theme: themeProp,
    value,
  } = props;

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.suggestionList);

  const { renders: { [COMPONENTS_NAMESPACES.suggestionList]: suggestionRenders } } = React.useContext(LedaContext);

  const List = useElement(
    'List',
    Ul,
    listRender || suggestionRenders.listRender,
    props,
  );

  const GroupLabel = useElement(
    'GroupLabel',
    Li,
    groupLabelRender || suggestionRenders.groupLabelRender,
    props,
  );

  const GroupWrapper = useElement(
    'GroupWrapper',
    Div,
    groupWrapperRender || suggestionRenders.groupWrapperRender,
    props,
  );

  const NoSuggestionsComponent = useElement(
    'NoSuggestions',
    NoSuggestions,
    noSuggestionsRender || suggestionRenders.noSuggestionsRender,
    props,
  );

  const wrapperRef = React.useRef<DivRefCurrent | null>(null);
  const containerRef = React.useRef<HTMLElement | null>(null);
  const suggestionRef = React.useRef<HTMLElement | null>(null);

  const [resultedData, setResultedData] = React.useState<Value[] | GroupedSomeObject[]>([]);

  const classMap = React.useMemo(() => ({
    top: theme.containerTop,
    visible: theme.containerVisible,
  }), [theme.containerTop, theme.containerVisible]);

  useAdaptivePosition({
    elRef: wrapperRef,
    isOpen,
    classNames: classMap,
    boundingContainerRef,
  });

  React.useEffect((): void => {
    // скроллим эффективно
    scrollToSuggestion(containerRef, suggestionRef);
  }, [isOpen, value, selectedSuggestion, highlightedSuggestion]);

  // group suggestion list items if required
  React.useEffect((): void => {
    // used to keep links
    const dataItemsMap = new Map<string, Value[]>();
    const newResultedData = data?.reduce<(Value | GroupedSomeObject)[]>((accumulator, dataValue) => {
      const key = groupBy?.(dataValue);
      if (key) {
        const dataItems = dataItemsMap.get(key) || [];
        if (dataItems.length) {
          dataItems.push(dataValue);
        } else {
          dataItemsMap.set(key, dataItems);
          accumulator.push({
            key, dataItems,
          });
        }
      } else {
        accumulator.push(dataValue);
      }
      return accumulator;
    }, []) ?? [];

    setResultedData(newResultedData);
  }, [data, groupBy, value]);

  const renderSuggestion = React.useCallback((suggestionProp: Value | GroupedSomeObject) => {
    const suggestionItemComputedProps = getSuggestionItemProps({
      compareObjectsBy,
      highlightedSuggestion,
      placeholder,
      selectedSuggestion,
      suggestion: suggestionProp,
      textField,
    });

    return (
      <SuggestionItem
        itemRender={itemRender}
        onClick={onClick}
        selectAllItemRender={selectAllItemRender}
        suggestionRef={suggestionRef}
        textField={textField}
        theme={theme}
        {...suggestionItemComputedProps}
      />
    );
  }, [compareObjectsBy, highlightedSuggestion, itemRender, onClick, placeholder, selectedSuggestion, textField, theme]);

  if (!isOpen) return null;

  if (isLoading) {
    return (
      <Div className={theme.container} onMouseDown={(ev) => ev.preventDefault()} ref={wrapperRef}>
        <Loader />
      </Div>
    );
  }

  if (!data?.length) {
    return (
      <Div className={theme.container} onMouseDown={(ev) => ev.preventDefault()} ref={wrapperRef}>
        <NoSuggestionsComponent className={theme.noSuggestions} />
      </Div>
    );
  }

  const suggestions: (Value | GroupedSomeObject)[] = placeholder !== undefined && shouldAllowEmpty
    ? [placeholder, ...resultedData]
    : resultedData;

  const suggestionItems = suggestions.map((suggestion) => {
    const suggestionItemComputedProps = getSuggestionItemProps({
      compareObjectsBy,
      highlightedSuggestion,
      placeholder,
      selectedSuggestion,
      suggestion,
      textField,
      selectAllState,
    });

    return suggestionItemComputedProps;
  });

  return (
    <Div className={theme.container} onMouseDown={(ev) => ev.preventDefault()} ref={wrapperRef}>
      <List
        className={theme.list}
        ref={(component) => {
          containerRef.current = component && component.wrapper;
        }}
      >
        {groupBy && suggestions?.map((suggestion, index) => {
          // todo: переделать группировку списков
          if ((suggestion as GroupedSomeObject)?.key) {
            const groupedSomeObject = suggestion as GroupedSomeObject;
            return (
              <GroupWrapper className={theme.group} key={index}>
                <GroupLabel className={theme.groupLabel}>
                  {groupedSomeObject.key}
                </GroupLabel>
                {groupedSomeObject.dataItems.map(renderSuggestion)}
              </GroupWrapper>
            );
          }
          return renderSuggestion(suggestion);
        })}

        {!groupBy && suggestionItems.map((suggestionItem) => (
          <SuggestionItem
            itemRender={itemRender}
            onClick={onClick}
            suggestionRef={suggestionRef}
            textField={textField}
            theme={theme}
            selectAllItemRender={selectAllItemRender}
            {...suggestionItem}
          />
        ))}
      </List>
    </Div>
  );
};

SuggestionList.displayName = 'SuggestionList';
