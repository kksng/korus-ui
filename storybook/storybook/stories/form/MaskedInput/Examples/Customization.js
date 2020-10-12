import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const Customization = {
  liveDemo: `
const Customization = () => {
  const [value, setValue] = React.useState('');
  
  const inputRender = ({ elementProps, Element }) => (
    <>
      <L.Span style={{ padding: '0 5px' }} >icon</L.Span>
      <Element {...elementProps} />
    </>
  ); 

  const wrapperRender = ({ elementProps, Element }) => (
    <Element {...elementProps} style={{ border: '1px solid green' }} />
  ); 
  
  return (
    <L.MaskedInput
      mask="####-###-###"
      inputRender={inputRender}
      wrapperRender={wrapperRender}
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
          <strong>wrapperRender</strong> - настройка контейнера компонента
        </li>
      </ul>
    </L.Div>
  ),
  source: componentSrc,
};
