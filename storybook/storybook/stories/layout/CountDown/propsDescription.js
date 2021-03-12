import * as React from 'react';
import * as L from '@korus/leda';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'format',
    type: 'string',
    required: false,
    description: 'Формат времени таймера. Допустимые значения: hh:mm:ss и mm:ss (по умолчанию mm:ss)',
  },
  {
    name: 'interval',
    type: 'number | null',
    required: false,
    description: 'Интервал отсчета (в милисекундах, по умолчанию 1000). Чтобы поставить таймер на паузу, необходимо передать null',
  },
  {
    name: 'onComplete',
    type: '() => void',
    required: false,
    description: 'Функция обратного вызова при завершении отсчета таймера',
  },
  {
    name: 'onPause',
    type: '() => void',
    required: false,
    description: 'Функция обратного вызова при паузе таймера',
  },
  {
    name: 'onStart',
    type: '() => void',
    required: false,
    description: 'Функция обратного вызова при старте таймера',
  },
  {
    name: 'onTick',
    type: '() => void',
    required: false,
    description: 'Функция обратного вызова при каждом изменении таймера',
  },
  {
    name: 'text',
    type: 'string',
    required: false,
    description: 'Текст таймера',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  countdownTimer: 'countdown-timer',
  wrapper:        'countdown-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultCountDownTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
  {
    name: 'time',
    type: 'number',
    required: true,
    description: 'Стартовое время отсчета (в милисекундах)',
  },
  {
    name: 'wrapperRender',
    type: (
        <L.Span>
          <RenderEvent /> => React.ReactNode
        </L.Span>
      ),
    required: false,
    description: 'Кастомизация враппера',
  },


];
