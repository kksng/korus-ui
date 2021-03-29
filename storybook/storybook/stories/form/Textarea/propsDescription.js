import * as React from 'react';
import * as L from '@korus/leda';
import { RenderEvent } from '../../../propsHelpers';
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

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'defaultValue',
    type: 'string',
    required: false,
    description: 'Значение по умолчанию.',
  },
  {
    name: 'isDisabled',
    type: 'number',
    required: false,
    description: 'Перевести компонент в неактивный режим.',
  },
  {
    name: 'maxLength',
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
interface BlurEvent extends React.FocusEvent<HTMLTextAreaElement> {
  component: {
    value: string,
    name?: string,
    isValid?: boolean,
  },
}             
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.TextareaTypes.BlurEvent</L.Span>
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
type ChangeEvent = {
  component: {
    value: string,
    name?: string,
  },
};          
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.TextareTypes.ChangeEvent</L.Span>
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
interface EnterPressEvent extends React.KeyboardEvent<HTMLTextAreaElement> {
  component: {
    value: string,
    name?: string,
  },
}      
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.TextareaTypes.EnterPressEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события нажатия на Enter.',
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
interface FocusEvent extends React.FocusEvent<HTMLTextAreaElement> {
  component: {
    value: string,
    name?: string,
  },
}         
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.TextareaTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события потери фокуса.',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: 'Плейсхолдер.',
  },
  {
    name: 'shouldAutoResize',
    type: 'boolean',
    required: false,
    description: 'Автоматическая регулировка высоты компонента при вводе текста во избежание прокрутки. Перезаписывает встроенный стиль CSS-свойств "overflow-y" и "height".'
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  input:                string,
  wrapper:              string,
  inputFocused:         string,
  inputDisabled:        string,
  inputInvalid:         string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultTextareaTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
  {
    name: 'value',
    type: 'string',
    required: false,
    description: 'Значение в поле ввода.',
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация враппера.',
  },
];

export const validationPropsDesc = [
  form,
  invalidMessage,
  invalidMessageRender,
  isRequired,
  isValid,
  name,
  requiredMessage,
  shouldValidateUnmounted,
  validator,
]; 
