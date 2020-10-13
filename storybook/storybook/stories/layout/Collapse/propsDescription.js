import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const collapsePropsDesc = [
  {
    name: 'activePanelKey',
    type: 'string | string[] | null',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Ключ активной панели.
          Передайте в <b>activePanelKey</b> значение panelKey открытой панели/открытых панелей.
        </L.P>
        <L.P>
          Если панель (панели) закрыта, значение равно null.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'children',
    type: 'React.Node',
    required: true,
    description: 'Дочерние элементы',
  },
  {
    name: 'isAccordion',
    type: 'boolean',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Если передано <i>true</i>, открытой будет только одна панель (режим аккордеона).
          Атрибут работает только для неконтролируемого режима.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'onSelect',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface SelectEvent {
  component: {
    value: string | string[] | null,
  },
}       
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.CollapseTypes.SelectEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: (
      <L.Div>
        <L.P>
          Обработчик клика на панель. <b>value</b> события содержит ключ панели для использования в <b>activePanelKey</b>
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  headingWrapper:       'collapse-heading-wrapper',
  headingDisabled:      'heading-disabled',
  headingIcon:          'collapse-heading-icon',
  headingIconOpen:      'icon-expanded',
  bodyWrapper:          'collapse-body-wrapper',
  bodyOpened:           'opened',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultCollapseTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
];

export const collapsePanelPropsDesc = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Дочерние элементы.',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Панель становится некликабельной.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Имя панели.',
  },
  {
    name: 'panelKey',
    type: 'string',
    required: true,
    description: 'Идентификатор панели, передается в событии onSelect компонента L.Collapse.',
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация компонента-обертки для панели.',
  },
];

export const collapseHeadingPropsDesc = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Дочерние элементы.',
  },
  {
    name: 'iconRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация иконки справа от заголовка.',
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
interface HeadingRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>HeadingRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента',
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Компонент-обертка. По умолчанию - <Div />.',
  },
];

export const collapseBodyPropsDesc = [
  {
    name: 'children',
    type: 'React.Node',
    required: true,
    description: 'Дочерние элементы.',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    required: true,
    description: 'Состояние загрузки, в открытой панели отображается лоадер.',
  },
  {
    name: 'onClose',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface BodyClickCustomEvent {
  component: {
    value: string, // panelKey
  },
}          
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.CollapseTypes.BodyClickCustomEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Функция обратного вызова на закрытие коллапса.',
  },
  {
    name: 'onCloseByClick',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface BodyClickCustomEvent {
  component: {
    value: string, // panelKey
  },
}          
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.CollapseTypes.BodyClickCustomEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Функция обратного вызова на закрытие коллапса по клику.',
  },
  {
    name: 'onOpen',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface BodyClickCustomEvent {
  component: {
    value: string, // panelKey
  },
}          
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.CollapseTypes.BodyClickCustomEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Функция обратного вызова на открытие коллапса.',
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
interface BodyRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>BodyRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента',
  },
  {
    name: 'transition',
    type: 'string',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Описание анимации открытия/закрытия коллапса. Описывается как CSS Transition.
          См.
          {' '}
          <L.A
            href="https://developer.mozilla.org/ru/docs/Web/CSS/transition"
            target="_blank"
          >
            https://developer.mozilla.org/ru/docs/Web/CSS/transition
          </L.A>
          .
        </L.P>
        <L.P>
          По умолчанию <i>height 250ms cubic-bezier(.4, 0, .2, 1)</i>
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация компонента-обертки. По умолчанию - <Div />',
  },
];
