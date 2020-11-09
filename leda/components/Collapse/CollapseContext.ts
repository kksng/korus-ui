import React from 'react';
import { globalDefaultTheme } from '../LedaProvider';
import { CollapseContextType, CollapsePanelContextType } from './types';

export const CollapseContext = React.createContext<CollapseContextType>({
  activePanelKey: null,
  onSelect: () => {},
  theme: globalDefaultTheme.collapse,
});

export const CollapsePanelContext = React.createContext<CollapsePanelContextType>({
  panelKey: '',
  isClicked: false,
  name: '',
  isExpanded: false,
  activePanelKey: null,
  onHeadingClick: () => {},
  onBodyRest: () => {},
  onSelect: () => {},
  theme: globalDefaultTheme.collapse,
});
