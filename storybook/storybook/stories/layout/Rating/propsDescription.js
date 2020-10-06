import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
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
    name: 'isReadOnly',
    type: 'boolean',
    required: false,
    description: 'Неактивное состояние компонента.',
  },
  {
    name: 'max',
    type: 'number',
    required: false,
    description: 'Количество звёзд. 5 по умолчанию.',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Имя компонента.',
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
    value: number,
    index: number,
    name?: string,
  },
}      
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.RatingTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Обработчик события изменения значения.
        </p>
        <p>
          В событии приходит <i>value</i> - порядковый номер выбранной иконки, начиная с 1,
          и <i>index</i> - порядковый номер выбранной иконки, начиная с 0.
        </p>
      </div>
    ),
  },
  {
    name: 'value',
    type: 'number',
    required: true,
    description: 'Значение рейтинга',
  },
];
