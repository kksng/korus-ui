import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'currentStepProgress',
    type: 'number',
    required: false,
    description: (
      <div>
        <p>
          Процент завершенности текущего шага.
        </p>
      </div>
    ),
  },
  {
    name: 'data',
    type: (
      <L.Span>
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
type StatusItem = {
  [textField]: string,
};          
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>StatusItem</L.Span>
        </L.Tooltip>
        [] | string[]
      </L.Span>
    ),
    required: true,
    description: 'Данные для каждого шага.',
  },
  {
    name: 'iconRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация иконки.',
  },
  {
    name: 'itemRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация всего шага.',
  },
  {
    name: 'labelRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация лейбла для шага.',
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
interface StatusBarItemClickEvent {
  target: {
    item: string | StatusItem,
    index: number,
  },
}            
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.StatusBarTypes.StatusBarItemClickEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик клика',
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
interface StatusBarRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>StatusBarRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента',
  },
  {
    name: 'textField',
    type: 'string',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Имя поля в объекте StatusItem, из которого брать текст для лейбла.
        </L.P>
        <L.P>
          Обязательно, если в <b>data</b> передан массив объектов.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  label:                    'statusbar-label',
  statusIcon:               'statusbar-icon',
  statusItem:               'statusbar-status-item',
  statusItemDanger:         'danger',
  statusItemFirst:          'first',
  statusItemLast:           'last',
  statusItemProgress:       'progress',
  statusItemSuccess:        'success',
  statusLine:               'statusbar-line',
  wrapper:                  'statusbar-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultStatusBarTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
  {
    name: 'typeField',
    type: 'string',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Имя поля в объекте StatusItem, из которого извлекается тип шага.
        </L.P>
        <L.P>
          Работает, если в <b>data</b> передан массив объектов.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'value',
    type: (
      <L.Span>
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
type StatusItem = {
  [textField]: string,
};          
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>StatusItem</L.Span>
        </L.Tooltip>
        {' '}
        | string
      </L.Span>
    ),
    required: false,
    description: (
      <L.Div>
        <L.P>
          Имя поля в объекте StatusItem, из которого брать текст для лейбла.
        </L.P>
        <L.P>
          Обязательно, если в <b>data</b> передан массив объектов.
        </L.P>
      </L.Div>
    ),
  },
];
