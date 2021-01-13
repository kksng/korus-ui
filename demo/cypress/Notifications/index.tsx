/* eslint-disable no-alert, no-console,import/no-extraneous-dependencies */
import * as React from 'react';
import shortId from 'shortid';
import * as L from '../../../korus-ui';
import { Item } from '../../../korus-ui/components/Notifications/types';

const notifications = [
  {
    text: `
Хуки решают множество, казалось бы, несвязанных между собой, проблем в <b>React</b>,
с которыми мы сталкивались в течение пяти лет написания и поддержки
десятков тысяч компонентов. Если вы изучаете <b>React</b>, используете его ежедневно
или используете другую библиотеку с похожим компонентным подходом,
эти проблемы наверняка покажутся вам знакомыми.
`,
    iconClassName: 'fas fa-question-circle fa-lg',
    delay: 1200,
  },
  {
    text: `
С помощью хуков вы можете извлечь логику состояния из компонента,
чтобы её протестировать или повторно использовать. <b>Хуки позволяют вам
переиспользовать логику состояния, не затрагивая дерево компонентов.</b>
Благодаря этому, хуки легко использовать в разных компонентах и делиться ими с сообществом.
`,
    iconClassName: 'fas fa-exclamation-circle fa-lg',
    type: 'reject',
    delay: 1200,
  },
  {
    text: `
Перед тем, как мы продолжим, обратите внимание, что хуки:
<ul>
  <li><b>Полностью на ваше усмотрение.</b> Вы можете попробовать хуки в одних компонентах, не изменяя код в других. Хуки не обязательно использовать или изучать прямо сейчас.</li>
  <li><b>100% обратно совместимы.</b> Хуки не содержат изменений, которые могут поломать ваш существующий код.</li>
  <li><b>Доступны прямо сейчас.</b> Хуки доступны с выходом версии 16.8.0.</li>
</ul>
`,
    iconClassName: 'fas fa-check fa-lg',
    type: 'accept',
    delay: 1200,
  },
];
const notificationsWithoutDelay = [
  {
    text: `
С помощью хуков вы можете извлечь логику состояния из компонента,
чтобы её протестировать или повторно использовать. <b>Хуки позволяют вам
переиспользовать логику состояния, не затрагивая дерево компонентов.</b>
Благодаря этому, хуки легко использовать в разных компонентах и делиться ими с сообществом.
`,
    iconClassName: 'fas fa-exclamation-circle fa-lg',
    type: 'reject',
    delay: -1,
  },
  {
    text: `
Перед тем, как мы продолжим, обратите внимание, что хуки:
<ul>
  <li><b>Полностью на ваше усмотрение.</b> Вы можете попробовать хуки в одних компонентах, не изменяя код в других. Хуки не обязательно использовать или изучать прямо сейчас.</li>
  <li><b>100% обратно совместимы.</b> Хуки не содержат изменений, которые могут поломать ваш существующий код.</li>
  <li><b>Доступны прямо сейчас.</b> Хуки доступны с выходом версии 16.8.0.</li>
</ul>
`,
    iconClassName: 'fas fa-check fa-lg',
    type: 'accept',
    delay: -1,
  },
];

const ActionButton = (props: {
  item: L.NotificationsTypes.Item;
  onClose: (id: string | number) => void;
}): JSX.Element => {
  switch (props.item.type) {
    case 'accept': {
      return (
        <L.Button _success onClick={() => props.onClose(props.item.id)}>
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

  const handleNotificationsOnChange = (ev) => {
    console.log('change', ev.component);
    setItems(ev.component.value);
  };

  const handleButtonOnClick = () =>
    setItems([
      ...items,
      {
        ...notifications[Math.floor(Math.random() * 3)],
        id: shortId.generate(),
      },
    ]);
  const acceptType = () =>
    setItems([
      ...items,
      {
        ...notificationsWithoutDelay[1],
        id: shortId.generate(),
      },
    ]);
  const rejectType = () =>
    setItems([
      ...items,
      {
        ...notificationsWithoutDelay[0],
        id: shortId.generate(),
      },
    ]);

  return (
    <L.Div _demoStory>
      <L.H4 _title>Notifications</L.H4>
      <L.Notifications
        value={items}
        maxItems={3}
        onChange={handleNotificationsOnChange}
        contentRender={({ elementProps }) => (
          <L.Div {...elementProps} _txtWarning />
        )}
        iconRender={({ elementProps }) => <L.I {...elementProps} _txtSuccess />}
        actionButtonRender={({ componentProps }) => (
          <ActionButton item={componentProps.item} onClose={handleClose} />
        )}
        _notificationsTop
      />
      <br />
      <L.Button _warning _default onClick={handleButtonOnClick}>
        Добавить уведомление
      </L.Button>
      <br />
      <br />
      <L.Button _warning _accept onClick={acceptType}>
        Type 'accept'
      </L.Button>
      <br />
      <br />
      <L.Button _warning _reject onClick={rejectType}>
        Type 'reject'
      </L.Button>
    </L.Div>
  );
};
