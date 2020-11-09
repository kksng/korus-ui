import React from 'react';
import {
  bindFunctionalRef, getClassNames, useElement, useProps,
} from '../../utils';
import { Li, LiProps } from '../Li';
import { TabsContext } from './TabsContext';
import { TabProps, TabRefCurrent } from './types';

export const Tab = React.forwardRef((props: TabProps, ref: React.Ref<TabRefCurrent>): React.ReactElement => {
  const {
    onTabSelect, activeTabKey, theme: parentTheme, tabRender: parentTabRender,
  } = React.useContext(TabsContext);

  const {
    isDisabled, tabKey, title, className, style, theme: themeProp, tabRender: childTabRender,
  } = useProps(props);

  const tabRender = childTabRender ?? parentTabRender;

  // тема, переданная в таб перекрывает родительскую тему и дефолтную
  const theme = { ...parentTheme, ...themeProp };

  const isTabActive = tabKey === activeTabKey;
  // если таб активен - у него появляется класс active
  const combinedClassNames = getClassNames(
    theme.tab,
    { [theme.tabActive]: isTabActive },
    { [theme.tabDisabled]: isDisabled },
    className,
  );

  const TabItem = useElement<TabProps, {}, LiProps>(
    'TabItem',
    Li,
    tabRender,
    props,
  );

  const handleClick: React.MouseEventHandler<HTMLLIElement> = React.useCallback((event) => {
    if (!isDisabled) {
      onTabSelect(event, tabKey);
    }
  }, [onTabSelect, isDisabled, tabKey]);

  return (
    <TabItem
      className={combinedClassNames}
      onClick={handleClick}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
    >
      {title}
    </TabItem>
  );
}) as React.FC<TabProps>;

Tab.displayName = 'Tab';
