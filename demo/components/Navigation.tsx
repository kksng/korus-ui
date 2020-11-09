import React from 'react';
import * as L from '../../leda';
import { Styles } from './Styles';

const themes: string[] = ['Nova', 'Bootstrap'];

export const Navigation = () => {
  const [theme, setTheme] = React.useState<string>();

  const handleClick = (ev: L.ButtonGroupTypes.ChangeEvent<string>): void => {
    setTheme(ev.component.value);
  };

  return (
    <L.Header _container _demoHeader>
      <Styles theme={theme} />
      <L.Div _row _demoThemeSwitcher>
        <L.Div _colMd8>
          <L.Span>LittleThemeSwitcher</L.Span>
        </L.Div>
        <L.Div _colMd4>
          <L.ButtonGroup
            data={themes}
            _warning
            value={theme}
            onChange={handleClick}
          />
        </L.Div>
      </L.Div>
      <L.Nav _row _demoNav>
        <L.Span _colMd2 _ledaLogo />
        <L.A _colMd2 href="/">
            Main Demo
        </L.A>
      </L.Nav>
    </L.Header>
  );
};
