import React from 'react';
import * as L from '@korus/leda';
import { LiveEditor, LiveProvider } from 'react-live';
import { editorTheme } from '../../../themes';

const creatingCallbackRef = `
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // Устанавливаем фокус на текстовом поле ввода с помощью чистого DOM API
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // устанавливаем фокус на input при монтировании
    this.focusTextInput();
  }

  render() {
    // Используем колбэк в \`ref\`, чтобы сохранить ссылку на DOM-элемент
    // поля текстового ввода в поле экземпляра (например, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
`;

const creatingPropRef = `
const CustomTextInput = (props) => {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
};

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}
`;

export const CallbackRefs = () => (
  <L.Div _refs-wrapper _inner _box>
    <L.H1 _title>Колбэк-рефы</L.H1>
    <br />
    <L.P>
      <L.Span _colored>React</L.Span> также поддерживает другой способ определения рефов,
      который называется «колбэк-рефы» и предоставляет более полный контроль над их присвоением и сбросом.
    </L.P>
    <br />
    <L.P>
      Вместо того, чтобы передавать атрибут <L.Span _colored>ref</L.Span> созданный с помощью <L.Span _colored>createRef()</L.Span>,
      вы можете передать функцию. Данная функция получит экземпляр React-компонента
      или HTML DOM-элемент в качестве аргумента, которые потом могут быть сохранены или доступны в любом другом месте.
      В случае с компонентами библиотеки <L.Span _colored>Korus-ui</L.Span> функция получит объект с DOM-элементами.
    </L.P>
    <br />
    <L.P>
      Представленный ниже пример реализует общий паттерн: использование колбэка в <L.Span _colored>ref</L.Span> для
      хранения ссылки на DOM-узел в свойстве экземпляра.
    </L.P>
    <L.Div _live-style>
      <LiveProvider code={creatingCallbackRef} theme={editorTheme} disabled>
        <L.Div _editor>
          <LiveEditor />
        </L.Div>
      </LiveProvider>
    </L.Div>
    <br />
    <L.P>
      React вызовет <L.Span _colored>ref</L.Span> колбэк с DOM-элементом при монтировании компонента,
      а также вызовет его со значением <L.Span _colored>null</L.Span> при размонтировании. Рефы будут хранить
      актуальное значение перед вызовом методов <L.Span _colored>componentDidMount</L.Span> или <L.Span _colored>componentDidUpdate</L.Span>.
    </L.P>
    <br />
    <L.P>
      Вы можете передавать колбэк-рефы между компонентами точно так же,
      как и объектные рефы, созданные через <L.Span _colored>React.createRef()</L.Span>.
    </L.P>
    <L.Div _live-style>
      <LiveProvider code={creatingPropRef} theme={editorTheme} disabled>
        <L.Div _editor>
          <LiveEditor />
        </L.Div>
      </LiveProvider>
    </L.Div>
    <br />
    <L.P>
      В представленном выше примере, <L.Span _colored>Parent</L.Span> передаёт свой колбэк-реф как
      проп <L.Span _colored>inputRef</L.Span> компоненту <L.Span _colored>CustomTextInput</L.Span>,
      а <L.Span _colored>CustomTextInput</L.Span> передаёт ту же самую функцию как
      специальный атрибут <L.Span _colored>ref</L.Span> элементу <L.Span _colored>&lt;input&gt;</L.Span>.
      В итоге свойство <L.Span _colored>this.inputElement</L.Span> компонента <L.Span _colored>Parent</L.Span> будет
      хранить значение DOM-узла, соответствующего элементу <L.Span _colored>&lt;input&gt;</L.Span> в <L.Span _colored>CustomTextInput</L.Span>.
    </L.P>
    <br />
    <L.H3 _txtGray>Предостережения насчёт колбэк-рефов</L.H3>
    <br />
    <L.P>
      Если <L.Span _colored>ref</L.Span> колбэк определён как встроенная функция, колбэк будет вызван дважды во
      время обновлений: первый раз со значением <L.Span _colored>null</L.Span>, а затем снова с DOM-элементом.
      Это связано с тем, что с каждым рендером создаётся новый экземпляр функции, поэтому <L.Span _colored>React</L.Span> должен
      очистить старый реф и задать новый. Такого поведения можно избежать, если колбэк в <L.Span _colored>ref</L.Span> будет
      определён с привязанным к классу контекстом, но, заметим, что это не будет играть роли в большинстве случаев.
    </L.P>
  </L.Div>
);
