import * as React from 'react';
import * as L from '@korus/leda';
import { overreactedTheme } from '../../../../themes';

export const CustomRender = {
  text: (
    <L.Div _block>
      <L.P>Для настройки внешнего вида частей компонента используйте методы с суффиксом <b>Render</b>:</L.P>
      <L.Ul _txt-list>
        <L.Li>
          <L.P><b>wrapperRangeRender</b> - используется для изменения враппера всего компонента. </L.P>
        </L.Li>
        <L.Li>
          <L.P><b>wrapperRender</b> - используется для изменения враппера каждого инпута.</L.P>
        </L.Li>
        <L.Li>
          <L.P><b>inputsRender</b> - используется для изменения полей ввода (по кастомизатору на каждое поле).</L.P>
        </L.Li>
        <L.Li>
          <L.P><b>iconRender</b> - используется для изменения иконки календаря.</L.P>
        </L.Li>
        <L.Li>
          <L.P><b>delimiterRender</b> - используется для изменения разделителя полей ввода.</L.P>
        </L.Li>
      </L.Ul>
      <L.P>
        Атрибуты  с суффиксом <b>Render</b> принимают функцию следующего вида:<br />
        <code style={overreactedTheme} language="jsx">{'({ Element, elementProps, componentProps, componentState }) => React.ReactNode'}</code>
      </L.P>
      <L.P>
        <b>Обратите внимание!</b> Все рендеры "замещают" элементы по-умолчанию, поэтому вы должны
        передать <i>children</i> из <i>elementProps</i> в возвращаемый элемент: <br />
        <code style={overreactedTheme} language="jsx">{'({ elementProps }) => <MyAwesomeWrapper myAwesomeProps={...}>{elementProps.children}</MyAwesomeWrapper>'}</code>
      </L.P>
      <br />
      <L.P>
        Пример использования:
      </L.P> 
    </L.Div>
  ),
  liveDemo: `
const CustomRender = () => {
  return (
    <L.Div>
      <L.DateRange
        name="DateRange"
        placeholder={['', 'до']}
        inputsRender={[({ Element, elementProps }) => {
          return (
            <>
              <L.Span _margin-left _txt-warning>from</L.Span>
              <Element {...elementProps} />
            </>
          );
        }, null]}
        wrapperRender={({ elementProps }) => <L.Div {...elementProps} style={{ border: 'solid red' }}/>}
        wrapperRangeRender={({ elementProps }) => <L.Div {...elementProps} style={{ border: 'solid yellow' }}/>}
        delimiterRender={({ elementProps }) => <L.Span {...elementProps}>~</L.Span>}
      />
    </L.Div>
  );
};

render(<CustomRender />);
`,
};