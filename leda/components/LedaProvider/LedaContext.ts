import React from 'react';
import { globalDefaultTheme } from './globalDefaultTheme';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { GlobalDefaultRenders, globalDefaultRenders } from './globalDefaultRenders';
import { UnderscoreClasses } from './underscoreClasses';

export interface LedaContextType {
  theme: PartialGlobalDefaultTheme,
  renders: GlobalDefaultRenders,
  underscoreClassesTransform: UnderscoreClasses,
}

export const LedaContext = React.createContext<LedaContextType>({
  theme: globalDefaultTheme,
  renders: globalDefaultRenders as GlobalDefaultRenders,
  underscoreClassesTransform: UnderscoreClasses.NoTransform,
});
