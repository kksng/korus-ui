import { isFunction, isNil } from 'lodash';
import { getText } from '../../src/SuggestionList/helpers';
import { filterData } from './helpers';
import {
  BlurHandler,
  ChangeHandler,
  FilterChangeHandler,
  FocusHandler,
  IconClickHandler,
  KeyDownHandler,
  HandlerCreatorData,
  ClearIconClickHandler,
  DropDownSelectProps,
  DropDownSelectState,
  Value,
} from './types';

export const createChangeHandler = ({
  props, mergeState,
}: HandlerCreatorData): ChangeHandler => (ev) => {
  const {
    name, onChange, onFilterChange, textField,
  } = props;

  if (isFunction(onChange)) {
    const changeEvent = {
      ...ev,
      component: {
        value: ev.target.value,
        name,
      },
    };

    onChange(changeEvent);
  }

  if (isFunction(onFilterChange)) {
    const customEvent = {
      ...ev,
      component: {
        value: getText(ev.target.value, textField),
        name,
        suggestion: ev.target.value,
      },
    };

    onFilterChange(customEvent);
  }

  mergeState({
    filterValue: null,
    highlightedSuggestion: ev.target.value,
    isOpen: false,
    selectedSuggestion: ev.target.value,
    value: ev.target.value,
  });
};

export const createBlurHandler = ({
  props, state, validate, value, mergeState,
}: HandlerCreatorData): BlurHandler => (ev) => {
  const {
    onFilterChange, onBlur, name, textField,
  } = props;

  const {
    highlightedSuggestion,
  } = state;

  const isValid = validate();

  if (isFunction(onFilterChange)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        value: getText(value, textField),
        suggestion: value,
      },
    };

    onFilterChange(customEvent);
  }

  if (isFunction(onBlur)) {
    const customEvent = {
      ...ev,
      component: {
        value,
        name,
        isValid,
      },
    };

    onBlur(customEvent);
  }

  mergeState({
    filterValue: null,
    highlightedSuggestion,
    isFocused: false,
    isOpen: false,
  });
};

export const createFocusHandler = ({
  props, value, mergeState,
}: HandlerCreatorData): FocusHandler => (ev) => {
  const {
    onFocus, name,
  } = props;

  if (isFunction(onFocus)) {
    const customEvent = {
      ...ev,
      component: {
        value,
        name,
      },
    };

    onFocus(customEvent);
  }

  // открываем список
  mergeState({ isOpen: true });
  // добавляем фокус
  mergeState({ isFocused: true });
};

export const createIconClickHandler = ({
  props, state, inputRef, mergeState,
}: HandlerCreatorData): IconClickHandler => () => {
  const {
    isDisabled = false,
  } = props;

  if (isDisabled) return;

  // фокусим инпут
  if (inputRef.current) inputRef.current.focus();

  // переключаем состояние списка (открыт/закрыт)
  mergeState({
    isOpen: !state.isOpen,
  });
};

export const createKeyDownHandler = ({
  props, state, mergeState,
}: HandlerCreatorData): KeyDownHandler => (ev) => {
  const {
    data,
    filterRule,
    name,
    onChange,
    onFilterChange,
    placeholder,
    searchFields,
    shouldAllowEmpty,
    shouldFilterValues,
    textField,
  } = props;

  const {
    isOpen, highlightedSuggestion,
  } = state;

  if (!data) return;

  const filterValue = isNil(props.filterValue) ? state.filterValue : props.filterValue;

  const filteredData = (() => {
    if (shouldFilterValues != null) {
      return filterData({
        data, filterValue, textField, filterRule, searchFields,
      }) || [];
    }
    return data;
  })();

  const fullData = placeholder && shouldAllowEmpty ? [placeholder, ...filteredData] : filteredData;

  // текущий индекс
  const suggestionIndex = highlightedSuggestion !== null
    ? fullData.indexOf(highlightedSuggestion || '')
    : fullData.indexOf(placeholder || '');

  if (ev.key === 'ArrowDown' || ev.key === 'Down') {
    // предотвращение прокрутки страницы
    ev.preventDefault();

    // механизм работает как барабан
    const nextIndex = (suggestionIndex + 1) % fullData.length;

    const nextSuggestion = fullData[nextIndex];

    mergeState({
      highlightedSuggestion: nextSuggestion,
    });

    return;
  }

  if (ev.key === 'ArrowUp' || ev.key === 'Up') {
    // предотвращение прокрутки страницы
    ev.preventDefault();

    // механизм работает как барабан
    const nextIndex = (() => {
      if (suggestionIndex <= 0) return fullData.length - 1;

      return suggestionIndex - 1;
    })();

    const nextSuggestion = fullData[nextIndex];

    mergeState({
      highlightedSuggestion: nextSuggestion,
    });

    return;
  }

  if (ev.key === 'Enter') {
    if (isFunction(props.onEnterPress)) {
      props.onEnterPress({
        ...ev,
        component: {
          value: ev.currentTarget.value,
          name: props.name,
        },
      });
    }

    if (isOpen) mergeState({ isOpen: false });

    const textValue = getText(highlightedSuggestion, textField); // onFilterChange require empty string as value. null value can't be used there
    const value = textValue || null; // Convert empty string to null. '' -> null

    if (isFunction(onFilterChange)) {
      const customEvent = {
        ...ev,
        component: {
          name,
          value: textValue,
          suggestion: highlightedSuggestion,
        },
      };

      onFilterChange(customEvent);
    }

    if (isFunction(onChange)) {
      const changeEvent = {
        ...ev,
        component: {
          value: highlightedSuggestion,
          name,
        },
      };

      onChange(changeEvent);
    }

    mergeState({
      filterValue: null,
      selectedSuggestion: highlightedSuggestion,
      value,
    });

    return;
  }

  if ((ev.key === 'Escape' || ev.key === 'Esc') && isOpen) {
    mergeState({
      isOpen: false,
    });

    return;
  }

  if (ev.keyCode === 32 && !shouldFilterValues) {
    ev.preventDefault();

    mergeState({
      isOpen: true,
    });
  }
};

export const createFilterChangeHandler = ({
  props, mergeState, value,
}: HandlerCreatorData): FilterChangeHandler => (ev) => {
  const {
    onFilterChange, data, shouldFilterValues, name, textField,
  } = props;

  if (isFunction(onFilterChange)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        value: ev.target.value,
        suggestion: getText(value, textField) === ev.target.value ? value : null,
      },
    };

    onFilterChange(customEvent);
  }

  mergeState({
    filterValue: ev.target.value,
  });

  if (ev.target.value && data && shouldFilterValues) {
    mergeState({
      isOpen: true,
    });
  }
};

export const createClearIconClickHandler = ({
  props,
  mergeState,
}: HandlerCreatorData): ClearIconClickHandler => (ev) => {
  const {
    onChange, name,
  } = props;

  if (isFunction(onChange)) {
    const changeEvent = {
      ...ev,
      component: {
        value: null,
        name,
      },
    };
    onChange(changeEvent);
  }

  mergeState({
    filterValue: null,
    highlightedSuggestion: null,
    selectedSuggestion: null,
    value: null,
  });
};

export const createResetHandler = ({
  props,
  mergeState,
  value,
}: {
  props: DropDownSelectProps,
  mergeState: (state: Partial<DropDownSelectState>) => void,
  value: Value,
}) => () => {
  mergeState({
    value,
  });

  if (isFunction(props.onChange)) {
    const customEvent = {
      component: {
        name: props.name,
        value,
      },
    };

    props.onChange(customEvent);
  }
};
