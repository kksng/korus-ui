import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const Customization = {
  liveDemo: `
const Customization = () => {
  const [value, setValue] = React.useState('');
  
  const inputRender = ({ Element, elementProps }) => (
    <>
      <L.Span
        style={{ display: 'inline-block', padding: '5px' }}
        onClick={console.log}
      >
        from
      </L.Span>
      <Element {...elementProps} />
      <L.Span
        style={{ display: 'inline-block', padding: '5px' }}
        _txt-success
        onClick={console.log}
      >
        €
      </L.Span>
    </>
  ); 

  const wrapperRender = ({ Element, elementProps }) => (
    <Element
      {...elementProps}
      data-some-attribute="hello world"
    />
  ); 
  
  return (
    <L.Input
      inputRender={inputRender}
      wrapperRender={wrapperRender}
      _width-30
    />
  );
};

render(<Customization />);
`,
  text: (
    <L.Div>
      <L.P>
        Для настройки внешнего вида частей компонента используйте методы с суффиксом Render:
      </L.P>
      <ul>
        <li>
          <strong>inputRender</strong> - настройка поля ввода
        </li>
        <li>
          <strong>wrapperRender</strong> - настройка контейнера
        </li>
      </ul>
    </L.Div>
  ),
  source: componentSrc,
};
