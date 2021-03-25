import * as React from 'react';
import * as L from '@korus/leda';

export const propsDesc = [
  {
    name: 'data',
    type: (
      <>
      <L.Tooltip title={(
        <pre>{`
{
  onClick?: () => void,
  text: string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>TerminalItem</L.Span>
      </L.Tooltip>
      {' | '}
      <L.Tooltip title={(
        <pre>{`
{
  [x: string]: TerminalItem | InternalItem[],
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>InternalItem</L.Span>
      </L.Tooltip>
      {'[]'}
      </>
    ),
    required: true,
    description: 'Данные для дерева ссылок',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  current:                  'current',
  last:                     'last',
  linkTreeIcon:             'link-tree-icon',
  linkTreeIconExpanded:     'link-tree-icon-expanded',
  linkTreeItem:             'link-tree-item',
  linkTreeList:             'link-tree-list',
  opened:                   'opened',
  wrapper:                  'link-tree-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultLinkTreeTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
];
