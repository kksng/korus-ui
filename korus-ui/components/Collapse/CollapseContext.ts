import React from 'react';
import { globalDefaultTheme } from '../LedaProvider';
import { CollapseContextType, CollapsePanelContextType } from './types';

export const CollapseContext = React.createContext<CollapseContextType>({
  activePanelKey: null,
  onSelect: () => {},
  theme: globalDefaultTheme.collapse,
});

export const CollapsePanelContext = React.createContext<CollapsePanelContextType>({
  activePanelKey: null,
  isClicked: false,
  isExpanded: false,
  name: '',
  onBodyRest: () => {},
  onHeadingClick: () => {},
  onSelect: () => {},
  panelKey: '',
  theme: globalDefaultTheme.collapse,
});
