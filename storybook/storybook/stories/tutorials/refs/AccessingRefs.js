import React from 'react';
import * as L from '@korus/leda';
import { LiveEditor, LiveProvider } from 'react-live';
import { linkTo } from '@storybook/addon-links';
import { editorTheme } from '../../../themes';
import { Remark } from '../../../components/Remark';

const creatingRef = `
const node = this.myRef.current;
`;

const creatingDOMRef = `
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // создадим реф в поле \`textInput\` для хранения DOM-элемента
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Установим фокус на текстовое поле с помощью чистого DOM API
    // Примечание: обращаемся к "current", чтобы получить DOM-узел
    this.textInput.current.focus();
  }

  render() {
    // описываем, что мы хотим связать реф <input>
    // с \`textInput\` созданным в конструкторе
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} 
        />
        <input
          type="button"
          value="Фокус на текстовом поле"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
`;

const creatingClassRef = `
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}
`;

const creatingFunctionalRefWrong = `
const MyFunctionComponent = () => {
  return <input />;
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  render() {
    // Данный код *не будет* работать!
    return (
      <MyFunctionComponent ref={this.textInput} />
    );
  }
}
`;

const creatingFunctionalRefRight = `
const CustomTextInput = (props) => {
  // переменная textInput должна быть объявлена на верхнем уровне, 
  // чтобы реф мог иметь к ней доступ
  const textInput = React.useRef();

  const handleClick = () => {
    textInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} 
      />
      <input
        type="button"
        value="Фокус на поле для ввода текста"
        onClick={handleClick}
      />
    </div>
  );
}
`;

const creatingLedaRef = `
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

const forwardRefLink = (
  <L.A
    title="Прокидывание рефов"
    taret="_self"
    onClick={linkTo('Tutorials| Рефы и DOM', 'Прокидывание рефов')}
  >
    forwardRef
  </L.A>
);

export const AccessingRefs = () => (
  <L.Div _inner _box _refs-wrapper>
    <L.H1 _title>Доступ к рефам</L.H1>
    <br />
    <L.P>
      Когда реф передаётся элементу в методе <L.Span _colored>render</L.Span>, ссылка на
      данный узел доступна через свойство рефа <L.Span _colored>current</L.Span>.
    </L.P>
    <L.Div _live-style>
      <LiveProvider code={creatingRef} theme={editorTheme} disabled>
        <L.Div _editor>
          <LiveEditor />
        </L.Div>
      </LiveProvider>
    </L.Div>
    <br />
    <L.P>Значение рефа отличается в зависимости от типа узла:</L.P>
    <L.Ul disc>
      <L.Li>
        Когда атрибут <L.Span _colored>ref</L.Span> используется с HTML-элементом, свойство current созданного рефа в
        конструкторе с помощью <L.Span _colored>React.createRef()</L.Span> получает соответствующий DOM-элемент.
      </L.Li>
      <L.Li>
        Когда атрибут <L.Span _colored>ref</L.Span> используется с классовым компонентом, свойство current объекта-рефа
        получает экземпляр смонтированного компонента.
      </L.Li>
      <L.Li>
        Нельзя использовать <L.Span _colored>ref</L.Span> атрибут с функциональными компонентами,
        потому что для них не создаётся экземпляров.
        Для передачи рефа функциональному компоненту
        используйте {forwardRefLink}.
      </L.Li>
      <L.Li>
        Когда атрибут <L.Span _colored>ref</L.Span> используется с компонентом данной библиотеки, свойство current объекта-рефа
        получает специальный объект следующей структуры:
        <L.Ul subList circle>
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
      </L.Li>
      <br />
      <L.P>Представленные ниже примеры демонстрируют отличия в зависимости от типа узла.</L.P>
      <br />
      <L.H3 _txtGray>Добавление рефа к DOM-элементу</L.H3>
      <br />
      <L.P>В представленном ниже примере <L.Span _colored>ref</L.Span> используется для хранения ссылки на DOM-элемент.</L.P>
      <L.Div _live-style>
        <LiveProvider code={creatingDOMRef} theme={editorTheme} disabled>
          <L.Div _editor>
            <LiveEditor />
          </L.Div>
        </LiveProvider>
      </L.Div>
      <br />
      <L.P>
        <L.Span _colored>React</L.Span> присвоит DOM-элемент свойству <L.Span _colored>current</L.Span> при монтировании компонента
        и присвоит обратно значение <L.Span _colored>null</L.Span> при демонтировании.
        Обновление свойства <L.Span _colored>ref</L.Span> происходит перед вызовом
        методов <L.Span _colored>componentDidMount</L.Span> и <L.Span _colored>componentDidUpdate</L.Span>.
      </L.P>
      <br />
      <L.H3 _txtGray>Добавление рефа к классовому компоненту</L.H3>
      <br />
      <L.P>
        Для того чтобы произвести имитацию клика по <L.Span _colored>CustomTextInput</L.Span> из прошлого примера
        сразу же после монтирования, можно использовать реф, чтобы получить доступ к
        пользовательскому &lt;input /&gt; и явно вызвать его метод <L.Span _colored>focusTextInput</L.Span>:
      </L.P>
      <L.Div _live-style>
        <LiveProvider code={creatingClassRef} theme={editorTheme} disabled>
          <L.Div _editor>
            <LiveEditor />
          </L.Div>
        </LiveProvider>
      </L.Div>
      <br />
      <L.P>
        Обратите внимание, что это сработает только в том случае, если <L.Span _colored>CustomTextInput</L.Span> объявлен
        как классовый компонент или обернут
        в {forwardRefLink}.
      </L.P>
      <br />
      <L.H3 _txtGray>Рефы и функциональные компоненты</L.H3>
      <br />
      <L.P>
        <b>Нельзя использовать атрибут ref с функциональными компонентами напрямую</b>, потому что для них не создаётся экземпляров:
      </L.P>
      <L.Div _live-style>
        <LiveProvider code={creatingFunctionalRefWrong} theme={editorTheme} disabled>
          <L.Div _editor>
            <LiveEditor />
          </L.Div>
        </LiveProvider>
      </L.Div>
      <br />
      <L.P>
        Если вам нужен реф на функциональный компонент, оберните его
        в {forwardRefLink}.
      </L.P>
      <br />
      <L.P>
        Тем не менее, можно использовать атрибут <L.Span _colored>ref</L.Span> внутри функционального компонента при условии,
        что он ссылается на DOM-элемент или классовый компонент:
      </L.P>
      <L.Div _live-style>
        <LiveProvider code={creatingFunctionalRefRight} theme={editorTheme} disabled>
          <L.Div _editor>
            <LiveEditor />
          </L.Div>
        </LiveProvider>
      </L.Div>
      <br />
      <L.H3 _txtGray>Рефы и компоненты библиотеки Korus-ui</L.H3>
      <br />
      <L.P>
        Возможны такие случаи, когда вам понадобится получить доступ к DOM-элементам компонентов
        данной библиотеки. Библиотека <L.Span _colored>Korus-ui</L.Span> предоставляет такую возможность:
      </L.P>
      <L.Div _live-style>
        <LiveProvider code={creatingLedaRef} scope={{ L }} theme={editorTheme} disabled>
          <L.Div _editor>
            <LiveEditor />
          </L.Div>
        </LiveProvider>
      </L.Div>
      <br />
      <Remark>
        <L.P>
          <b>Важно понмнить</b>, что компоненты библиотеки <b>Korus-ui</b> возвращают в <b>current</b> объект,
          а не DOM-элемент.
        </L.P>
      </Remark>
    </L.Ul>
  </L.Div>
);
