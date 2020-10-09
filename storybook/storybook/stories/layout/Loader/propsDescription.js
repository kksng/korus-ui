import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: false,
    description: 'Компонент, обёрнутый лоадером.',
  },
  {
    name: 'iconRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация контейнера выпадающего списка.',
  },
  {
    name: 'isGlobal',
    type: 'boolean',
    required: false,
    description: 'Глобальный лоадер, перекрывает всю страницу.',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    required: false,
    description: 'Показывается ли лоадер.',
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
interface LoaderRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>L.LoaderTypes.LoaderRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  container:                'loader-container',
  element:                  'loader-element',
  fullscreen:               'fullscreen',
  wrapper:                  'loader-wrapper',
  bodyOverflow:             'global-loader-overflow',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultLoaderTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },

];
