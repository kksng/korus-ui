import React from 'react';
import { LedaContext } from './LedaContext';
import { globalDefaultTheme } from './globalDefaultTheme';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { globalDefaultRenders, GlobalDefaultRenders } from './globalDefaultRenders';
import { UnderscoreClasses } from './underscoreClasses';

export interface LedaProps {
  children: React.ReactNode,
  theme?: PartialGlobalDefaultTheme,
  renders?: GlobalDefaultRenders,
  underscoreClassesTransform?: UnderscoreClasses,
}

export const Leda = ((props: LedaProps): React.ReactElement => {
  const {
    theme = globalDefaultTheme,
    renders = globalDefaultRenders,
    underscoreClassesTransform = UnderscoreClasses.NoTransform,
    children,
  } = props;

  const context = { theme, renders, underscoreClassesTransform };

  return (
    <LedaContext.Provider value={context}>
      {children}
    </LedaContext.Provider>
  );
}) as React.FC<LedaProps>;

export { LedaContext } from './LedaContext';
export { globalDefaultTheme } from './globalDefaultTheme';
export { UnderscoreClasses } from './underscoreClasses';
