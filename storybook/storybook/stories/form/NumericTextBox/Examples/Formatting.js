import * as React from 'react';
import * as L from '@korus/leda';

/* eslint-disable react/no-unescaped-entities */
export const Formatting = {
  liveDemo: `
const Formatting = () => {
  const textField = 'name';
  const [value, setValue] = React.useState(null);


  const handleChange = ev => setValue(ev.component.value);

  return (
    <L.Div>
      <p>Числовой формат</p>
      <L.NumericTextBox defaultValue={1234.5678} format="#.##" _width-30 />
      <br />
      <br />
      <p>Денежный формат</p>
      <L.NumericTextBox defaultValue={1234.5678} format="#.## ₽" _width-30 />
      <br />
      <br />
      <p>Процентный формат</p>
      <L.NumericTextBox defaultValue={0.5678} format="#.## %" _width-30 />
    </L.Div>
  );
};

render(<Formatting />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Форматирования - одна из <b>важнейших</b> возможностей данного компонента. Чтобы задать формат, используйте атрибут <b>format</b><br />
        Важные моменты при задании формата:
      </L.P>
      <L.Ul _txt-list>
        <L.Li>
          Формат состоит из двух частей - число и его окружение, например, единицы измерения
        </L.Li>
        <L.Li>
          Число указывается с помощью символа <i>"#"</i>, например <i>"#.##"</i> - это число с двумя знаками после запятой
        </L.Li>
        <L.Li>
          В качестве разделителя может быть точка или запятая, <i>"#,##"</i> - тоже <b>валидный</b> формат<br />
          <b>Обратите внимание!</b> Разделитель числа не может совпадать с разделителем разрядов (<i>thousandsSeparator</i>)!
        </L.Li>
        <L.Li>
          Вы <b>можете</b> указывать точность числа с помощью количества знаков "#" после разделителя.
          Однако формат не поддерживает указание количества цифр в <b>целой части числа!</b>
          {' '}
          <i>"###.#"</i> - <b>не является валидным</b> форматом!
        </L.Li>
        <L.Li>
          Любые подстроки <b>до</b> числа и <b>после</b> него будут сохранены.<br />
          Формат <i>"ОТ #.## %"</i> примененный к числу <i>14.2856</i> выдаст результат: <i>ОТ 14.28 %</i>
        </L.Li>
      </L.Ul>
    </L.Div>
  ),
};
