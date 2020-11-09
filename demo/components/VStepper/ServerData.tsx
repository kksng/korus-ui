import * as React from 'react';
import * as L from '../../../leda';
import { stepContent } from './constants';

const exampleCode = `
const statusText = {
  filled: 'Заполнено',
  notFilled: 'Не заполнено',
  error: 'Ошибка',
};

const data = [
  {
    title: 'Добавление расходов',
    isCurrent: false,
    content: stepContent[0],
    status: 'filled',
  },
  {
    title: 'Персональные данные',
    isCurrent: false,
    content: stepContent[1],
    status: 'filled',
  },
  {
    title: 'Подтверждение командировки',
    isCurrent: true,
    content: stepContent[2],
    status: 'notFilled',
  },
  {
    title: 'Печать закрывающих документов',
    isCurrent: false,
    content: stepContent[2],
    status: 'error',
  },
  {
    title: 'Дополнительная информация',
    isCurrent: false,
    content: stepContent[2],
    status: 'notFilled',
  },
];

export const ServerData = (props: { title: string }) => (
  <L.Div _box _inner _demoBg>
    <L.VStepper>
      {data.map(dataItem => {
        const success = dataItem.status === 'filled' ? 'success' : null;
        const progress = dataItem.status === 'notFilled' && dataItem.isCurrent ? 'progress' : 'null';
        const error = dataItem.status === 'error' ? 'danger' : null;

        const stepStatus = success || error || progress || undefined;

        return (
          <L.VStepper.Item hasSignIcon title={dataItem.title} status={stepStatus} statusRender={({ Element }) => <Element>statusText[dataItem.status]</Element>}>
            {dataItem.content}
          </L.VStepper.Item>
        );
      })
      }
    </L.VStepper>
  </L.Div>
);

`;
// текст для статусов
const statusText = {
  filled: 'Заполнено',
  notFilled: 'Не заполнено',
  error: 'Ошибка',
};
// данные с сервера
const data = [
  {
    title: 'Добавление расходов',
    isCurrent: false,
    content: stepContent[0],
    status: 'filled',
  },
  {
    title: 'Персональные данные',
    isCurrent: false,
    content: stepContent[1],
    status: 'filled',
  },
  {
    title: 'Подтверждение командировки',
    isCurrent: true,
    content: stepContent[2],
    status: 'notFilled',
  },
  {
    title: 'Печать закрывающих документов',
    isCurrent: false,
    content: stepContent[2],
    status: 'error',
  },
  {
    title: 'Дополнительная информация',
    isCurrent: false,
    content: stepContent[2],
    status: 'notFilled',
  },
];

export const ServerData = (props: { title: string }) => (
  <L.Div _box _inner _demoBg>
    <L.VStepper>
      {data.map(dataItem => {
        // выбираем класс компонента из данных с сервера
        // success, danger или progress, undefined | null если шаг ещё не пройден
        const success = dataItem.status === 'filled' ? 'success' : null;
        const progress = dataItem.status === 'notFilled' && dataItem.isCurrent ? 'progress' : null;
        const error = dataItem.status === 'error' ? 'danger' : null;
        // статус шага
        const stepStatus = success || error || progress;
        // в statusRender передаем текст статуса (по-умолчанию: "Заполнен" для success, "Не заполнен" для progress или ещё не пройденного шага, "Ошибка" для danger
        return (
          <L.VStepper.Item key={dataItem.title} hasSignIcon title={dataItem.title} status={stepStatus} statusRender={({ Element }) => <Element>{statusText[dataItem.status as keyof typeof statusText]}</Element>}>
            {dataItem.content}
          </L.VStepper.Item>
        );
      })
      }
    </L.VStepper>
  </L.Div>
);
