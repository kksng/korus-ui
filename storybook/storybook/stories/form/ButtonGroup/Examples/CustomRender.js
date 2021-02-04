import * as React from 'react';
import * as L from '@korus/leda';
import { overreactedTheme } from '../../../../themes';

export const CustomRender = {
  text: (
    <L.Div _block>
      <L.P>Для настройки внешнего вида частей компонента используйте методы с суффиксом <b>Render</b>:</L.P>
      <L.Ul _txt-list>
        <L.Li>
          <L.P><b>wrapperRender</b> - используется для изменения враппера компонента. </L.P>
          <L.P>
            Данный атрибут принимает функцию следующего вида:<br />
            <code style={overreactedTheme} language="jsx">{'({ Element, elementProps, componentProps, componentState }) => React.ReactNode'}</code>
          </L.P>
        </L.Li>
        <L.Li>
          <L.P><b>buttonRender</b> - используется для изменения кнопок в компоненте.</L.P>
          <L.P>
            Данный атрибут принимает функцию следующего вида:<br />
            <code style={overreactedTheme} language="jsx">{'({ Element, elementProps, componentProps, componentState }) => React.ReactNode'}</code>
          </L.P>
        </L.Li>
      </L.Ul>
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
      <L.ButtonGroup
        data={["one", "two", "three", "four"]}
        defaultValue="one"
        wrapperRender={({ elementProps }) => <L.Ul {...elementProps} _txt-list/>}
        buttonRender={({ elementProps }) => {
          const isActive = elementProps.className.includes('active');
          return (
            <L.Li {...elementProps} _txt-success={isActive} />
          )
        }}
      />
    );
  };
  
  render(<CustomRender />);
`,
};
