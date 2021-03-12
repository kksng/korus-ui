import * as React from 'react';
import * as L from '@korus/leda';
import { overreactedTheme } from '../../../../themes';

/* eslint-disable react/no-unescaped-entities */
export const Customization = {
  liveDemo: `
const Customization = () => {
  const [value, setValue] = React.useState([null, null]);
  
  return (
      <L.NumericRange
        name="numericRange"
        form="foobar"
        onChange={(ev) => { setValue(ev.component.value) }}
        value={value}
        isRequired
        placeholder={['', 'до']}
        wrapperRender={({ elementProps }) => <L.Div {...elementProps} style={{ border: 'solid red' }}/>}
        inputsRender={[({ Element, elementProps }) => {
          return (
            <>
              <L.Span _margin-left _txt-warning>from</L.Span>
              <Element {...elementProps} />
            </>
          );
        }, null]}
      />
  );
};

render(<Customization />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Для настройки внешнего вида частей компонента используйте методы с суффиксом <b>Render:</b>
      </L.P>
      <L.Ul _txt-list>
        <L.Li>
          <b>inputRender</b> - используется для изменения полей ввода (по кастомизатору на каждое поле).
        </L.Li>
        <L.Li>
          <b>wrapperRender</b> - используется для изменения враппера каждого поля<br />
        </L.Li>
      </L.Ul>
      <L.P>
        Атрибуты  с суффиксом <b>Render</b> принимают функцию следующего вида:<br />
        <code style={overreactedTheme} language="jsx">{'({ Element, elementProps, componentProps, componentState }) => React.ReactNode'}</code>
      </L.P>
    </L.Div>
  ),
};
