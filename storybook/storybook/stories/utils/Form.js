/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

export const Form = () => (
  <L.Div _article>
    <L.H1 _header>
      L.form
    </L.H1>
    <L.P>
      Метод L.form позволяет совершить действия с формой:
    </L.P>

    <L.Ul _txt-list>
      <li>
        reset - сброс (очистка полей формы);
      </li>
    </L.Ul>
    <L.Ul _txt-list>
      <li>
        validate - валидация;
      </li>
    </L.Ul>
    <L.Ul _txt-list>
      <li>
        get - получить данные;
      </li>
    </L.Ul>
    <L.Ul _txt-list>
      <li>
        remove - удалить поля из механизма валидации.
      </li>
    </L.Ul>

    <L.Section _block>
      <L.H2 _block-header>
        Reset
      </L.H2>
      <p>
        Сброс всей формы
      </p>
      <L.Div _block>
        <pre>
          {`
            L.form('formName').reset()
          `}
        </pre>
      </L.Div>

      <p>
        Сброс одного поля
      </p>
      <L.Div _block>
        <pre>
          {`
            L.form('formName', 'fieldName').reset()
          `}
        </pre>
      </L.Div>

      <p>
        Сброс нескольких полей
      </p>
      <L.Div _block>
        <pre>
          {`
            L.form('formName', ['fieldName1', 'fieldName2']).reset()
          `}
        </pre>
      </L.Div>

    </L.Section>

    <L.Section _block>
      <L.H2 _block-header>
        Validate
      </L.H2>
      <p>
        Программный вызов валидации
      </p>
      <L.Div _block>
        <pre>
          {`
            L.form('formName').validate()
            L.form('formName', 'fieldName').validate()
            L.form('formName', ['fieldName1', 'fieldName2']).validate()
          `}
        </pre>
      </L.Div>

      <p>
        Валидация внешним валидатором, применяется только к одному полю  формы
      </p>
      <L.Div _block>
        <pre>
          {`
            L.form('formName', 'fieldName').validate({
              validator: /^[xyz]$/,
              invalidMessage: 'Разрешены только x, y или z'
            })
          `}
        </pre>
      </L.Div>
    </L.Section>

    <L.Section _block>
      <L.H2 _block-header>
        Get
      </L.H2>
      <p>
        Получение информации о состоянии формы.
      </p>
      <L.Div _block>
        <pre>
          {`
            L.form('formName').get() // => Field[]
            L.form('formName', 'fieldName').get() // => Field
            L.form('formName', ['fieldName1', 'fieldName2']).get() // => Field[]
          `}
        </pre>
      </L.Div>

      <L.Div _block>
        <pre>
          {`
            interface Field {
              name: string,
              isValid: boolean,
              value: any,
              shouldValidateUnmounted: boolean,
              invalidMessages?: string[],
              requiredMessage?: string,
              isRequired: boolean,
            }
          `}
        </pre>
      </L.Div>
    </L.Section>

    <L.Section _block>
      <L.H2 _block-header>
        Remove
      </L.H2>
      <p>
        Удалить форму/поле из механизма валидации.
      </p>
      <L.Div _block>
        <pre>
          {`
            L.form('formName').remove()
            L.form('formName', 'fieldName').remove()
            L.form('formName', ['fieldName1', 'fieldName2']).remove()
          `}
        </pre>
      </L.Div>
    </L.Section>

  </L.Div>
);
