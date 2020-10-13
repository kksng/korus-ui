import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'defaultValue',
    type: 'number | number[]',
    required: false,
    description: 'Значение по умолчанию.',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Отключить Slider.',
  },
  {
    name: 'hasTooltip',
    type: 'boolean',
    required: false,
    description: 'Показывать тултипы над ползунками.',
  },
  {
    name: 'labelType',
    type: '\'current\' | \'mimax\'',
    required: false,
    description: 'Тип подписи под шкалой. current - текущее значение, minmax - границы диапазона.',
  },
  {
    name: 'max',
    type: 'number',
    required: false,
    description: 'Максимальное значение.',
  },
  {
    name: 'min',
    type: 'number',
    required: false,
    description: 'Минимальное значение.',
  },
  {
    name: 'minRange',
    type: 'number',
    required: false,
    description: 'Минимальное значение между ползунками.',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Имя компонента для использования в формах.',
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
    value: number | number[] | null | undefined,
    name?: string,
  },
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.SliderTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик изменения значения. Срабатывает, когда пользователь отпускает ползунок.',
  },
  {
    name: 'onMove',
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
    value: number | number[] | null | undefined,
    name?: string,
  },
}        
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.SliderTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик изменения значения. Срабатывает при каждом движении ползунка.',
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
interface SliderRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>SliderRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'step',
    type: 'number',
    required: false,
    description: 'Шаг изменения значения. По умолчанию - 1.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  wrapper:                 string,
  container:               string,
  track:                   string,
  trackActive:             string,
  handle:                  string,
  labelContainer:          string,
  label:                   string,
  tooltipWrap:             string,
  tooltipArrow:            string,
  tooltipInner:            string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultAutoCompleteTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'unitsRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация единиц измерения для лейблов.',
  },
  {
    name: 'value',
    type: 'number | number[]',
    required: false,
    description: 'Текущее значение. Если передан массив, отобразится несколько ползунков с соответствующими значениями.',
  },
];
