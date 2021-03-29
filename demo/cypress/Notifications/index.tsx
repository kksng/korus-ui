/* eslint-disable no-alert, no-console,import/no-extraneous-dependencies */
import * as React from 'react';
import shortId from 'shortid';
import * as L from '../../../korus-ui';
import { Item } from '../../../korus-ui/components/Notifications/types';

const notifications = [
  {
    delay: 1200,
    iconClassName: 'fas fa-question-circle fa-lg',
    text: `
Хуки решают множество, казалось бы, несвязанных между собой, проблем в <b>React</b>,
с которыми мы сталкивались в течение пяти лет написания и поддержки
десятков тысяч компонентов. Если вы изучаете <b>React</b>, используете его ежедневно
или используете другую библиотеку с похожим компонентным подходом,
эти проблемы наверняка покажутся вам знакомыми.
`,
  },
  {
    delay: 1200,
    iconClassName: 'fas fa-exclamation-circle fa-lg',
    text: `
С помощью хуков вы можете извлечь логику состояния из компонента,
чтобы её протестировать или повторно использовать. <b>Хуки позволяют вам
переиспользовать логику состояния, не затрагивая дерево компонентов.</b>
Благодаря этому, хуки легко использовать в разных компонентах и делиться ими с сообществом.
`,
    type: 'reject',
  },
  {
    delay: 1200,
    iconClassName: 'fas fa-check fa-lg',
    text: `
Перед тем, как мы продолжим, обратите внимание, что хуки:
<ul>
  <li><b>Полностью на ваше усмотрение.</b> Вы можете попробовать хуки в одних компонентах, не изменяя код в других. Хуки не обязательно использовать или изучать прямо сейчас.</li>
  <li><b>100% обратно совместимы.</b> Хуки не содержат изменений, которые могут поломать ваш существующий код.</li>
  <li><b>Доступны прямо сейчас.</b> Хуки доступны с выходом версии 16.8.0.</li>
</ul>
`,
    type: 'accept',
  },
];
const notificationsWithoutDelay = [
  {
    delay: -1,
    iconClassName: 'fas fa-exclamation-circle fa-lg',
    text: `
С помощью хуков вы можете извлечь логику состояния из компонента,
чтобы её протестировать или повторно использовать. <b>Хуки позволяют вам
переиспользовать логику состояния, не затрагивая дерево компонентов.</b>
Благодаря этому, хуки легко использовать в разных компонентах и делиться ими с сообществом.
`,
    type: 'reject',
  },
  {
    delay: -1,
    iconClassName: 'fas fa-check fa-lg',
    text: `
Перед тем, как мы продолжим, обратите внимание, что хуки:
<ul>
  <li><b>Полностью на ваше усмотрение.</b> Вы можете попробовать хуки в одних компонентах, не изменяя код в других. Хуки не обязательно использовать или изучать прямо сейчас.</li>
  <li><b>100% обратно совместимы.</b> Хуки не содержат изменений, которые могут поломать ваш существующий код.</li>
  <li><b>Доступны прямо сейчас.</b> Хуки доступны с выходом версии 16.8.0.</li>
</ul>
`,
    type: 'accept',
  },
];

interface ActionButtonProps {
  item: L.NotificationsTypes.Item,
  onClose: (id: string | number) => void,
}

const ActionButton: React.FC<ActionButtonProps> = (props: ActionButtonProps) => {
  switch (props.item.type) {
    case 'accept': {
      return (
        <L.Button _success onClick={(): void => props.onClose(props.item.id)}>
          Принять
        </L.Button>
      );
    }
    case 'reject': {
      return <L.Button _warning>Отклонить</L.Button>;
    }
    default:
      return null;
  }
};

export const Notifications = (): JSX.Element => {
  const [items, setItems] = React.useState<Item[]>([]);

  const handleClose = (id: string | number): void => {
    const newItems = items.filter((item) => item.id !== id);

    setItems(newItems);
  };

  const handleNotificationsOnChange = (ev: L.NotificationsTypes.ChangeEvent): void => {
    console.log('change', ev.component);
    setItems(ev.component.value);
  };

  const handleButtonOnClick = (): void => setItems([
    ...items,
    {
      ...notifications[Math.floor(Math.random() * 3)],
      id: shortId.generate(),
    },
  ]);
  const acceptType = (): void => setItems([
    ...items,
    {
      ...notificationsWithoutDelay[1],
      id: shortId.generate(),
    },
  ]);
  const rejectType = (): void => setItems([
    ...items,
    {
      ...notificationsWithoutDelay[0],
      id: shortId.generate(),
    },
  ]);

  return (
    <L.Div _demoStory id="notificationTest">
      <L.H4 _title>Notifications</L.H4>
      <L.Notifications
        value={items}
        maxItems={3}
        onChange={handleNotificationsOnChange}
        contentRender={({ elementProps }): JSX.Element => (
          <L.Div {...elementProps} _txtWarning />
        )}
        iconRender={({ elementProps }): JSX.Element => <L.I {...elementProps} _txtSuccess />}
        actionButtonRender={({ componentProps }): JSX.Element => (
          <ActionButton item={componentProps.item} onClose={handleClose} />
        )}
        _notificationsTop
      />
      <br />
      <L.Button _warning id="default" onClick={handleButtonOnClick}>
        Добавить уведомление
      </L.Button>
      <br />
      <br />
      <L.Button _warning id="accept" onClick={acceptType}>
        Type 'accept'
      </L.Button>
      <br />
      <br />
      <L.Button _warning id="reject" onClick={rejectType}>
        Type 'reject'
      </L.Button>
    </L.Div>
  );
};
