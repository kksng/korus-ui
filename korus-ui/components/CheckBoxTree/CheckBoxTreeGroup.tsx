import { isFunction } from 'lodash';
import React from 'react';
import { getClassNames } from '../../utils';
import { CheckBox } from '../CheckBox';
import { ChangeEvent } from '../CheckBox/types';
import { Li } from '../Li';
import { Span } from '../Span';
import { Ul } from '../Ul';
import { CheckBoxTreeItem } from './CheckBoxTreeItem';
import { SelectedState } from './constants';
import { isSomeSelected } from './helpers';
import { useGroupStateUpdate } from './hooks';
import { CheckBoxTreeGroupProps, GroupState } from './types';


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
    name,
    theme,
    children,
    mergeState: mergeStateProp,
  } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState(SelectedState.Nothing);
  const [isSelectAll, setSelectAll] = React.useState<boolean | undefined>();

  const initialState = React.Children.toArray(children).reduce<GroupState>((groupState, child) => {
    if (React.isValidElement(child) && child.type === CheckBoxTreeGroup) {
      groupState[child.props.name] = child.props.value ? SelectedState.All : SelectedState.Nothing;
      return groupState;
    }
    if (React.isValidElement(child) && child.type === CheckBoxTreeItem) {
      groupState[child.props.name] = !!child.props.value;
      return groupState;
    }
    return groupState;
  }, {});

  const [state, mergeState] = React.useReducer((oldState: GroupState, newState: GroupState) => ({
    ...oldState, ...newState,
  }), initialState);

  const isSome = isSomeSelected(state);

  useGroupStateUpdate({
    props,
    setSelectAll,
    setValue,
    state,
  });

  const itemClassNames = getClassNames(
    [theme.checkBoxTreeItem],
    {
      [theme.opened]: children && isOpen,
    },
  );

  const iconClassNames = getClassNames(
    [theme.checkBoxTreeIcon],
    {
      [theme.checkBoxTreeIconExpanded]: isOpen,
    },
  );

  const handleIconClick = (): void => {
    setIsOpen(!isOpen);
  };

  /**
   * Change event handler for internal checkbox
   * @param {ChangeEvent} ev
   */
  const handleChange = (ev: ChangeEvent): void => {
    // If group was partly selected - select all subgroup
    if (isSome) {
      setSelectAll(true);
      setValue(SelectedState.All);
      if (isFunction(mergeStateProp)) mergeStateProp({ [name]: SelectedState.All });
    } else {
      setValue(ev.component.value ? SelectedState.All : SelectedState.Nothing);
      if (isFunction(mergeStateProp)) mergeStateProp({ [name]: ev.component.value ? SelectedState.All : SelectedState.Nothing });
      setSelectAll(ev.component.value);
    }
  };

  return (
    <Li className={itemClassNames}>
      <CheckBox
        isSemi={isSome}
        name={name}
        value={value !== SelectedState.Nothing}
        onChange={handleChange}
      >
        {label}
      </CheckBox>
      <Span
        onClick={handleIconClick}
        className={iconClassNames}
      />
      <Ul className={theme.checkBoxTreeList}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && (child.type === CheckBoxTreeItem || child.type === CheckBoxTreeGroup)) {
            return React.cloneElement(child, { mergeState, value: isSelectAll });
          }

          return child;
        })}
      </Ul>
    </Li>
  );
};
