import * as React from 'react';
import { LedaContext, globalDefaultTheme } from '../components/LedaProvider';
import { RecursivePartial, RecursiveRequired } from '../commonTypes';

export type GlobalDefaultTheme = typeof globalDefaultTheme;

export type PartialGlobalDefaultTheme = RecursivePartial<GlobalDefaultTheme>;

export const useTheme = <T extends PartialGlobalDefaultTheme[keyof PartialGlobalDefaultTheme]>(
  theme: T | undefined, fieldName: keyof GlobalDefaultTheme,
): RecursiveRequired<T> => {
  const {
    theme: globalTheme,
  } = React.useContext(LedaContext);

  return React.useMemo(() => ({
    ...globalDefaultTheme[fieldName], ...globalTheme[fieldName], ...theme,
  }), [fieldName, globalTheme, theme]) as unknown as RecursiveRequired<T>;
};
