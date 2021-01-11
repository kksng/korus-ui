import * as React from 'react';
import { isObject } from 'lodash';

import { LedaContext } from '../../components/LedaProvider';
import { Li } from '../../components/Li';
import { Span } from '../../components/Span';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { getClassNames, useElement } from '../../utils';
import { createClickHandler } from './handlers';
import { SuggestionItemProps } from './types';
import { getWrapperRef } from '../../utils/getWrapperRef';
import { CommonRefCurrent } from '../../commonTypes';

/**
 * SuggestionItem component renders item of SuggestionList
 * @param {SuggestionItemProps} props - properties of SuggestionItem component
 *
 * @returns {React.ReactElement}
 */
export const SuggestionItem = (props: SuggestionItemProps): React.ReactElement => {
  const {
    itemRender,
    selectAllItemRender,
    isSelectAllItem,
    item,
    isScrollTarget,
    isPlaceholder,
    isHighlighted,
    isSelected,
    suggestionRef,
    text,
    theme,
  } = props;

  const {
    renders: { [COMPONENTS_NAMESPACES.suggestionList]: suggestionRenders },
  } = React.useContext(LedaContext);

  const selectAllItemText: string = isObject(item)
    ? item?.text || ''
    : String(item);

  const Suggestion = useElement(
    'Suggestion',
    Li,
    itemRender || suggestionRenders.itemRender,
    props,
  );

  const SelectAllItem = useElement(
    'SelectAllItem',
    Span,
    selectAllItemRender || suggestionRenders.itemRender,
    props,
  );

  const handleClick = createClickHandler(props);

  const suggestionClassNames = getClassNames(
    theme.item,
    {
      [theme.itemPlaceholder]: isPlaceholder,
      [theme.itemHighlighted]: isHighlighted,
      [theme.itemSelected]: isSelected,
    },
  );

  return (
    <Suggestion
      className={suggestionClassNames}
      onClick={handleClick}
      ref={(component) => {
        if (isScrollTarget) {
          suggestionRef.current = getWrapperRef<CommonRefCurrent>(component);
        }
      }}
    >
      {isSelectAllItem
        ? (
          <SelectAllItem>
            {selectAllItemText}
          </SelectAllItem>
        ) : text}
    </Suggestion>
  );
};

SuggestionItem.displayName = 'SuggestionItem';
