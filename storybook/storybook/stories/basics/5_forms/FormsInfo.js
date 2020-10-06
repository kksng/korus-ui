/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

export const FormsInfo = () => (
  <L.Div _article>
    <L.H1 _header>
      Информация о состоянии формы
    </L.H1>

    <pre>
      {`
        <L.Input
          form="myForm"
          name="email"
          onChange={ev => {
            const { component: { isValid, form, value } } = ev;
            console.log(isValid);
            console.log(form);
            console.log(value);
          }}
        />

        <L.Button
          form="myForm"
          onClick={// ...}
        >
          Click me
        </L.Button>
      `}
    </pre>
  </L.Div>
);
