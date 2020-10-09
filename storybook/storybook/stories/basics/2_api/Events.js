/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { LiveEditor, LiveProvider } from 'react-live';


export const Events = () => (
  <L.Div _article>
    <L.H1 _header>
      Events
    </L.H1>
    <L.Div _block>
      <L.Div _block>
        События в обработчиках имеют стандартную структуру:
        <L.Div _block>
        {/*  component: {*/}
        {/*  props: Object, // props компоненета*/}
        {/*  state?: Object, // state компоненета*/}
        {/*},*/}

          <pre>
            {`
              {
                ...Event, // оригинальное событие, сгенерированное React'ом
                
                // событие расширено объектом component, которое содержит данные из компонента
                component: {
                  isValid?: boolean, // признак валидности компонента, есть только в onBlur
                  name?: string, // имя формы, к которой привязан компонент
                  value: any, // значение компонента
                  ... // другие свойства объекта (см. API компонента)
                }
              }
            `}
          </pre>
        </L.Div>
      </L.Div>
      <L.P>
        События типизированны, типы для них можно получить из типов компонента, например: <i>L.AutoCompleteTypes.ChangeEvent</i>.
      </L.P>
      <L.P>
      </L.P>
      <L.P>
      </L.P>
    </L.Div>
  </L.Div>
);
