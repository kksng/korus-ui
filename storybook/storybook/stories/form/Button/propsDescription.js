import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: (
      <L.A
        onClick={linkTo('Form|Button', 'Обработка форм')}
        target="_self"
      >
        form
      </L.A>
    ),
    type: 'string | Array<string>',
    required: false,
    description: (
      <span>
        Имя формы, которую сабмитит и валидирует кнопка. Кнопка может обрабатывать несколько форм, для этого передайте имена форм в массиве.
      </span>
    ),
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Button', 'Состояния кнопки')}
        target="_self"
      >
        isDisabled
      </L.A>
    ),
    type: 'boolean',
    required: false,
    description: 'Перевести компонент в состояние disabled',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Button', 'Состояния кнопки')}
        target="_self"
      >
        isLoading
      </L.A>
    ),

    type: 'boolean',
    required: false,
    description: 'Перевести компонент в состояние loading. Клики по кнопке не будут обрабатываться',
  },
  {
    name: 'onClick',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface SubmitEvent extends React.MouseEvent<HTMLButtonElement> {
  form?: FormsObject,
  forms?: Form[],
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.ButtonTypes.SubmitEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Клик по кнопке сабмитит привязанную к ней форму.
        </p>
        <p>
          Если все привязанные к ней формы валидны, в событии придут данные полей форм.
        </p>
        <p>
          Обработчик клика не срабатывает, если хотя бы одно поле в привязанных формах невалидно.
        </p>
      </div>
    ),
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Button', 'Обработка форм')}
        target="_self"
      >
        onValidationFail
      </L.A>
    ),
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
type ValidationFailEvent =
  React.MouseEvent<HTMLButtonElement>
  & { invalidForms: Form[] }
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>ValidationFailEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Если в привязанных к кнопке формах есть невалидные поля, то <b>onClick</b> не сработает.
        </p>
        <p>
          Вместо этого сработает <b>onValidationFail</b>, в событии которого будет содержаться информация о невалидных полях.
        </p>
      </div>
    ),
  },
  {
    name: 'ref',
    type: (
      <L.Span>
        {'React.Ref<'}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {
                `
interface ButtonRefCurrent {
  wrapper: HTMLButtonElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>ButtonRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента',
  },
  {
    name: 'scrollDelay',
    type: 'number',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Задержка перед скроллом к невалидным полям, ms (работает вместе с <b>shouldScrollToInvalidFields</b>).
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'scrollOffset',
    type: 'number',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Дополнительный сдвиг в px при скролинге к кнопке (работает вместе с <b>shouldScrollToInvalidFields</b>).
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'shouldRender',
    type: 'boolean',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Должен ли рендериться компонент.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Button', 'Обработка форм')}
        target="_self"
      >
        shouldScrollToInvalidFields
      </L.A>
    ),
    type: 'boolean',
    required: false,
    description: (
      <span>
        Включает прокрутку к невалидным полям при нажатии на кнопку.
      </span>
    ),
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  disabled:         string,
  loading:          string,
  wrapper:          string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultButtonTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'type',
    type: (
      <L.Tooltip
        title={
          <pre>
            {`
{
  button,
  submit,
  reset, 
}
        `}
          </pre>
        }
      >
        <L.Span _txt-success>ButtonHTMLAttributes</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: (
      <L.Div>
        <L.P>
          Тип кнопки. Обычная, кнопка для отправки данных формы на сервер,
          кнопка для очистки введенных данных формы и возвращения значений в
          первоначальное состояние.{' '}
        </L.P>
      </L.Div>
    ),
  },
];
