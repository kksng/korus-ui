import React from 'react';
import { isNil } from 'lodash';
import { TabContentProps } from './types';

export const TabContent = (props: TabContentProps): React.ReactElement | null => {
  // если children не переданы - функция вернет пустой массив
  const children = React.Children.toArray(props.children);
  // ищем выбранную вкладку
  const selectedTab = children.find((child) => React.isValidElement(child) && child.props.tabKey === props.activeTabKey);
  // рендерим контент выбранного таба
  return React.isValidElement(selectedTab) && !isNil(selectedTab.props.children)
    ? selectedTab.props.children
    : null;
};
