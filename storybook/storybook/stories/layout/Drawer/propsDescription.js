import * as React from 'react';
import * as L from '@korus/leda';

export const propsDesc = [
  {
    name: 'position',
    type: '\'left\' | \'right\'',
    required: false,
    description: 'Позиционирование компонента, по умолчанию \'left\'',
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
interface DrawerRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>DrawerRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылка на DOM-элемент компонента',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  bars:                    'drawer-bars',
  barsOpen:                'open',
  overlay:                 'drawer-overlay',
  wrapper:                 'drawer',
  wrapperLeft:             'drawer-left',
  wrapperRight:            'drawer-right',
  wrapperVisible:          'visible',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultDrawerTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
];
