import * as React from 'react';
import * as L from '@korus/leda';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const menuPropsDesc = [
  {
    name: 'activeTabKey',
    type: 'string | number',
    required: false,
    description: 'Идентификатор выбранной вкладки.',
  },
  {
    name: 'children',
    type: 'L.MenuItem',
    required: true,
    description: 'Дочерние элементы - вкладки.',
  },
  {
    name: 'contentRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация содержимого вкладки.',
  },
  {
    name: 'headingRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация контейнера вкладок.',
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
type ChangeEvent = {
  component: {
    value: string | number,
  },
};          
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: (
      <L.P>
        Обработчик выбора вкладки.
        Идентификатор выбранной вкладки находится в <i>event.component.value</i>.
      </L.P>
    ),
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
interface MenuRefCurrent {
  wrapper: HTMLElement | null,
  content: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>MenuRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'tabContentNode',
    type: 'Element | null',
    required: false,
    description: 'DOM-узел, в который будет помещено содержимое вкладки.',
  },
  {
    name: 'tabRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация вкладки.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  arrowLeft:                'menu-arrow-left',
  arrowRight:               'menu-arrow-right',
  container:                'menu-container',
  content:                  'menu-content',
  menuBar:                  'menu-bar',
  menuBarFiller:            'menu-bar-filler',
  menuDisabled:             'disabled',
  menuDropDown:             'menu-dropdown',
  menuItem:                 'menu-item',
  menuItemActive:           'active',
  scroll:                   'scroll',
  wrapper:                  'menu-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultMenuTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация общего враппера.',
  },
];

export const menuItemPropsDesc = [
  {
    name: 'menuItemKey',
    type: 'number',
    required: true,
    description: 'Идентификатор вкладки.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  wrapper:                 'dropdown-wrapper',
  wrapperTop:              'pos-top',
  wrapperRight:            'pos-right',
  wrapperVisible:          'visible',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultDropDownTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема выпадающего списка компонента.',
  },
  {
    name: 'title',
    type: 'React.Node',
    required: true,
    description: 'Заголовок вкладки.',
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
interface MenuItemRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>MenuItemRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация враппера, при наведении на который появляется выпадающий список.',
  },
];
