import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import {
  form,
  invalidMessage,
  isRequired,
  isValid,
  name,
  requiredMessage,
  shouldValidateUnmounted,
  validator,
  invalidMessageRender,
} from '../../basics/6_validation/propsDescription';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: (
      <L.A
        onClick={linkTo('Form|Input|Props', 'allowedSymbols')}
        target="_self"
      >
        allowedSymbols
      </L.A>
    ),
    type: (
      <L.Span>
        <L.Tooltip
          position="bottom"
          title="'numbers'"
        >
          <L.Span _txt-success>PredefinedSymbols</L.Span>
        </L.Tooltip>
        {' '}
        | RegExp
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Символы, которые можно ввести в поле ввода.
        </p>
        <p>
          Атрибут несовместим с <b>forbiddenSymbols</b> (можно использовать или <b>forbiddenSymbols</b>, или <b>allowedSymbols</b>).
        </p>
      </div>
    ),
  },
  {
    name: 'defaultValue',
    type: 'string',
    required: false,
    description: 'Значение по умолчанию.',
  },
  {
    name: 'forbiddenSymbols',
    type: (
      <L.Span>
        <L.Tooltip
          position="bottom"
          title="'numbers'"
        >
          <L.Span _txt-success>PredefinedSymbols</L.Span>
        </L.Tooltip>
        {' '}
        | RegExp
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Символы, которые нельзя вводить в поле ввода.
        </p>
        <p>
          Атрибут несовместим с <b>allowedSymbols</b> (можно использовать или <b>forbiddenSymbols</b>, или <b>allowedSymbols</b>).
        </p>
      </div>
    ),
  },
  {
    name: 'hasClearButton',
    type: 'boolean',
    required: false,
    description: 'Наличие кнопки для очистки поля ввода.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Input', 'Кастомизация')}
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
    description: 'Кастомизация поля ввода.',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Перевести компонент в неактивное состояние.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Input|Props', 'letterCase')}
        target="_self"
      >
        letterCase
      </L.A>
    ),
    type: "'lower' | 'upper'",
    required: false,
    description: 'При вводе переводит все буквы в верхний или нижний регистр.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Input|Props', 'maxLength')}
        target="_self"
      >
        maxLength
      </L.A>
    ),
    type: 'number',
    required: false,
    description: 'Ограничение на количество символов.',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Имя поля ввода для использования в формах и валидации.',
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
interface FocusEvent<T = any> extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
    isValid?: boolean,
  },
}              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.InputTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события потери фокуса.',
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
interface ChangeEvent = {
  component: {
    value: string,
    name?: string,
  },
};          
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.InputTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик события изменения значения в поле ввода.',
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
interface ChangeEvent = {
  component: {
    value: string,
    name?: string,
  },
};          
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.InputTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик нажатия Enter.',
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
    value: string,
    name?: string,
  },
}              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.InputTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события фокуса.',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: 'Плейсхолдер.',
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
interface InputRefCurrent {
  wrapper: HTMLDivElement | null,
  input: HTMLInputElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>InputRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  closeIcon:                  string,
  icon:                       string,
  iconLeft:                   string,
  iconRight:                  string,
  input:                      string,
  inputWrapper:               string,
  inputWrapperDisabled:       string,
  inputWrapperFocused:        string,
  inputWrapperInvalid:        string,
  prefix:                     string,
  suffix:                     string,
  wrapper:                    string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultInputTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'value',
    type: 'string',
    required: false,
    description: 'Значение в поле ввода.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Input', 'Кастомизация')}
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
    description: 'Кастомизация контейнера компонента.',
  },
];

export const validationPropsDesc = [
  isRequired,
  form,
  invalidMessage,
  isValid,
  name,
  requiredMessage,
  shouldValidateUnmounted,
  invalidMessageRender,
  validator,
];
