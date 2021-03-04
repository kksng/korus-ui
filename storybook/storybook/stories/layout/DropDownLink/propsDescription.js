import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Дополнительные классы компонента',
  },
  {
    name: 'data',
    type: (
      <L.Span>
        {'('}
        <L.Tooltip position='bottom' title={'{ [string]: string | number }'}>
          <L.Span _txt-success>DataObject</L.Span>
        </L.Tooltip>
        {') => string | undefined'}
      </L.Span>
    ),
    required: true,
    description: 'Данные для отображения в списке',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: false,
    description: 'Принудительное открытие списка',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DropDownLink', 'Расширяемость')}
        target='_self'
      >
        itemRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description:
      'Функция для кастомизации значения и внешнего вида элемента выпадающего списка. Вызывается когда элемент собирается визуализироваться.',
  },
  {
    name: 'name',
    type: 'string',
    require: false,
    description: 'Имя компонента',
  },
  {
    name: 'onChange',
    type: (
      <L.Span>
        (event:{' '}
        <L.Tooltip
          position='bottom'
          title={
            <pre>
              {`
interface ChangeEvent<Value> {
  component: {
    value: Value,
    name?: string,
  },
}        
              `}
            </pre>
          }
        >
          <L.Span _txt-success>L.DropDownSelectTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик выбора элемента.',
  },
  {
    name: 'ref',
    type: (
      <L.Span>
        {'React.Ref<'}
        <L.Tooltip
          position='bottom'
          title={
            <pre>
              {`
interface DropDownRefCurrent {
  wrapper: HTMLElement | null,
}
                `}
            </pre>
          }
        >
          <L.Span _txt-success>DropDownRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'textField',
    type: 'object | string',
    required: false,
    description:
      'Имя поля объекта, данные из которого будут рендериться в качестве элементов списка',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip
        title={
          <pre>
            {`
{
  currentText:             'dropdown-text alt',
  item:                    'dropdown-item level-2',
  wrapper:                 'dropdown-wrapper blank button-wrapper',
  wrapperRight:            'pos-right',
  wrapperTop:              'pos-top',
  wrapperVisible:          'visible',
}
        `}
          </pre>
        }
      >
        <L.Span _txt-success>DefaultDropDownLinkTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'titleRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    requie: false,
    description: 'Функция для кастомизации текущего значения',
  },
  {
    name: 'value',
    type: 'DataObject | string | number',
    require: false,
    description: 'Устанавливает текущее значение',
  },
];
