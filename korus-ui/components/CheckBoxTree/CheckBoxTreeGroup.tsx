import React from 'react';
import { getClassNames } from '../../utils';
import { CheckBox } from '../CheckBox';
import { Li } from '../Li';
import { Span } from '../Span';
import { Ul } from '../Ul';
import { SelectedState } from './constants';
import { CheckBoxTreeGroupProps, ItemState } from './types';

/**
 * CheckBoxTree Group component is an internal item of the tree
 * manages state of a subgroup
 * @param {CheckBoxTreeGroupProps} props
 *
 * @returns {React.ReactElement}
 */
export const CheckBoxTreeGroup: React.FC<CheckBoxTreeGroupProps> = (props: CheckBoxTreeGroupProps): React.ReactElement => {
  const {
    label,
    id,
    name,
    theme,
    children,
    isOpen: isOpenProp = false,
    value,
    setState,
    handleChange,
  } = props;

  const itemClassNames = getClassNames(
    [theme.checkBoxTreeItem],
    {
      [theme.opened]: children && isOpenProp,
    },
  );

  const iconClassNames = getClassNames(
    [theme.checkBoxTreeIcon],
    {
      [theme.checkBoxTreeIconExpanded]: isOpenProp,
    },
  );

  /**
   * Handler updates tree state on expand icon click
   * If group was expanded sets isOpen flag to true for current item state inside tree state
   */
  const handleIconClick = (): void => {
    setState((prevState: Map<number, ItemState>): Map<number, ItemState> => {
      // get current item state from tree state
      const currentItemState = prevState.get(id);

      if (!currentItemState) return prevState;

      // Update isOpen value for current item state
      const updatedCurrentItemState: [number, ItemState] = [id, { ...currentItemState, isOpen: !isOpenProp }];

      // return updated tree state
      return new Map([...prevState, updatedCurrentItemState]);
    });
  };

  return (
    <Li className={itemClassNames}>
      <CheckBox
        id={id.toString()}
        isSemi={value === SelectedState.Some}
        name={name}
        value={!!value}
        onChange={handleChange(id, value)}
      >
        {label}
      </CheckBox>
      <Span
        onClick={handleIconClick}
        className={iconClassNames}
      />
      <Ul className={theme.checkBoxTreeList}>
        {children}
      </Ul>
    </Li>
  );
};
