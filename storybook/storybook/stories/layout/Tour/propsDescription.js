import * as React from 'react';
import * as L from '@korus/leda';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const tourPropsDesc = [
  {
    name: 'activeStepKey',
    type: 'number | string | null',
    required: false,
    description: 'Идентификатор активного шага, если null - гайд-тур закрыт.',
  },
  {
    name: 'data',
    type: (
      <L.Span>
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {
                `
interface TourStepItem {
  borderRadius?: number,
  content: (props: ContentProps) => React.ReactElement | null,
  element: HTMLElement | null,
  offsetTop?: number,
  overlayBackgroundColor?: string,
  position: 'top' | 'right' | 'bottom' | 'left',
  stepKey: string | number,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>TourStepItem</L.Span>[]
        </L.Tooltip>
      </L.Span>
    ),
    required: true,
    description: 'Шаги гайд-тура.',
  },
  {
    name: 'onChange',
    type: (
      <L.Span>
        {'(ev: '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {
                `
interface ChangeEvent {
  component: {
    value: number | string | null,
    item: TourStepItem | null,
  },
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>ChangeEvent</L.Span>
        </L.Tooltip>
        {') => void'}
      </L.Span>
    ),
    required: true,
    description: 'Обработчик изменения шага.',
  },
];

export const tourItemPropsDesc = [
  {
    name: 'borderRadius',
    type: 'number',
    required: false,
    description: 'Скругление у выделенных элементов в px, по умолчанию 15px.',
  },
  {
    name: 'content',
    type: (
      <L.Span>
        {'(props: '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {
                `
interface ContentProps {
  goTo: (stepNumber: number) => void,
  next: () => void,
  prev: () => void,
  stopTour: () => void,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>ContentProps</L.Span>
        </L.Tooltip>
        {') => React.ReactElement | null'}
      </L.Span>
    ),
    required: true,
    description: (
      <div>
        <p>
          Конструктор контента.
        </p>
      </div>
    ),
  },
  {
    name: 'element',
    type: 'HTMLElement | null',
    required: true,
    description: (
      <div>
        <p>
          Элемент, к которому привязан шаг тура.
        </p>
      </div>
    ),
  },
  {
    name: 'offsetTop',
    type: 'number',
    required: false,
    description: (
      <div>
        <p>
          Расстояние от верхней границы экрана, на котором заканчивается прокрутка к элементу гайд-тура в px, по умолчанию 200px.
        </p>
      </div>
    ),
  },
  {
    name: 'overlayBackgroundColor',
    type: 'string',
    required: false,
    description: (
      <div>
        <p>
          Цвет фона оверлея, по умолчанию серый rgba(33, 33, 33, 0.7).
        </p>
      </div>
    ),
  },
  {
    name: 'position',
    type: '\'top\' | \'right\' | \'bottom\' | \'left\'',
    required: true,
    description: (
      <div>
        <p>
          Положение подсказки.
        </p>
      </div>
    ),
  },
  {
    name: 'stepKey',
    type: 'string | number',
    required: true,
    description: (
      <div>
        <p>
          Идентификатор шага.
        </p>
      </div>
    ),
  },
];
