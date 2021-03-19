import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Interaction = {
  liveDemo: `
const Interaction = () => {
  const [activeKey, setActiveKey] = React.useState('1');

  return (
    <L.Div >
      <L.DropDown _button>
        <L.Span>Touch me</L.Span>
        <L.Ul _txtLeft>
          <L.Li _level2>
            <L.A>Мармелад</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Суфле</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Шоколад</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Кексики</L.A>
          </L.Li>
        </L.Ul>
      </L.DropDown>
      {' '}
      <L.DropDown 
        _button 
        interactionMode="click"
      >
        <L.Span>Click me</L.Span>
        <L.Ul _txtLeft>
          <L.Li _level2>
            <L.A>Драйзер</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Пратчетт</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>По</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Лавкрафт</L.A>
          </L.Li>
        </L.Ul>
      </L.DropDown>
    </L.Div>
  );
};
render(<Interaction />);
`,
  text: (
    <L.Div>
      <L.P>
        Для настройки режима работы компонента используйте атрибут <b>interactionMode</b>.
      </L.P>
      <L.P>
        Для открытия дропдауна по клику передайте в атрибут значение <i>click</i>. По умолчанию открытие будет происходить при наведении на компонент.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
