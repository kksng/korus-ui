import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'actionButtonRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация кнопки внутри оповещения, по умолчанию не отображается.',
  },
  {
    name: 'contentRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация сообщения внутри оповещения.',
  },
  {
    name: 'iconRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация блока с иконкой.',
  },
  {
    name: 'maxItems',
    type: 'number',
    required: false,
    description: 'Максимальное количество оповещений на экране, по-умолчанию 3.',
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
    value: Item[],
    name?: string,
    method: 'delay' | 'close-icon-click',
  },
}   
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.Notifications.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик изменения, срабатывает при клике по крестику или по таймауту.',
  },
  {
    name: 'ref',
    type: (
      <>
        {'React.Ref<'}
        <L.Tooltip
          title={(
            <pre>
              {`
{ wrapper: HTMLElement | null }
            `}
            </pre>
          )}
        >
          <L.Span _txt-success>NotificationRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </>
    ),
    required: false,
    description: 'Ссылка на DOM-элементы компонента.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip
        title={(
          <pre>{`
{
  notificationCloseIcon:        'notifications-icon-close',
  notificationContent:          'notifications-content',
  notificationIcon:             'notifications-icon',
  notificationWrapper:          'notifications-item',
  wrapper:                      'notifications-wrapper',
}
            `}
          </pre>
        )}
      >
        <L.Span _txt-success>DefaultNotificationsTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'value',
    type: (
      <L.Tooltip
        title={(
          <pre>{`
{
  text: string,
  delay?: number,
  id: string | number,
  className?: string,
  iconClassName?: string,
}
            `}
          </pre>
        )}
      >
        <L.Span _txt-success>Item</L.Span>[]
      </L.Tooltip>
    ),
    required: true,
    description: 'Видимые уведомления.',
  },
];

export const itemDesc = [
  {
    name: 'actionButtonRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация кнопки внутри оповещения, по умолчанию не отображается.',
  },
  {
    name: 'contentRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация сообщения внутри оповещения.',
  },
  {
    name: 'iconRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация блока с иконкой.',
  },
  {
    name: 'item',
    type: (
      <L.Span>
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {
                `
{
  // текст, можно использовать html
  text: string,
  // по умолчанию 5000 мс. чтобы уведомление не закрывалось по timeout - передайте 0
  delay?: number,
  id: string | number,
  className?: string,
  iconClassName?: string,
  // можно передать любые дополнительные данные
  [x: string]: unknown,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>Item</L.Span>
        </L.Tooltip>
      </L.Span>
    ),
    required: true,
    description: 'Время жизни сообщения в миллисекундах. По умолчанию - 5000 (5 сек.). Если передан 0, то сообщение будет отображаться до тех пор, пока пользователь не закроет его самостоятельно.',
  },
  {
    name: 'onChange',
    type: (
      <L.Span>(item:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface Item {
  text: string,
  delay?: number,
  id: string | number,
  className?: string,
  iconClassName?: string,
}   
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>Item</L.Span>
        </L.Tooltip>
        , method:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
'delay' | 'close-icon-click' 
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>ChangeMethods</L.Span>
        </L.Tooltip>

        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик изменения, срабатывает при клике по крестику или по таймауту.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip
        title={(
          <pre>{`
{
  notificationCloseIcon:        'notifications-icon-close',
  notificationContent:          'notifications-content',
  notificationIcon:             'notifications-icon',
  notificationWrapper:          'notifications-item',
  wrapper:                      'notifications-wrapper',
}
            `}
          </pre>
        )}
      >
        <L.Span _txt-success>DefaultNotificationsTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
];
