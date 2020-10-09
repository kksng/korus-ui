import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const States = {
  liveDemo: `
const States = () => {
  return (
    <>
      <L.Button
        onClick={ev => console.log('You clicked!')}
      >
        <L.I _icon20 _star /> Click me
      </L.Button>
      {' '}
      <L.Button
        _success
        onClick={ev => console.log('You have won!')}
      >
        Let's win!
      </L.Button>
      {' '}
      <L.Button
        _warning
        onClick={ev => console.log('You clicked carefully')}
      >
        Click me carefully
      </L.Button>
      {' '}
      <L.Button
        _danger
        onClick={ev => console.log('You did it hard')}
      >
        Click me harder!
      </L.Button>
      {' '}
      <L.Button
        isDisabled
        onClick={ev => console.log('Disabled button has been clicked')}
      >
        Do not click me
      </L.Button>
      {' '}
      <L.Button
        isLoading
        onClick={ev => console.log('Loading button has been clicked')}
      >
        Still waiting
      </L.Button>
      {' '}
      <L.Button
        _danger
        _item
      >
        Удалить
        <L.Span
          _count
        >
          8
        </L.Span>
      </L.Button>
    </>
  )
};

render(<States />);
`,
  text: (
    <L.Div>
      <L.H2>
        Кнопка в различных состояниях
      </L.H2>
      <L.P>
        Атрибуты <b>isLoading</b> и <b>isDisabled</b> отключают onClick по кнопке и добавляют соответствующий класс.
      </L.P>
      <L.P>
        Для изменения цвета кнопки добавьте <b>_success</b>, <b>_warning</b>, <b>_danger</b>, или любые собственные классы (см Вёрстка).
      </L.P>
      <L.P>

      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
