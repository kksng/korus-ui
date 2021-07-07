import * as React from 'react';
import { isNull } from 'lodash';

import { Div } from '../Div';
import { CheckBox } from '../CheckBox';
import { Button } from '../Button';
import { Input } from '../Input';
import { getClassNames, useElement } from '../../utils';
import { defaultMultiSelectTheme } from './theme';
import { SuggestionListProps } from '../../src/SuggestionList/types';
import { selectAllSuggestion, SelectedState } from './constants';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { LedaContext } from '../LedaProvider';
import { Span } from '../Span';
import { Ul } from '../Ul';
import { SetState } from '../../commonTypes';
import { InputRefCurrent } from '../Input/types';


/** Пропсы для кастомизации рендера элемента списка чекбоксов */
type CreateCheckBoxesRenderProps = {
  /** Кастомный рендер элемента списка */
  itemRender: SuggestionListProps['itemRender'],
  /** Стили компонента */
  theme: typeof defaultMultiSelectTheme,
};

/**
 * Component creates render function for checkboxes in SuggestionList
 * @param {typeof defaultMultiSelectTheme} theme - default theme of MultiSelect component
 * @param {CustomRender<SuggestionItemProps, {}, SuggestionElementProps> | undefined} itemRender - custom render function for MultiSelect item
 *
 * @returns {CustomRender<SuggestionItemProps, {}, SuggestionElementProps> | undefined} - custom render function for checkboxes
 */
export const createCheckBoxesRender = ({ theme, itemRender }: CreateCheckBoxesRenderProps): SuggestionListProps['itemRender'] => ({ componentProps, Element, elementProps }): React.ReactElement => {
  const {
    isSelected, isSelectAllItem, selectAllState, selectAllItemRender,
  } = componentProps;

  const checkBoxItemClassNames = getClassNames(
    theme.checkBoxItem,
    elementProps.className,
  );

  const { renders: { [COMPONENTS_NAMESPACES.multiSelect]: multiSelectRenders } } = React.useContext(LedaContext);

  const SelectAllItem = useElement(
    'SelectAllItem',
    Span,
    selectAllItemRender || multiSelectRenders.selectAllItemRender,
    {},
    {},
  );

  const ItemContent = useElement(
    'ItemContent',
    Span,
    itemRender || multiSelectRenders.itemRender,
    componentProps,
    {},
  );

  const isCheckBoxSelected = ((): boolean => {
    if (isSelectAllItem) {
      return selectAllState !== SelectedState.Nothing;
    }
    return !!isSelected;
  })();

  return (
    <Element {...elementProps} className={checkBoxItemClassNames}>
      <CheckBox
        value={isCheckBoxSelected}
        // replace label with div so that when you click on the checkbox, the focus doesn't move from the multiselect and the list doesn't close
        labelRender={({ elementProps: labelElementProps }): React.ReactElement => <Div {...labelElementProps} />}
        isSemi={isSelectAllItem && selectAllState === SelectedState.Some}
      >
        {isSelectAllItem && (
          <SelectAllItem>
            {selectAllSuggestion.text}
          </SelectAllItem>
        )}
        {!isSelectAllItem && (
          <ItemContent>
            {elementProps.children}
          </ItemContent>
        )}
      </CheckBox>
    </Element>
  );
};


/** Пропсы для кастомизации рендера списка чекбоксов */
type CreateCheckBoxesListRenderProps = {
  /** Значение поля фильтра */
  filterValue: string,
  /** Признак постоянно открытого списка */
  isOpen?: boolean,
  /** Кастомный рендер списка чекбоксов */
  listRender: SuggestionListProps['listRender'],
  /** Обработчик нажатия на кнопку очистки значений во всех чекбоксах */
  onClearButtonClick: React.MouseEventHandler<HTMLElement>,
  /** Обработчик нажатия на кнопку выбора значений в списке чекбоксов */
  onClickSetValueButton: () => void,
  /** Сеттер фильтра массива значений */
  setFilterValue: SetState<string>,
  /** Сеттер для установки фокуса на multiselect */
  setFocused: SetState<boolean>,
  /** Признак включения поиска по значениям массива чекбоксов */
  shouldHideInput?: boolean,
  /** Признак отображения кнопки очистки значений во всех чекбоксах */
  shouldRenderClearButton?: boolean,
  /** Стили компонента */
  theme: typeof defaultMultiSelectTheme,
};

/**
 * @param {CreateCheckBoxesListRenderProps} props Пропсы компонента
 * @returns {React.ReactElement} Компонент рендера списка чекбоксов
 */
export const createCheckBoxesListRender = (props: CreateCheckBoxesListRenderProps): SuggestionListProps['listRender'] => ({ componentProps, elementProps }): React.ReactElement => {
  const {
    theme, listRender, shouldRenderClearButton, onClearButtonClick, onClickSetValueButton, shouldHideInput, isOpen, filterValue, setFilterValue, setFocused,
  } = props;

  const searchInputRef = React.useRef<InputRefCurrent | null>(null);

  const { renders: { [COMPONENTS_NAMESPACES.multiSelect]: multiSelectRenders } } = React.useContext(LedaContext);

  const ListContent = useElement(
    'ListContent',
    Ul,
    listRender || multiSelectRenders.listRender,
    componentProps,
    {},
  );

  /** Признак отображения футера с кнопками управления списком чекбоксов */
  const shouldRenderFooter = (isOpen && shouldRenderClearButton) || (!isOpen && shouldRenderClearButton);

  /**
   * Обработчик установки фокуса в поле поиска по элементам списка чекбоксов
   * @returns {void}
   */
  const setFocusForSearchInputField = (): void => {
    if (!isNull(searchInputRef)) {
      searchInputRef.current?.input?.focus();
      setFocused(true);
    }
  };

  return (
    <>
      <Div
        className={theme.checkBoxListHeader}
        shouldRender={!shouldHideInput}
      >
        <Input
          ref={searchInputRef}
          placeholder="Введите значение"
          onClick={setFocusForSearchInputField}
          onBlur={(): void => setFocused(false)}
          onChange={(ev): void => setFilterValue(ev.component.value)}
          value={filterValue}
        />
      </Div>

      <Div className={theme.checkBoxListWrapper}>
        <Div className={theme.checkBoxList}>
          <ListContent className={theme.checkBoxTreeList}>
            {elementProps.children}
          </ListContent>
        </Div>
      </Div>

      <Div
        className={theme.checkBoxListFooter}
        shouldRender={shouldRenderFooter}
      >
        {!isOpen && (
          <Button
            _small
            onClick={onClickSetValueButton}
          >
            Выбрать
          </Button>
        )}

        {shouldRenderClearButton && (
          <Button
            _small
            _blank
            _more
            _marginLeft16
            onClick={onClearButtonClick}
          >
            Сбросить
          </Button>
        )}
      </Div>
    </>
  );
};
