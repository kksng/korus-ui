import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'children',
    type: 'React.Node',
    required: true,
    description: 'Дочерние элементы.',
  },
  {
    name: 'offsetTop',
    type: 'number',
    required: false,
    description: 'Отступ компонента в px от начала родителя (насколько ниже начала родителя должен появлятся компонент, чтобы не перекрывать начало родителя).',
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
interface StickyPanelRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>StickyPanelRefCurrent</L.Span>
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
  container:      'stickypanel-container',
  fixed:          'fixed',
  wrapper:        'stickypanel-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultStickyPanelTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
];
