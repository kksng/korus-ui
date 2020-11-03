import * as React from 'react';

import { getClassNames, useElement } from '~/utils';
import { SuggestionListProps } from '~/src/SuggestionList/types';
import { COMPONENTS_NAMESPACES } from '~/constants';
import { Div } from '~/components/Div';
import { Span } from '~/components/Span';
import { LedaContext } from '~/components/LedaProvider';
import { CheckBox } from '../CheckBox';
import { defaultMultiSelectTheme } from './theme';
import { selectAllSuggestion, SelectedState } from './constants';

/**
 * Component creates render function for checkboxes in SuggestionList
 * @param {typeof defaultMultiSelectTheme} props.theme - default theme of MultiSelect component
 * @param {CustomRender<SuggestionItemProps, {}, SuggestionElementProps> | undefined} props.itemRender - custom render function for MultiSelect item
 *
 * @returns {CustomRender<SuggestionItemProps, {}, SuggestionElementProps> | undefined} - custom render function for checkboxes
 */
export const createCheckBoxesRender = ({ theme, itemRender }: { theme: typeof defaultMultiSelectTheme, itemRender: SuggestionListProps['itemRender'] }): SuggestionListProps['itemRender'] => ({ componentProps, Element, elementProps }) => {
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

  const isCheckBoxSelected = (() => {
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
        labelRender={({ elementProps: labelElementProps }) => <Div {...labelElementProps} />}
        isSemi={isSelectAllItem && selectAllState === SelectedState.Some}
      />
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
    </Element>
  );
};
