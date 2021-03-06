import React from 'react';
import { globalDefaultTheme } from './globalDefaultTheme';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { GlobalDefaultRenders, globalDefaultRenders } from './globalDefaultRenders';
import { UnderscoreClasses } from './underscoreClasses';

export interface LedaContextType {
  renders: GlobalDefaultRenders,
  theme: PartialGlobalDefaultTheme,
  underscoreClassesTransform: UnderscoreClasses,
}

export const LedaContext = React.createContext<LedaContextType>({
  renders: globalDefaultRenders as GlobalDefaultRenders,
  theme: globalDefaultTheme,
  underscoreClassesTransform: UnderscoreClasses.NoTransform,
});
