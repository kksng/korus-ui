import React from 'react';
import * as L from '@korus/leda';
import {
  LiveEditor, LiveProvider,
} from 'react-live';
import { editorTheme } from '../../../themes';
import { Remark } from '../../../components/Remark';

const creatingClassExample = `
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
`;

const creatingFunctionExample = `
const MyComponent = () => {
  const myRef = React.useRef();

  return (
    <div ref={myRef} />
  );
}
`;

export const CreatingRefs = () => (
  <L.Div _resf-wrapper _inner _box>
    <L.H1 _title>Создание рефов</L.H1>
    <br />
    <L.P>
      Рефы создаются с помощью <L.Span _colored>React.createRef()</L.Span> или <L.Span _colored>React.useRef(initialValue)</L.Span> и
      прикрепляются к React-элементам через <L.Span _colored>ref</L.Span> атрибут. Обычно рефы присваиваются
      свойству экземпляра класса в конструкторе, чтобы на них можно ссылаться из любой части компонента.
    </L.P>
    <L.Div _live-style>
      <LiveProvider code={creatingClassExample} theme={editorTheme} noInline disabled>
        <L.Div _editor>
          <LiveEditor />
        </L.Div>
      </LiveProvider>
    </L.Div>
    <br />
    <L.P>В случае с функциональным компонентом:</L.P>
    <L.Div _live-style>
      <LiveProvider code={creatingFunctionExample} theme={editorTheme} noInline disabled>
        <L.Div _editor>
          <LiveEditor />
        </L.Div>
      </LiveProvider>
    </L.Div>
    <br />
    <Remark>
      <L.P>
        <b>Использование &quot;хука&quot; React.useRef()</b> возможно только в версии <b>React</b> 16.8 и выше. Более подробно
        о <b>React Hooks</b> можно
        прочитать в <L.A target="_blank" href="https://ru.reactjs.org/docs/hooks-intro.html">документации React</L.A>.
      </L.P>
    </Remark>
  </L.Div>
);
