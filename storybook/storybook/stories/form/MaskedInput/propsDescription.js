import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'defaultValue',
    type: 'string',
    required: false,
    description: 'Значение по умолчанию для неконтролируемого режима.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|MaskedInput', 'Customization')}
        target="_self"
      >
        inputRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Настройка внешнего вида поля ввода.',
  },
  {
    name: 'hasClearButton',
    type: 'boolean',
    required: false,
    description: 'Наличие кнопки для очистки поля ввода.',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Перевести компонент в состояние disabled',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|MaskedInput|Props', 'mask')}
        target="_self"
      >
        mask
      </L.A>
    ),
    type: 'string',
    required: true,
    description: 'Маска ввода',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Имя поля ввода для использования в формах и валидации',
  },
  {
    name: 'onBlur',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    isValid?: boolean,
    name?: string,
    value: string,
  },
}              
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.MaskedInputTypes.BlurEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события потери фокуса',
  },
  {
    name: 'onChange',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface ChangeEvent {
  component: {
    inputValue: string,
    name?: string,
    value: string,
  },
};          
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.MaskedInputTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: (
      <div>
        <p>Обработчик события изменения значения в поле ввода.</p>
        <p>
          Поле <b>inputValue</b> содержит значение, которое пользователь видит в поле ввода, <b>value</b> содержит значение без маски.
        </p>
        <p>
          <b>Value</b> будет содержать значение только если заполнена вся маска.
        </p>
      </div>
    ),
  },
  {
    name: 'onEnterPress',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    name?: string,
    value: string,
  },
}           
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.MaskedInputTypes.EnterPressEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события нажатия на Enter',
  },
  {
    name: 'onFocus',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    name?: string,
    value: string,
  },
}            
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.MaskedInputTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события фокуса',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: 'Плейсхолдер',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|MaskedInput|Props', 'placeholderChar')}
        target="_self"
      >
        placeholderChar
      </L.A>
    ),
    type: 'string',
    required: false,
    description: 'Символ, маскирующий символ из маски. По умолчанию - "_"',
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
interface MaskedInputRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>MaskedInputRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  closeIcon:                'masked-input-clear-icon',
  input:                    'masked-input-element',
  inputWrapper:             'masked-input-wrapper',
  inputWrapperDisabled:     'disabled',
  inputWrapperFocused:      'focused',
  inputWrapperInvalid:      'danger',
  inputWrapperRequired:     'required',
  wrapper:                  'masked-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultMaskedInputTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
  {
    name: 'value',
    type: 'string | null',
    required: false,
    description: 'Значение в поле ввода',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|MaskedInput', 'Customization')}
        target="_self"
      >
        wrapperRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Настройка внешнего вида контейнера компонента',
  },
];
