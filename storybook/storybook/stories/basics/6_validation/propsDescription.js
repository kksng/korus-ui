import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

/* eslint-disable max-len, react/no-unescaped-entities */
export const isRequired = {
  name: (
    <L.A
      onClick={linkTo('Basics|Валидация форм.Props', 'isRequired')}
      target="_self"
    >
      isRequired
    </L.A>
  ),
  type: 'boolean',
  required: false,
  description: 'Обязательное поле или нет.',
};

export const form = {
  name: (
    <L.A
      onClick={linkTo('Basics|Валидация форм.Props', 'form, name')}
      target="_self"
    >
      form
    </L.A>
  ),
  type: 'string',
  required: true,
  description: 'Имя формы. Обязательно для привязки компонента к форме и корректной работы валидации. Каждая новая форма должна иметь уникальное имя.',
};

export const invalidMessage = {
  name: (
    <L.A
      onClick={linkTo('Basics|Валидация форм.Props', 'invalidMessage')}
      target="_self"
    >
      invalidMessage
    </L.A>
  ),
  type: 'string',
  required: false,
  description: 'Сообщение, которое нужно показывать, если валидация поля не прошла. Не используется, если в validator передан массив валидаторов.',
};

export const isValid = {
  name: (
    <L.A
      onClick={linkTo('Basics|Валидация форм.Props', 'isValid')}
      target="_self"
    >
      isValid
    </L.A>
  ),
  type: 'boolean',
  required: false,
  description: 'Атрибут для задания валидности извне.',
};

export const name = {
  name: (
    <L.A
      onClick={linkTo('Basics|Валидация форм.Props', 'form, name')}
      target="_self"
    >
      name
    </L.A>
  ),
  type: 'string',
  required: true,
  description: (
    <L.Span>
      Имя компонента в форме. Обязательно, если передан атрибут <b>form</b>. Должно быть уникальным в пределах формы.
    </L.Span>
  ),
};

export const requiredMessage = {
  name: (
    <L.A
      onClick={linkTo('Basics|Валидация форм.Props', 'requiredMessage')}
      target="_self"
    >
      requiredMessage
    </L.A>
  ),
  type: 'string',
  required: false,
  description: 'Сообщение при валидации пустого поля, по умолчанию пусто.',
};

export const shouldValidateUnmounted = {
  name: (
    <L.A
      onClick={linkTo('Basics|Валидация форм.Props', 'shouldValidateUnmounted')}
      target="_self"
    >
      shouldValidateUnmounted
    </L.A>
  ),
  type: 'boolean',
  required: false,
  description: 'Поле должно валидироваться даже в состоянии unmounted.',
};

export const invalidMessageRender = {
  name: (
    <L.A
      onClick={linkTo('Basics|Валидация форм.Props', 'invalidMessageRender')}
      target="_self"
    >
      invalidMessageRender
    </L.A>
  ),
  type: (
    <L.Span>
      <L.Tooltip
        position="bottom"
        title={(
          <pre>
            {`
{
  elementProps: {
    message: string | Array<string>
  },
  Element: React.Node,
  componentProps: Object,
  componentState: Object,
}
            `}
          </pre>
        )}
      >
        <L.Span _txt-success>RenderEvent</L.Span>
      </L.Tooltip>
      {' '}
      => React.Node
    </L.Span>
  ),
  required: false,
  description: 'Настройка внешнего вида сообщения об ошибке валидации.',
};

export const validator = {
  name: (
    <L.A
      onClick={linkTo('Basics|Валидация форм.Props', 'validator')}
      target="_self"
    >
      validator
    </L.A>
  ),
  type: (
    <L.Span>
      <L.Tooltip
        position="bottom"
        title={(
          <pre>
            {`
interface ValidatorObject {
  validator: (value: any): boolean | RegExp | PredefinedValidator,
  invalidMessage?: string,
};

type Validator =
  | (value: any): boolean
  | RegExp
  | PredefinedValidator
  | ValidatorObject[]
            `}
          </pre>
        )}
      >
        <L.Span _txt-success>Validator</L.Span>
      </L.Tooltip>
    </L.Span>
  ),
  required: false,
  description: 'Валидатор значения компонента (регулярное выражение, функция, строка с названием готового валидатора или список валидаторов в массиве).',
};


export const elementsPropsDesc = [
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

export const buttonsPropsDesc = [
  {
    name: (
      <L.A
        onClick={linkTo('Basics|Валидация форм.Props', 'form, name')}
        target="_self"
      >
        form
      </L.A>
    ),
    type: 'string | Array<string>',
    required: true,
    description: 'Имя/имена форм, к которым привязана кнопка.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Basics|Валидация форм', 'ккк')}
        target="_self"
      >
        onClick
      </L.A>
    ),
    type: (
      <L.Span>
        (event:&nbsp;
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface SubmitEvent extends React.MouseEvent<HTMLButtonElement> {
  form?: {
    [formName: string]: {
      [fieldName: string]: Field,
    },
  },
}              `}
            </pre>
          )}
        >
          <L.Span _txt-success>SubmitEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: (
      <>
        <p>
          Обработчик клика, который срабатывает, если все поля в привязанных формах прошли валидацию.
        </p>
        <p>
          Событие обработчика содержит поле <i>form</i>, которое содержит данные формы.
        </p>
      </>
    ),
  },
  {
    name: (
      <L.A
        onClick={linkTo('Basics|Валидация форм.Props', 'onValidationFail')}
        target="_self"
      >
        onValidationFail
      </L.A>
    ),
    type: (
      <L.Span>
        (ev: React.MouseEvent&lt;HTMLButtonElement&gt; & &#123; invalidForms:&nbsp;
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface Form {
  name: string,
  fields: Field[],
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>Form</L.Span>
        </L.Tooltip>
        [] &#125;) => void
      </L.Span>
    ),
    required: false,
    description: `
      Обработчик сабмита формы, который срабатывает, если в форме есть невалидные поля.
      Если срабатывает onValidationFail, то onClick на кнопке не сработает.
    `,
  },
  {
    name: (
      <L.A
        onClick={linkTo('Basics|Валидация форм.Props', 'shouldScrollToInvalidFields')}
        target="_self"
      >
        shouldScrollToInvalidFields
      </L.A>
    ),
    type: 'boolean',
    required: false,
    description: 'Прокрутка к невалидным полям при нажатии на кнопку.',
  },
];
