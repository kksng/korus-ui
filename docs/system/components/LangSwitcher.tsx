import * as React from 'react';
import { MainContext } from './MainContext';
import * as L from '../../../korus-ui';
import { Langs } from '../../lang/types';

export const LangSwitcher = (): React.ReactElement => {
  const { lang, setCurrentLanguage } = React.useContext(MainContext);

  return (
    <L.DropDown _langDropDown>
      <L.Span
        _fas
        _faGlobeAmericas
        _menuIcon
      />
      <L.Ul _langList>
        <L.Li _langItem onClick={() => setCurrentLanguage(Langs.En)}>{lang.sidebar.langGlobe.en}</L.Li>
        <L.Li _langItem onClick={() => setCurrentLanguage(Langs.Ru)}>{lang.sidebar.langGlobe.ru}</L.Li>
      </L.Ul>
    </L.DropDown>
  );
};

LangSwitcher.displayName = 'LangSwitcher';
