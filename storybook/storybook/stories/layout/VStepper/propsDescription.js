import * as React from 'react';
import * as L from '@korus/leda';
import { RenderEvent } from '../../../propsHelpers';

export const propsDesc = [
  {
    name: 'bodyRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация содержимого компонента',
  },
  {
    name: 'children',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Содержимое шага',
  },
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Классы для компонента',
  },
  {
    name: 'contentRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация содержимого шага',
  },
  {
    name: 'footerContent',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Содержимое футера шага',
  },
  {
    name: 'hasSignIcon',
    type: 'boolean',
    required: false,
    description:
      'Вместо цифры используется галка или крестик (в зависимости от статуса)',
  },
  {
    name: 'headingRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация заголовка',
  },
  {
    name: 'iconRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация иконки',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Отключение шага',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: false,
    description: 'Состояние шага - открыт/закрыт',
  },
  {
    name: 'item',
    type: (
      <L.Span>
        <L.Tooltip
          title={
            <pre>
              {`
{[x: string]: any}
      `}
            </pre>
          }
        >
          <L.Span _txt-success>SomeObject</L.Span>
        </L.Tooltip>
      </L.Span>
    ),
    required: false,
    description: 'Объект с данными шага',
  },
  {
    name: 'nextStepType',
    type: (
      <L.Span>
        <L.Tooltip
          title={
            <pre>
              {`
        {
          DANGER: 'danger',
          PROGRESS: 'progress',
          SUCCESS: 'success',
          WARNING: 'warning',
        }
        `}
            </pre>
          }
        >
          <L.Span _txt-success>StepTypes</L.Span>
        </L.Tooltip>
      </L.Span>
    ),
    required: false,
    description:
      'Тип следующего шага (по-умолчанию принимаются типы "success, progress, danger, warning"',
  },
  {
    name: 'onClick',
    type: '(event: React.MouseEvent) => void',
    required: false,
    description: 'Обработчик клика по заголовку',
  },
  {
    name: 'statusRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация статуса',
  },
  {
    name: 'statusText',
    type: 'string',
    required: false,
    description: 'Текст статуса, используется если не передан item',
  },
  {
    name: 'statusTextField',
    type: 'string',
    required: false,
    description: 'Поле из item с текстом для статуса шага',
  },
  {
    name: 'titleText',
    type: 'string',
    required: false,
    description: 'Текст заголовка, используется если не передан item ',
  },
  {
    name: 'titleTextField',
    type: 'string',
    required: false,
    description: 'Поле из item с заголовком шага',
  },
  {
    name: 'typeField',
    type: (
      <L.Span>
        <L.Tooltip
          title={
            <pre>
              {`
        {
          DANGER: 'danger',
          PROGRESS: 'progress',
          SUCCESS: 'success',
          WARNING: 'warning',
        }
        `}
            </pre>
          }
        >
          <L.Span _txt-success>StepTypes</L.Span>
        </L.Tooltip>
      </L.Span>
    ),
    required: false,
    description:
      'Поле из item с типом текущего шага (по-умолчанию принимаются типы "success, progress, danger, warning"',
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация враппера шага',
  },
];
