import * as React from 'react';
import * as L from '@korus/leda';

export const propsDesc = [
  {
    name: 'data',
    type: (
      <>
      {'('}
      <L.Tooltip title={(
        <pre>{`
{
  children: (CheckBoxTreeGroupItem | CheckBoxTreeItem)[],
  id: number,
  label: string,
  name?: string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>CheckBoxTreeGroupItem</L.Span>
      </L.Tooltip>
      {' | '}
      <L.Tooltip title={(
        <pre>{`
{
  children?: (CheckBoxTreeGroupItem | CheckBoxTreeItem)[],
  id: number,
  label: string,
  name?: string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>CheckBoxTreeItem</L.Span>
      </L.Tooltip>
      {')[]'}
      </>
    ),
    required: true,
    description: 'Данные для дерева чекбоксов',
  },
  {
    name: 'defaultValue',
    type: 'number[]',
    required: false,
    description: 'Массив из id выбранных по умолчанию элементов',
  },
  {
    name: 'onChange',
    type: (
      <>
      {'(event: '}
      <L.Tooltip title={(
        <pre>{`
{
  component: {
    selected: number[],
    selectedGroups: number[],
  },
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>CheckBoxTreeChangeEvent</L.Span>
      </L.Tooltip>
      {') => void'}
      </>
    ),
    required: false,
    description: 'Обработчик изменения значения',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  checkBoxTreeIcon:         'checkboxtree-icon',
  checkBoxTreeIconExpanded: 'checkboxtree-icon-expanded',
  checkBoxTreeItem:         'checkboxtree-item',
  checkBoxTreeList:         'checkboxtree-list',
  opened:                   'opened',
  wrapper:                  'checkboxtree-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultCheckBoxTreeTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  }
];
