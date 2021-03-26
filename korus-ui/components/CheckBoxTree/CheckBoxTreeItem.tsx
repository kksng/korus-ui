import React from 'react';
import { CheckBox } from '../CheckBox';
import { CheckBoxTreeItemProps } from './types';
import { Li } from '../Li';
import { useItemStateUpdate } from './hooks';
import { createItemChangeHandler } from './handlers';

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
  } = props;

  const [value, setValue] = React.useState<boolean | undefined>();

  useItemStateUpdate({ props, setValue });

  const handleChange = createItemChangeHandler({ props, setValue });

  return (
    <Li className={theme.checkBoxTreeItem}>
      <CheckBox
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {label}
      </CheckBox>
    </Li>
  );
};
