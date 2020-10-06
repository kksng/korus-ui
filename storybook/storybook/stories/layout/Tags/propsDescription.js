import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const tagsPropsDesc = [
  {
    name: 'children',
    type: 'L.Tag',
    required: true,
    description: 'Дочерние элементы.',
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
interface TagsRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>TagsRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  closeIcon:                  'tags-icon',
  defaultIcon:                'icon-default',
  tag:                        'tags-item',
  wrapper:                    'tags-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultTagsTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация контейнера.',
  },
];

export const tagPropsDesc = [
  {
    name: 'children',
    type: 'React.Node',
    required: true,
    description: 'Содержимое тега',
  },
  {
    name: 'iconRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация иконки для тега.',
  },
  {
    name: 'onIconClick',
    type: '(ev: React.MouseEvent<HTMLSpanElement>) => void',
    required: false,
    description: 'Обработчик клика по иконке тега',
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
interface TagsRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>TagsRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  closeIcon:                  'tags-icon',
  defaultIcon:                'icon-default',
  tag:                        'tags-item',
  wrapper:                    'tags-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultTagsTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация контейнера для тега.',
  },
];
