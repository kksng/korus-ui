import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { globalDefaultTheme } from '../LedaProvider';
import { TabsContextType } from './types';

export const TabsContext = React.createContext<TabsContextType>({
  activeTabKey: 0,
  onTabSelect: () => {},
  theme: globalDefaultTheme[COMPONENTS_NAMESPACES.tabs],
});
