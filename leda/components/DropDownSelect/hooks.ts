import * as React from 'react';

import { useElement } from '../../utils';
import { Div } from '../Div';
import { Span } from '../Span';
import { filterData } from './helpers';
import {
  CustomElements, DropDownSelectProps, DropDownSelectState, UseCustomElementsExtra, Value,
} from './types';

export const useSyncedHighlightedValue = ({
  filterValue,
  shouldFilterValues,
  mergeState,
  data,
  textField,
}: {
  filterValue: string | null,
  shouldFilterValues: boolean,
  mergeState: React.Dispatch<Partial<DropDownSelectState>>,
  data: DropDownSelectProps['data'],
  textField?: string,
}): void => {
  React.useEffect((): void => {
    if (shouldFilterValues && data && filterValue) {
      const filteredData = filterData({
        data,
        filterValue,
        textField,
      }) || [];
      // updating highlighted value
      mergeState({
        highlightedSuggestion: filteredData[0] || null,
      });
    }
  }, [
    data,
    filterValue,
    mergeState,
    shouldFilterValues,
    textField,
  ]);
};

export const useCustomElements = (
  props: DropDownSelectProps,
  state: DropDownSelectState,
  { inputSuggestion }: UseCustomElementsExtra,
): CustomElements => {
  const {
    wrapperRender, inputRender, iconRender,
  } = props;

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender,
    props,
    state,
  );

  const Input = useElement(
    'Input',
    'input' as unknown as React.FC<React.InputHTMLAttributes<HTMLInputElement>>,
    inputRender,
    {
      ...props,
      suggestion: inputSuggestion,
    },
    state,
  );

  const Icon = useElement(
    'Icon',
    Span,
    iconRender,
    props,
    state,
  );

  return {
    Icon,
    Input,
    Wrapper,
  };
};

export const useCorrectSuggestionsInControlledMode = ({
  mergeState,
  valueProp,
}: {
  mergeState: React.Dispatch<Partial<DropDownSelectState>>,
  valueProp?: Value,
}) => {
  React.useEffect(() => {
    if (valueProp !== undefined) {
      mergeState({
        highlightedSuggestion: valueProp,
        selectedSuggestion: valueProp,
      });
    }
  }, [mergeState, valueProp]);
};
