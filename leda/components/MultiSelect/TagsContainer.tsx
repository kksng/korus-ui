import * as React from 'react';
import { TagsContainerProps } from './types';
import { Span } from '../Span';
import { Div } from '../Div';
import { getText } from '../../src/SuggestionList/helpers';
import { SomeObject } from '../../commonTypes';

export const TagsContainer = (props: TagsContainerProps): React.ReactElement | null => {
  const {
    value, theme, onTagClick, onClearIconClick, onMouseDown, textField, hasClearButton, children, shouldHideInput, placeholder,
  } = props;

  if (value.length === 0 && shouldHideInput) {
    return (
      <Div
        className={theme.tagsContainer}
        onMouseDown={onMouseDown}
      >
        <Span className={theme.placeholder}>{placeholder}</Span>
      </Div>
    );
  }

  if (value.length === 0) return null;

  return (
    <Div
      className={theme.tagsContainer}
      onMouseDown={onMouseDown}
    >
      {(value as (string | number | SomeObject)[]).map((item, index) => React.cloneElement(children, {
        key: index.toString(),
        onIconClick: (ev: React.MouseEvent<HTMLElement>) => onTagClick({
          ...ev,
          target: {
            ...ev.target,
            value: item,
          },
        }),
        children: getText(item, textField),
      }))}
      {hasClearButton && (
        <Span
          className={theme.clearIcon}
          onClick={onClearIconClick}
        />
      )}
    </Div>
  );
};

TagsContainer.displayName = 'TagsContainer';
