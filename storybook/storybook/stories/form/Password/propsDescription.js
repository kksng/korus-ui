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
    description: 'Символы, которые можно ввести в поле ввода',
  },
  {
    name: 'defaultValue',
    type: 'string',
    required: false,
    description: 'Значение по умолчанию',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Input|Props', 'forbiddenSymbols')}
        target="_self"
      >
        forbiddenSymbols
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
    description: 'Символы, которые нельзя вводить в поле ввода',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Input|Props', 'hasClearButton')}
        target="_self"
      >
        hasClearButton
      </L.A>
    ),
    type: 'boolean',
    required: false,
    description: 'Наличие кнопки для очистки поля ввода',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Password', 'Кастомизация')}
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
    description: 'Кастомизация поля ввода',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Перевести компонент в неактивное состояние',
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
    description: 'При вводе переводит все буквы в верхний или нижний регистр',
  },
  {
    name: 'maxLength',
    type: 'number',
    required: false,
    description: 'Ограничение на количество символов',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Password', 'Оценки сложности пароля')}
        target="_self"
      >
        minPasswordEvaluationLength
      </L.A>
    ),
    type: 'number',
    required: false,
    description: (
      <div>
        <p>
          Минимальная длина пароля, с которой начинается оценка его сложности. По умолчанию - 4.
        </p>
        <p>
          Если длина пароля меньше заданного количества символов, пользователь видит подсказку с правилами для пароля.
          Если равна или больше - сообщение с оценкой сложности пароля для каждого из <b>passwordEvaluators</b>.
        </p>
      </div>
    ),
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
          <L.Span _txt-success>L.PasswordTypes.FocusEvent</L.Span>
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
    value: string,
    name?: string,
  },}        
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.PasswordTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик события изменения значения в поле ввода',
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
    name?: string,
    value: string,
  },
}          
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>EnterPressEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
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
          <L.Span _txt-success>L.PasswordTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события потери фокуса',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Password', 'Оценки сложности пароля')}
        target="_self"
      >
        passwordEvaluators
      </L.A>
    ),
    type: (
      <L.Span>
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {
                `
interface PasswordEvaluator {
  evaluator: RegExp | ((password: any) => boolean),
  evaluationMessage: string,
  strengthLevel: 'low' | 'medium' | 'strong',
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>PasswordEvaluator</L.Span>
        </L.Tooltip>
        {'[]'}
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Правила для оценки сложности пароля.
        </p>
        <p>
          Всего предусмотрено три уровня <i>strengthLevel</i>: <i>strong</i>, <i>medium</i>, <i>low</i>.
          Используйте все три или столько, сколько считаете необходимым.
        </p>
        <p>
          Пароль сначала оценивается правилами (<i>evaluator</i>) самого сложного уровня (<i>strengthLevel</i>).
          Если пароль не удовлетворяет правилам, он оценивается по следующим уровням в порядке убывания.
          Если пароль подходит под требования уровня, выводится соотвествующее сообщение (<i>evaluationMessage</i>).
        </p>
        <p>
          Если не задать <b>passwordEvaluators</b>, проверка пароля будет производиться по встроенным правилам:
          надёжным паролем будет считаться пароль длиной не менее 8-ми символов, который содержит строчные и прописные латинские буквы и цифры.
        </p>
      </div>
    ),
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Password', 'Оценки сложности пароля')}
        target="_self"
      >
        passwordRules
      </L.A>
    ),
    type: 'string',
    required: false,
    description: (
      <div>
        <p>
          Сообщение под полем ввода с правилами для пароля.
        </p>
        <p>
          Сообщение отображается, пока пароль не достигнет длины <b>minPasswordEvaluationLength</b>.
          После этого сообщение сменится на сообщение с оценкой надёжности пароля из <b>passwordEvaluators</b>.
        </p>
      </div>
    ),
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Password', 'Кастомизация')}
        target="_self"
      >
        passwordVisibilityRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация иконки видимости пароля'
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: 'Плейсхолдер',
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
interface PasswordRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>PasswordRefCurrent</L.Span>
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
  closeIcon:             string,
  icon:                  string,
  iconLeft:              string,
  iconRight:             string,
  input:                 string,
  inputWrapper:          string,
  inputWrapperDisabled:  string,
  inputWrapperFocused:   string,
  inputWrapperInvalid:   string,
  messageDefault:        string,
  messageWeak:           string,
  messageMedium:         string,
  messageStrong:         string,
  prefix:                string,
  suffix:                string,
  isHiddenIcon:          string,
  isVisibleIcon:         string,
  wrapper:               string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultAutoCompleteTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
  {
    name: 'value',
    type: 'string',
    required: false,
    description: 'Значение в поле ввода',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Password', 'Кастомизация')}
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
    description: 'Настройка контейнера компонента',
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
