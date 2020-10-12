import * as React from 'react';
import * as L from '@korus/leda';

/* eslint-disable react/no-unescaped-entities */
export const Customization = {
  liveDemo: `
const Customization = () => {
  const textField = 'name';
  const [value, setValue] = React.useState(null);


  const handleChange = ev => setValue(ev.component.value);

  return (
    <L.NumericTextBox
      format="#.# ₽"
      name="numer"
      max={200}
      min={0}
      step={1}
      invalidMessage="Число не должно быть отрицательным!"
      requiredMessage="Обязательное поле!"
      thousandsSeparator=","
      value={value}
      onChange={ev => {
        setValue(ev.component.value);
        console.log('ev.component.value', ev.component.value);
      }}
      form="foobar"
      isRequired
      placeholder="Gimme ur number!"
      inputRender={({ Element, elementProps }) => <>от<Element {...elementProps} /> $</>}
      _width-30
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
          <b>arrowButtonsRender</b> - стрелочки нумерика<br />
          Для того, чтобы убрать стрелочки, передайте <b>() => null</b>
        </L.Li>
        <L.Li>
          <b>inputRender</b> - поле ввода
        </L.Li>
        <L.Li>
          <b>wrapperRender</b> - корневой элемент, в который вложены все остальные<br />
        </L.Li>
      </L.Ul>
    </L.Div>
  ),
};
