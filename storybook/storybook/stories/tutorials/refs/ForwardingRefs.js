/* eslint-disable react/prop-types */
import React from 'react';
import * as L from '@korus/leda';
import { LiveEditor, LiveProvider } from 'react-live';
import { editorTheme } from '../../../themes';
import { Remark } from '../../../components/Remark';

const fancyButton = `
const FancyButton = (props) => {
  return (
    <button className="FancyButton">
      {props.children}
    </button>
  );
}
`;

const forwardingRef = `
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// Теперь реф будет указывать непосредственно на DOM-узел button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
`;

export const ForwardingRefs = () => (
  <L.Div _refs-wrapper _inner _box>
    <L.H1 _title>Прокидывание рефов</L.H1>
    <br />
    <L.H5 _txtGray>
      Прокидывание рефов позволяет автоматически передавать реф компонента одному из его дочерних элементов.
      Большинству компонентов перенаправление рефов не нужно, но оно может быть полезно, например, если вы пишете библиотеку.
      Рассмотрим наиболее частые сценарии.
    </L.H5>
    <br />
    <L.H3>Прокидывание рефов в DOM-компоненты</L.H3>
    <br />
    <L.P>
      Допустим, у нас есть компонент <L.Span _colored>FancyButton</L.Span>, который рендерит
      нативный DOM-элемент <L.Span _colored>button</L.Span>:
    </L.P>
    <L.Div _live-style>
      <LiveProvider code={fancyButton} theme={editorTheme} disabled>
        <L.Div _editor>
          <LiveEditor />
        </L.Div>
      </LiveProvider>
    </L.Div>
    <br />
    <L.P>
      React-компоненты скрывают свои детали реализации, в том числе результат рендеринга.
      Реф элемента <L.Span _colored>button</L.Span> из <L.Span _colored>FancyButton</L.Span> обычно и не требуется другим компонентам.
      Это хорошо, поскольку такой подход не даёт компонентам излишне полагаться на структуру DOM друг друга.
    </L.P>
    <br />
    <L.P>
      Такая инкапсуляция хорошо подходит компонентам, которые
      описывают некую законченную часть приложения, например, <L.Span _colored>FeedStory</L.Span> или <L.Span _colored>Comment</L.Span>.
      А вот в «маленьких», часто переиспользуемых компонентах, таких
      как <L.Span _colored>FancyButton</L.Span> или <L.Span _colored>MyTextInput</L.Span>, она может быть неудобной.
      Чтобы управлять фокусом, выделением и анимациями этих компонентов, придётся получить доступ к их DOM-узлам.
    </L.P>
    <br />
    <L.P>
      <b>
        Перенаправление рефов позволяет взять ref из атрибутов компонента,
        и передать («прокинуть») его одному из дочерних компонентов.
      </b>
    </L.P>
    <br />
    <L.P>
      В данном примере мы используем <L.Span _colored>React.forwardRef</L.Span> в компоненте <L.Span _colored>FancyButton</L.Span>,
      чтобы получить реф и передать его в дочерний DOM-элемент button.
    </L.P>
    <L.Div _live-style>
      <LiveProvider code={forwardingRef} theme={editorTheme} disabled>
        <L.Div _editor>
          <LiveEditor />
        </L.Div>
      </LiveProvider>
    </L.Div>
    <br />
    <L.P>
      Таким образом, когда мы будем применять <L.Span _colored>FancyButton</L.Span> в
      других компонентах, мы сможем получить реф находящегося в нём
      DOM-узла button и использовать его так же, как если бы мы рендерили непосредственно <L.Span _colored>button</L.Span>.
    </L.P>
    <br />
    <L.P>
      Рассмотрим этот пример пошагово:
      <L.Ul decimal>
        <L.Li>
          Мы создаём реф, вызвав <L.Span _colored>React.createRef</L.Span> и
          записываем его в переменную <L.Span _colored>ref</L.Span>.
        </L.Li>
        <L.Li>
          Мы передаём переменную <L.Span _colored>ref</L.Span> в <L.Span _colored>&lt;FancyButton ref=&#123;ref&#125;&gt;</L.Span>,
          указывая её в JSX-атрибуте.
        </L.Li>
        <L.Li>
          React передаёт <L.Span _colored>ref</L.Span> в
          функцию <L.Span _colored>(props, ref) =&gt; ...</L.Span> внутри <L.Span _colored>forwardRef</L.Span> в
          качестве второго аргумента.
        </L.Li>
        <L.Li>
          Мы передаём аргумент <L.Span _colored>ref</L.Span> дальше
          в <L.Span>&lt;button ref=&#123;ref&#125;&gt;</L.Span>, указывая его в JSX-атрибуте.
        </L.Li>
        <L.Li>
          После привязки рефа <L.Span _colored>ref.current</L.Span> будет
          указывать на DOM-узел <L.Span _colored>&lt;button&gt;</L.Span>.
        </L.Li>
      </L.Ul>
    </L.P>
    <br />
    <Remark>
      <L.P>
        Второй аргумент <b>ref</b> существует только в том случае, если
        вы создаёте компонент через функцию <b>React.forwardRef</b>. Обычные функциональные или
        классовые компоненты не получают <b>ref</b> в качестве аргумента или <b>props</b>.
      </L.P>
      <br />
      <L.P>
        Перенаправить реф можно не только в DOM-компонент, но и в экземпляр классового компонента.
      </L.P>
    </Remark>
  </L.Div>
);
