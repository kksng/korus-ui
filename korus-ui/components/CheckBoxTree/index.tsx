import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  bindFunctionalRef, getClassNames, useProps, useTheme,
} from '../../utils';
import { Div } from '../Div';
import { Ul } from '../Ul';
import { isInternal } from './helpers';
import { CheckBoxTreeItem } from './CheckBoxTreeItem';
import { CheckBoxTreeProps, CheckBoxTreeRefCurrent, CheckBoxTreeItemType } from './types';
import { CheckBoxTreeGroup } from './CheckBoxTreeGroup';
import { createChangeHandler } from './handlers';
import { useHandleChange } from './hooks';

/**
 * CheckBoxTree component renders tree of checkboxes
 * @param {CheckBoxTreeProps} props
 *
 * @returns {React.ReactElement}
 */
export const CheckBoxTree = React.forwardRef((props: CheckBoxTreeProps, ref?: React.Ref<CheckBoxTreeRefCurrent>) => {
  const {
    className,
    data,
    theme: themeProp,
    onChange,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.checkBoxTree);

  const wrapperClassNames = getClassNames(theme.wrapper, className);

  const [selected, setSelected] = React.useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = React.useState<string[]>([]);

  const handleChange = createChangeHandler({
    onChange, selected, selectedGroups,
  });

  useHandleChange({ handleChange, selected, selectedGroups });

  /**
   * Generates tree of checkboxes
   * @param {CheckBoxTreeItemType[]} items
   *
   * @returns {React.ReactElement[]}
   */
  const getTree = (items: CheckBoxTreeItemType[]): React.ReactElement[] => items.map((item) => {
    if (isInternal(item)) {
      return (
        <CheckBoxTreeGroup
          key={item.name}
          label={item.label}
          theme={theme}
          name={item.name}
          selectedGroups={selectedGroups}
          setSelectedGroups={setSelectedGroups}
        >
          {getTree(item.children)}
        </CheckBoxTreeGroup>
      );
    }
    return (
      <CheckBoxTreeItem
        key={item.name}
        label={item.label}
        name={item.name}
        theme={theme}
        selected={selected}
        setSelected={setSelected}
      />
    );
  });

  return (
    <Div
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
      {...restProps}
    >
      <Ul className={theme.checkBoxTreeList}>
        {getTree(data)}
      </Ul>
    </Div>
  );
}) as React.FC<CheckBoxTreeProps>;

CheckBoxTree.displayName = 'CheckBoxTree';
