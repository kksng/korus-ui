import React from 'react';
import { CheckBox } from '../CheckBox';
import { CheckBoxTreeItemProps } from './types';
import { Li } from '../Li';

/**
 * CheckBoxTree Item component is a terminal item of the tree
 * @param {CheckBoxTreeItemProps} props
 *
 * @returns {React.ReactElement}
 */
export const CheckBoxTreeItem: React.FC<CheckBoxTreeItemProps> = (props: CheckBoxTreeItemProps): React.ReactElement => {
  const {
    label,
    id,
    name,
    theme,
    value,
    handleChange,
  } = props;


  return (
    <Li className={theme.checkBoxTreeItem}>
      <CheckBox
        id={id.toString()}
        name={name}
        value={value}
        onChange={handleChange(id)}
      >
        {label}
      </CheckBox>
    </Li>
  );
};
