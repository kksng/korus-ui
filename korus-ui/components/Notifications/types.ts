import * as React from 'react';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender } from '../../commonTypes';
import { DivProps } from '../Div';
import { ChangeMethods } from './constants';

export interface Item {
  // можно передать любые дополнительные данные
  [x: string]: unknown,
  className?: string,
  // по умолчанию 5000 мс, чтобы уведомление не закрывалось по timeout - передайте 0
  delay?: number,
  iconClassName?: string,
  id: string | number,
  // текст, можно использовать html
  text: string,
}

// todo: extend ChangeEvent
export interface ChangeEvent {
  component: {
    /** Pass removed item on delete */
    currentItem?: Item,
    method: ChangeMethods,
    name?: string,
    value: Item[],
  },
}

export interface NotificationItemProps {
  /** Кастомизация кнопки внутри оповещения, по-умолчанию не отображается */
  actionButtonRender?: CustomRender<NotificationItemProps, {}, React.PropsWithChildren<{}>>,
  /** Сообщение внутри оповещения. Принимается функция. */
  contentRender?: CustomRender<NotificationItemProps, {}, DivProps>,
  /** Кастомизация иконки */
  iconRender?: CustomRender<NotificationItemProps, {}, DivProps>,
  /** Объект с уведомлением */
  item: Item,
  /** Обработчик изменения, срабатывает при клике по крестику или по таймауту */
  onChange: (item: Item, method: ChangeMethods) => void,
  /** Тема компонента */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.notifications],
}

export interface NotificationsProps {
  /** Классы, переданные через _ */
  [x: string]: unknown,
  /** Кастомизация кнопки внутри оповещения, по-умолчанию не отображается */
  actionButtonRender?: CustomRender<NotificationItemProps, {}, React.PropsWithChildren<{}>>,
  /** Сообщение внутри оповещения. Принимается функция. */
  contentRender?: CustomRender<NotificationItemProps, {}, DivProps>,
  /** Кастомизация иконки */
  iconRender?: CustomRender<NotificationItemProps, {}, DivProps>,
  /** Максимальное количество оповещений на экране, по-умолчанию 3 */
  maxItems?: number,
  /** Обработчик изменения, срабатывает при клике по крестику или по таймауту  */
  onChange: (event: ChangeEvent) => void,
  /** Реф */
  ref?: React.Ref<NotificationRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.notifications],
  /** Уведомления, если передано больше, чем maxItems - отображаются в порядке очереди */
  value: Item[],
}

export interface NotificationRefCurrent {
  wrapper: HTMLElement | null,
}
