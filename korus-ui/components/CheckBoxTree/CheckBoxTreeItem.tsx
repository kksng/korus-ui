import { isFunction } from 'lodash';
import React, { useEffect } from 'react';
import { CheckBox } from '../CheckBox';
import { CheckBoxTreeItemProps } from './types';
import { Li } from '../Li';
import { add, remove } from './helpers';
import { ChangeEvent } from '../CheckBox/types';

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
    defaultValue,
    value: valueProp,
    mergeState,
    selected,
    setSelected,
  } = props;

  const [value, setValue] = React.useState<boolean | undefined>();

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);

      if (isFunction(mergeState)) mergeState({ [id]: defaultValue });

      if (defaultValue) setSelected(add(selected, id));
    }
  }, [defaultValue]);

  useEffect(() => {
    if (valueProp !== undefined) {
      setValue(valueProp);

      if (isFunction(mergeState)) mergeState({ [id]: valueProp });

      if (valueProp) {
        setSelected(add(selected, id));
      } else {
        setSelected(remove(selected, id));
      }
    }
  }, [valueProp]);

  /**
   * Change event handler for terminal checkbox
   * @param {ChangeEvent} ev
   */
  const handleChange = (ev: ChangeEvent): void => {
    setValue(ev.component.value);

    if (isFunction(mergeState)) mergeState({ [id]: ev.component.value });

    if (ev.component.value) {
      setSelected(add(selected, id));
    } else {
      setSelected(remove(selected, id));
    }
  };

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
