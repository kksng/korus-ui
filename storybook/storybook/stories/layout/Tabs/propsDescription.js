import * as React from 'react';
import * as L from '@korus/leda';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const tabsPropsDesc = [
  {
    name: 'activeTabKey',
    type: 'string | number',
    required: false,
    description: 'Идентификатор выбранной вкладки.',
  },
  {
    name: 'children',
    type: 'L.Tab',
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
interface TabsRefCurrent {
  wrapper: HTMLElement | null,
  content: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>TabsRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'shouldScrollTabs',
    type: 'boolean',
    required: false,
    description: 'Скролл для табов.',
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
  content:                  'tabs-content',
  tab:                      'tabs-item',
  tabBarFiller:             'tabs-bar-filler',
  tabsBar:                  'tabs-bar',
  wrapper:                  'tabs-wrapper',
  tabActive:                'active',
  tabDisabled:              'disabled',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultTabsTheme</L.Span>
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

export const tabPropsDesc = [
  {
    name: 'children',
    type: 'React.Node',
    required: false,
    description: 'Содержимое вкладки.',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Сделать вкладку неактивной.',
  },
  {
    name: 'tabKey',
    type: 'number',
    required: true,
    description: 'Идентификатор вкладки.',
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
  content:               string,
  tab:                   string,
  tabActive:             string,
  tabBarFiller:          string,
  tabDisabled:           string,
  tabsBar:               string,
  wrapper:               string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultTabsTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'title',
    type: 'React.Node',
    required: true,
    description: 'Заголовок вкладки.',
  },
];
