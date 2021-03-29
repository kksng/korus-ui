import * as React from 'react';
import * as L from '@korus/leda';
import { overreactedTheme } from '../../../../themes';

export const Customization = {
  liveDemo: `
const Customization = () => {
  return (
    <L.DatePicker
      name="DatePicker"
      inputsRender={[({ Element, elementProps }) => {
        return (
          <>
            <L.Span _margin-left _txt-warning>from</L.Span>
            <Element {...elementProps} />
          </>
        );
      }, null]}
      wrapperRender={({ elementProps }) => <L.Div {...elementProps} style={{ border: 'solid red' }}/>}
      calendarHeaderRender={({ elementProps }) => <L.Div {...elementProps} style={{ border: 'solid yellow' }}/>}
    />
  );
};

render(<Customization />);
`,
text: (
  <L.Div _block>
    <L.P>Для настройки внешнего вида частей компонента используйте методы с суффиксом <b>Render</b>:</L.P>
    <L.Ul _txt-list>
      <L.Li>
        <L.P><b>calendarHeaderRender</b> - используется для изменения заголовка календаря.</L.P>
      </L.Li>
      <L.Li>
        <L.P><b>calendarWrapperRender</b> - используется для изменения враппера календаря.</L.P>
      </L.Li>
      <L.Li>
        <L.P><b>dateCellRender</b> - используется для изменения ячейки с датой.</L.P>
      </L.Li>
      <L.Li>
        <L.P><b>dateViewRender</b> - используется для изменения вида выбора даты.</L.P>
      </L.Li>
      <L.Li>
        <L.P><b>iconRender</b> - используется для изменения иконки календаря.</L.P>
      </L.Li>
      <L.Li>
        <L.P><b>inputRender</b> - используется для изменения поля ввода.</L.P>
      </L.Li>
      <L.Li>
        <L.P><b>monthViewRender</b> - используется для изменения вида выбора месяца.</L.P>
      </L.Li>
      <L.Li>
        <L.P><b>weeksRowRender</b> - используется для изменения списка дней недели (строка "Пн Вт Ср Чт Пт Сб Вс"). </L.P>
      </L.Li>
      <L.Li>
        <L.P><b>wrapperRender</b> - используется для изменения враппера инпута.</L.P>
      </L.Li>
      <L.Li>
        <L.P><b>yearViewRender</b> - используется для изменения вида выбора года.</L.P>
      </L.Li>
    </L.Ul>
    <L.P>
      Атрибуты  с суффиксом <b>Render</b> принимают функцию следующего вида:<br />
      <code style={overreactedTheme} language="jsx">{'({ Element, elementProps, componentProps, componentState }) => React.ReactNode'}</code>
    </L.P>
    <L.P>
      <b>Обратите внимание!</b> Все рендеры "замещают" элементы по умолчанию, поэтому вы должны
      передать <i>children</i> из <i>elementProps</i> в возвращаемый элемент: <br />
      <code style={overreactedTheme} language="jsx">{'({ elementProps }) => <MyAwesomeWrapper myAwesomeProps={...}>{elementProps.children}</MyAwesomeWrapper>'}</code>
    </L.P>
  </L.Div>
  ),
};
