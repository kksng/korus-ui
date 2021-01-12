import * as React from 'react';
import * as L from '../../../korus-ui';
import { MainContext } from './MainContext';
import { Themes } from '../../constants';

export const ThemeSwitcher = (): React.ReactElement => {
  const { theme, setCurrentTheme } = React.useContext(MainContext);

  if (theme === Themes.Dark) {
    return (
      <L.Span
        _fas
        _faMoon
        _menuIcon
        _marginX
        onClick={() => setCurrentTheme(Themes.Light)}
      />
    );
  }

  return (
    <L.Span
      _fas
      _faSun
      _menuIcon
      _marginX
      onClick={() => setCurrentTheme(Themes.Dark)}
    />
  );
};

ThemeSwitcher.displayName = 'ThemeSwitcher';
