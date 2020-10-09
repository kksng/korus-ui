import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';
import {linkTo} from "@storybook/addon-links";

/* eslint-disable react/no-unescaped-entities */
export const Helpers = {
  liveDemo: `
const Helpers = () => {
  
  const handleClick = () => {
    const inn = prompt('Введите валидный ИНН организации');
    if (inn === null) return;

    const isValid = L.validate.innCorp(inn);

    alert(isValid);
  }
  
  return (
    <L.Div _box>
      <L.Button
        onClick={handleClick}
      >
        Валидировать ИНН
      </L.Button>
    </L.Div>
  );
};

render(<Helpers />);
`,
  text: (
    <L.Div _inner>
      <L.P>
        Если вы хотите провалидировать какое-либо произвольное значение, используйте хэлперы <b>L.validate[</b>predefinedValidator<b>]</b>.
      </L.P>
      <L.P>
        В качестве валидатора можно использовать любой валидатор из списка
        {' '}
        <L.A
          onClick={linkTo('Basics|Валидация форм', 'Готовые валидаторы')}
          target="_self"
        >
          готовых валидаторов
        </L.A>
        :
      </L.P>
      <L.Div _block>
        <pre>
          {
            `
              const isValid = L.validate.inn('7811090505');
            `
          }
        </pre>
      </L.Div>
    </L.Div>
  ),
  source: componentSrc,
};
