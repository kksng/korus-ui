import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const FormsHandling = {
  liveDemo: `
const FormsHandling = () => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <L.Input
        value={value}
        onChange={ev => setValue(ev.component.value)}
        form="myAwesomeForm"
        name="imput"
        isRequired
      />
      <br />
      <br />
      <L.Button
        form="myAwesomeForm"
        onClick={ev => console.log('myAwesomeForm has been submitted', ev)}
        onValidationFail={ev => console.log(ev.invalidForms)}
        shouldScrollToInvalidFields
      >
        Click me
      </L.Button>
    </>
  )
};

render(<FormsHandling />);
`,
  text: (
    <L.Div _block>
      <L.H2 _block-header>
        Особенности L.Button.
      </L.H2>
      <L.P>
        Если кнопке не передан атрибут <b>form</b>, кнопка ведёт себя стандартно.
      </L.P>
      <L.P>
        Кнопка с атрибутом <b>form</b> привязана к одной или нескольким формам. При клике происходит валидация и сабмит соответствующих форм.
      </L.P>
      <L.P>
        Подробнее о валидации форм смотрите раздел
        {' '}
        <L.A
          onClick={linkTo('Concept|Валидация', 'Общая информация')}
          target="_self"
        >
          Валидация
        </L.A>.
      </L.P>
      <L.P>
        Если все поля формы прошли валидацию, или она не требуется, срабатывает обработчик <b>onClick</b>.
      </L.P>
      <L.P>
        Если какое-то поле не прошло валидацию, <b>onClick</b> не срабатывает. Вместо onClick будет вызван <b>onValidationFail</b>, в который будет передан массив с именами невалидных форм.
      </L.P>
      <L.P>
        Атрибут <b>shouldScrollToInvalidFields</b> говорит о том, что при клике на кнопку страница будет прокручиваться к невалидным полям.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
