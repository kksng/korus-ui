// import { NotificationsSrc, NotificationItemSrc } from './index';
import * as React from 'react';
import * as L from '@korus/leda';

export const BasicUsage = {
  liveDemo: `
  
const hooks1 = {
  text: \`
Хуки решают множество, казалось бы, несвязанных между собой, проблем в <b>React</b>, 
с которыми мы сталкивались в течение пяти лет написания и поддержки 
десятков тысяч компонентов. Если вы изучаете <b>React</b>, используете его ежедневно 
или используете другую библиотеку с похожим компонентным подходом, 
эти проблемы наверняка покажутся вам знакомыми.
\`,
  iconClassName: 'uicon-question1',
  className: 'txt-warning',
  delay: 0,
};

const hooks2 = {
  text: \`
С помощью хуков вы можете извлечь логику состояния из компонента, 
чтобы её протестировать или повторно использовать. <b>Хуки позволяют вам 
переиспользовать логику состояния, не затрагивая дерево компонентов.</b> 
Благодаря этому, хуки легко использовать в разных компонентах и делиться ими с сообществом.
\`,
  iconClassName: 'uicon-exclamation-in-circle',
  className: 'txt-success',
  delay: 1000,
};

const hooks3 = {
  text: \`
Перед тем, как мы продолжим, обратите внимание, что хуки:
<ul>
  <li><b>Полностью на ваше усмотрение.</b> Вы можете попробовать хуки в одних компонентах, не изменяя код в других. Хуки не обязательно использовать или изучать прямо сейчас.</li>
  <li><b>100% обратно совместимы.</b> Хуки не содержат изменений, которые могут поломать ваш существующий код.</li>
  <li><b>Доступны прямо сейчас.</b> Хуки доступны с выходом версии 16.8.0.</li>
</ul>
\`,
  iconClassName: 'uicon-check',
};

const notifications = [hooks1, hooks2, hooks3];
const BasicUsage = () => {
  const [items, setItems] = React.useState([]);
  
  const addNotification = () => {
    const randomNotificationIndex = Math.floor(Math.random() * 3);
    const randomNotification = {...notifications[randomNotificationIndex], id: Math.random().toString()};
    setItems([...items, randomNotification]);
  };

  return (
    <>      
      <L.Div>
        <L.Button onClick={addNotification} _success>Notify</L.Button>
      </L.Div>
      
      <L.Div _snackbarContainefr>
        <L.Notifications
          value={items}
          onChange={ev => setItems(ev.component.value)}
        />
      </L.Div>
    </>
  );
};

render(<BasicUsage />);
`,
  text: (
    <div>
      <L.P>
        Компонент для отображения оповещений. Работает в контролируемом режиме.
      </L.P>
      <L.P>
        В <b>value</b> передайте массив объектов с определённой структурой (см. раздел <i>Item</i> в API).
        Эти объекты будут преобразованы в сообщения.
      </L.P>
      <L.P>
        По умолчанию сообщения "живут" только 5 секунд, это время можно изменить атрибутом <i>delay</i> (см. раздел <i>Item</i> в API).
        Пользователь может самостоятельно закрыть сообщение до истечения его срока жизни.
      </L.P>
      <L.P>
        На экране будут отображены только последние три сообщения. Для настройки количества видимых сообщений используйте <b>maxItems</b>.
      </L.P>
      <L.P>
        Обработчик <b>onChange</b> вызывается каждый раз, когда удаляется сообщение: по истечении срока жизни сообщения или при закрытии сообщения пользователем.
      </L.P>
      <L.P>
        В событии <b>onChange</b> содержится информация о текущем состоянии компонента, т.е. массив с текущими оповещениями.
        Передайте этот массив непосредственно в <b>value</b> компонента.
      </L.P>
    </div>
  ),
};
