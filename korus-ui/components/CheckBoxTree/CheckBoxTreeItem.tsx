import { isFunction } from 'lodash';
import React, { useEffect } from 'react';
import { CheckBox } from '../CheckBox';
import { CheckBoxTreeItemProps } from './types';
import { Li } from '../Li';
import { add, remove } from './helpers';
import { ChangeEvent } from '../CheckBox/types';

/**
 * CheckBoxTree Item
 * @param {CheckBoxTreeItemProps} props
 *
 * @returns {React.ReactElement}
 */
export const CheckBoxTreeItem: React.FC<CheckBoxTreeItemProps> = (props: CheckBoxTreeItemProps): React.ReactElement => {
  const {
    label,
    name,
    theme,
    value: valueProp,
    mergeState,
    selected,
    setSelected,
  } = props;

  const [value, setValue] = React.useState(false);

  useEffect(() => {
    if (valueProp !== undefined) {
      setValue(valueProp);

      if (isFunction(mergeState)) mergeState({ [name]: valueProp });

      if (valueProp) {
        setSelected(add(selected, name));
      } else {
        setSelected(remove(selected, name));
      }
    }
  }, [valueProp]);

  /**
   * Change event handler for terminal checkbox
   * @param {ChangeEvent} ev
   */
  const handleChange = (ev: ChangeEvent): void => {
    setValue(ev.component.value);

    if (isFunction(mergeState)) mergeState({ [name]: ev.component.value });

    if (ev.component.value) {
      setSelected(add(selected, name));
    } else {
      setSelected(remove(selected, name));
    }
  };

  return (
    <Li className={theme.checkBoxTreeItem}>
      <CheckBox
        name={name}
        value={value}
        onChange={handleChange}
      >
        {label}
      </CheckBox>
    </Li>
  );
};
