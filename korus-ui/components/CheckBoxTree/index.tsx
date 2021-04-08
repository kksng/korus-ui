import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  bindFunctionalRef, getClassNames, useProps, useTheme,
} from '../../utils';
import { Div } from '../Div';
import { Ul } from '../Ul';
import { getHasChildItems, getTreeStateFromData, getUpdatedTreeState } from './helpers';
import { CheckBoxTreeItem } from './CheckBoxTreeItem';
import {
  CheckBoxTreeProps, CheckBoxTreeRefCurrent, CheckBoxTreeItemType, ItemState,
} from './types';
import { CheckBoxTreeGroup } from './CheckBoxTreeGroup';
import { createChangeHandler } from './handlers';
import { SelectedState } from './constants';


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
    defaultValue,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.checkBoxTree);

  const wrapperClassNames = getClassNames(theme.wrapper, className);

  const [treeState, setTreeState] = React.useState<Map<number, ItemState>>(
    getTreeStateFromData({
      items: data,
    }),
  );

  React.useEffect(() => {
    if (!defaultValue) return;

    defaultValue.forEach(((id) => {
      setTreeState((prevState: Map<number, ItemState>): Map<number, ItemState> => getUpdatedTreeState({
        id,
        newValue: SelectedState.All,
        prevState,
      }));
    }));
  }, []);

  const handleChange = createChangeHandler({
    onChange,
    setTreeState,
  });

  /**
   * Generates tree of checkboxes
   * @param {CheckBoxTreeItemType[]} items
   *
   * @returns {React.ReactElement[]}
   */
  const getTree = (items: CheckBoxTreeItemType[]): React.ReactElement[] => items.map((item) => {
    const itemState = treeState.get(item.id);

    if (getHasChildItems(item)) {
      return (
        <CheckBoxTreeGroup
          key={item.id}
          label={item.label}
          theme={theme}
          name={item.name}
          id={item.id}
          isOpen={itemState?.isOpen}
          value={itemState?.value}
          setState={setTreeState}
          handleChange={handleChange}
        >
          {itemState?.isOpen ? getTree(item.children) : null}
        </CheckBoxTreeGroup>
      );
    }
    return (
      <CheckBoxTreeItem
        key={item.id}
        label={item.label}
        id={item.id}
        name={item.name}
        theme={theme}
        value={!!itemState?.value}
        handleChange={handleChange}
      />
    );
  });

  return (
    <Div
      className={wrapperClassNames}
      ref={ref && ((component): void => bindFunctionalRef(component, ref, component && {
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
