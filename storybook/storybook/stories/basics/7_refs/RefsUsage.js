/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { LiveEditor, LiveProvider } from 'react-live';
import { editorTheme } from '../../../themes';
import { Remark } from '../../../components/Remark';

const creatingAutoCompleteRef = `
const myComponent = () => {
  const myRef = React.useRef();

  const handleClick = () => {
    myRef.current.input.focus(); // вызвать фокус у элемента input внутри AutoComplete
    // так же можно получить контейнер AutoComplete:
    // myRef.current.wrapper
  }
  
  return (
    <L.Div>
      <L.AutoComplete
        data={['1', '2', '3']}
        value="1"
        ref={myRef}
      />
      <L.Button onClick={handleClick}>Click me to focus input</L.Button>
    </L.Div>
  )
}
`;

const creatingDivRef = `
const myComponent = () => {
  const myRef = React.useRef();

  const handleClick = () => {
    // получить доступ к элементу <div />
    console.log(myRef.current.wrapper);
  }

  return (
    <L.Div ref={myRef}>
      <L.Button onClick={handleClick}>Click me to focus input</L.Button>
    </L.Div>
  )
}
`;

const introLink = <L.A target="_self" onClick={linkTo('Tutorials| Рефы и DOM', 'Знакомство с рефами')}>Знакомство с рефами</L.A>;

export const RefsUsage = () => (
  <L.Div _refs-wrapper>
    <L.H1 _title>Доступ к рефам</L.H1>
    <br />
    <Remark>
      <L.P>
        Если вы не знакомы с рефами, рекомендуем сначала прочесть {introLink}
      </L.P>
    </Remark>
    <br />
    <L.H3><b>Реализация рефов в библиотеке Korus-ui отличается от реализации React</b></L.H3>
    <br />
    <L.P>
      Когда реф передаётся элементу в методе <L.Span _colored>render</L.Span>, ссылка на
      данный узел доступна через свойство рефа <L.Span _colored>current</L.Span>.
    </L.P>
    <L.Div _live-style>
      <LiveProvider code={creatingDivRef} theme={editorTheme} disabled>
        <L.Div _editor>
          <LiveEditor />
        </L.Div>
      </LiveProvider>
    </L.Div>
    <br />
    <L.P>Содержимое поля <L.Span _colored>current</L.Span> имеет следующую структуру:</L.P>
    <L.Ul disc>
      <L.Li>
        <L.Span _colored>wrapper</L.Span> - самый внешний DOM-элемент компонента, это поле присутствует у всех компонентов библиотеки
      </L.Li>
      <L.Li>
        <L.Span _colored>input</L.Span> - ссылка на элемент <L.Span _colored>&lt;input /&gt;</L.Span>, это поле есть только у
        компонентов с полем ввода
      </L.Li>
      <L.Li>
        <L.Span _colored>label</L.Span> - ссылка на элемент <L.Span _colored>&lt;label /&gt;</L.Span>, это поле есть только у
        компонентов с меткой (<L.Span _colored>label</L.Span>)
      </L.Li>
      <L.Li>
        <L.Span _colored>container</L.Span> - элемент-контейнер у компонентов с выпадающим списком
      </L.Li>
      <L.Li>
        <L.Span _colored>filter</L.Span> - указывает на элемент <L.Span _colored>&lt;input /&gt;</L.Span>, это поле есть только у
        компонентов с фильтрацией (e.g. <L.Span _colored>DropDownSelect</L.Span>)
      </L.Li>
      <L.Li>
        <L.Span _colored>inputFrom/inputTo</L.Span> - <L.Span _colored>input</L.Span>-элементы у компонентов с двумя полями ввода.
        Например, <L.Span _colored>NumericRange</L.Span>.
      </L.Li>
    </L.Ul>
    <br />
    <L.P>Пример программного вызова фокуса <L.Span _colored>AutoComplete</L.Span>.</L.P>
    <br />
    <L.Div _live-style>
      <LiveProvider code={creatingAutoCompleteRef} theme={editorTheme} disabled>
        <L.Div _editor>
          <LiveEditor />
        </L.Div>
      </LiveProvider>
    </L.Div>
  </L.Div>
);
