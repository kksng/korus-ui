import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const radioGroupPropsDesc = [
  {
    name: (
      <L.A
        onClick={linkTo('Form|Radio', 'Basic Usage')}
        target="_self"
      >
        children
      </L.A>
    ),
    type: 'L.RadioButton',
    required: true,
    description: 'В качестве дочерних компонентов принимает L.RadioButton - radio-кнопки с текстом.',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Отключение всей группы.',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Имя поля ввода для использования в формах и валидации.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Radio', 'Basic Usage')}
        target="_self"
      >
        onChange
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
interface ChangeEvent extends React.ChangeEvent {
  component: {
    value: string | number,
    name?: string,
  },
}        
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.RadioTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик изменения значения.',
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
interface RadioGroupRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>RadioGroupRefCurrent</L.Span>
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
  input:                   string,
  item:                    string,
  label:                   string,
  wrapper:                 string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultRadioTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Radio', 'Basic Usage')}
        target="_self"
      >
        value
      </L.A>
    ),
    type: 'string | number',
    required: false,
    description: 'Значение RadioGroup.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Radio', 'Customization')}
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
    description: 'Кастомизация враппера radio-кнопок.',
  },
];

export const radioButtonPropsDesc = [
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'Id radio-кнопки.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Radio', 'States')}
        target="_self"
      >
        isDisabled
      </L.A>
    ),
    type: 'L.RadioButton',
    required: false,
    description: 'Перевод кнопки в неактивный режим.',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Имя radio-кнопки.',
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
interface RadioGroupRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>RadioGroupRefCurrent</L.Span>
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
  input:                   string,
  item:                    string,
  label:                   string,
  wrapper:                 string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultRadioTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Radio', 'Basic Usage')}
        target="_self"
      >
        value
      </L.A>
    ),
    type: 'string | number',
    required: true,
    description: 'Значение, которое будет передано в onChange RadioGroup.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Radio', 'Customization')}
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
    description: 'Кастомизация враппера radio-кнопки.',
  },
];
