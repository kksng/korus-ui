import React from 'react';
import { getClassNames } from '../../utils';
import { CheckBox } from '../CheckBox';
import { Li } from '../Li';
import { Span } from '../Span';
import { Ul } from '../Ul';
import { CheckBoxTreeItem } from './CheckBoxTreeItem';
import { SelectedState } from './constants';
import { createGroupChangeHandler } from './handlers';
import { getInitialGroupState, getIsSomeSelected } from './helpers';
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
    id,
    name,
    theme,
    children,
  } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState<SelectedState | undefined>();
  const [isSelectAll, setSelectAll] = React.useState<boolean | undefined>();

  const initialState = getInitialGroupState(children);

  const [state, mergeState] = React.useReducer((oldState: GroupState, newState: GroupState) => ({
    ...oldState, ...newState,
  }), initialState);

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

  const handleChange = createGroupChangeHandler({
    props,
    setSelectAll,
    setValue,
    state,
  });

  return (
    <Li className={itemClassNames}>
      <CheckBox
        id={id}
        isSemi={getIsSomeSelected(state)}
        name={name}
        value={!!value}
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
