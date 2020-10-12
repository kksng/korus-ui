import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const modalPropsDesc = [
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
    description: 'Кастомизация иконки для закрытия модального окна.',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: true,
    description: (
      <L.Div>
        <L.P>
          Отображать модальное оконо или нет.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'onClose',
    type: '(ev: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLElement>) => void',
    required: false,
    description: (
      <L.Div>
        <p>
          Модальное окно можно закрыть тремя способами: кликом за пределами окна, кликом по иконке "Закрыть" и при нажатии Esc.
        </p>
        <L.P>
          <b>onClose</b> включает и обрабатывает все три способа.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'onCloseButtonClick',
    type: 'MouseEventHandler<HTMLDivElement>',
    required: false,
    description: (
      <L.Div>
        <p>
          Модальное окно можно закрыть тремя способами: кликом за пределами окна, кликом по иконке "Закрыть" и при нажатии Esc.
        </p>
        <p>
          <b>onCloseButtonClick</b> включает и обрабатывает закрытие кликом по иконке.
        </p>
      </L.Div>
    ),
  },
  {
    name: 'onEscapePress',
    type: 'KeyboardEventHandler<HTMLDivElement>',
    required: false,
    description: (
      <L.Div>
        <p>
          Модальное окно можно закрыть тремя способами: кликом за пределами окна, кликом по иконке "Закрыть" и при нажатии Esc.
        </p>
        <p>
          <b>onEscapePress</b> включает и обрабатывает закрытие по нажатию на Esc.
        </p>
      </L.Div>
    ),
  },
  {
    name: 'onOverlayClick',
    type: 'MouseEventHandler<HTMLDivElement>',
    required: false,
    description: (
      <L.Div>
        <p>
          Модальное окно можно закрыть тремя способами: кликом за пределами окна, кликом по иконке "Закрыть" и при нажатии Esc.
        </p>
        <p>
          <b>onOverlayClick</b> включает и обрабатывает за пределами окна.
        </p>
      </L.Div>
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
interface ModalRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>ModalRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'size',
    type: '\'sm\' | \'md\' | \'lg\'',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Размер окна. Имеет три стандартных значения sm=480px, md=608px, lg=868px.
        </L.P>
        <L.P>
          Если не задан, то устанавливается значение md=608px.
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
  body:       'modal-body',
  cross:      'modal-cross',
  footer:     'modal-footer',
  header:     'modal-header',
  window:     'modal-window',
  wrapper:    'modal-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultModalTheme</L.Span>
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
    description: 'Кастомизация контейнера.',
  },
];

export const modalHeaderPropsDesc = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Дочерние элементы.',
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

export const modalBodyPropsDesc = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Дочерние элементы.',
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

export const modalFooterPropsDesc = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Дочерние элементы.',
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
