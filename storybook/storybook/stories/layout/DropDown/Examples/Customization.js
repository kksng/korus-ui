import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Customization = {
  liveDemo: `
const Customization = () => {
  const [activeKey, setActiveKey] = React.useState('1');

  const wrapperRender = ({ elementProps, Element }) => (
    <Element {...elementProps} style={{ border: '2px solid blue' }} />
  );

  return (
    <L.Div>
      <L.DropDown 
        _button 
        _more
        wrapperRender={wrapperRender}
      >
        <L.Span>...</L.Span>
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
    </L.Div>
  );
};
render(<Customization />);
`,
  text: (
    <L.Div>
      <L.P>
        Для настройки внешнего вида частей компонента используйте методы с суффиксом Render:
      </L.P>
      <L.P>
        <b>wrapperRender</b> - кастомизация враппера.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
