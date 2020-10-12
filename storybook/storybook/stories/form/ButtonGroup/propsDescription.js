import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { DataObject, RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: (
      <L.A
        onClick={linkTo('Layout|ButtonGroup|Customization', 'buttonRender')}
        target="_self"
      >
        buttonRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация кнопки',
  },
  {
    name: 'data',
    type: (
      <L.Span>
        {'string[] | '}
        {'number[] | '}
        <DataObject />[]
      </L.Span>
    ),
    required: true,
    description: 'Данные для кнопок. Массив обьектов, строк или чисел. ВАЖНО! В компоненте не может быть двух кнопок с одинаковым текстом',
  },
  {
    name: 'defaultValue',
    type: (
      <L.Span>
        <L.Div>
          {'string | '}
          {'number | '}
          <DataObject />
        </L.Div>
        <L.Div>
          {'string[] | '}
          {'number[] | '}
          <DataObject />[]
        </L.Div>
      </L.Span>
    ),
    required: false,
    description: 'Значение по умолчанию, используется в неконтролируемом режиме',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Перевести компонент в состояние disabled',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Имя компонента',
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
interface ChangeEvent<T = any> extends React.ChangeEvent<T> {
  component: {
    value:  string | DataObject | number | string[] | DataObject[] | number[],
    name?: string,
  },
}        
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.ButtonGroup.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события изменения активной кнопки',
  },
  {
    name: 'onClick',
    type: 'React.MouseEventHandler<HTMLElement>',
    required: false,
    description: 'Обработчик клика',
  },
  {
    name: 'textField',
    type: 'string',
    required: false,
    description: (
      <L.Div>
        Имя поля в объекте массива <b>data</b>, которое содержит текст для отображения в кнопке.
      </L.Div>
    ),
  },
  {
    name: (
      <L.A
        onClick={linkTo('Layout|ButtonGroup', 'Режимы работы')}
        target="_self"
      >
        type
      </L.A>
    ),
    type: '\'radio\' | \'checkbox\'',
    required: false,
    description: (
      <L.Div>
        Тип компонента, если <i>radio</i> - может выбрана только одна кнопка, если <i>checkbox</i> - несколько. По-умолчанию <i>radio</i>
      </L.Div>
    ),
  },
  {
    name: 'ref',
    type: (
      <>
        {'React.Ref<'}
        <L.Tooltip
          title={(
            <pre>
              {`
{ wrapper: HTMLElement | null }
            `}
            </pre>
          )}
        >
          <L.Span _txt-success>ButtonRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </>
    ),
    required: false,
    description: 'Reference',
  },
  {
    name: 'value',
    type: (
      <L.Span>
        <L.Div>
          {'string | '}
          {'number | '}
          <DataObject />
        </L.Div>
        <L.Div>
          {'string[] | '}
          {'number[] | '}
          <DataObject />[]
        </L.Div>
      </L.Span>
    ),
    required: false,
    description: 'Активная кнопка/кнопки',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  button?: string,
  buttonActive?: string,
  buttonFirst?: string,
  buttonLast?: string,
  wrapper?: string,
}
        `}
        </pre>
)}
      >
        <L.Span _txt-success>DefaultButtonGroupTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Layout|ButtonGroup|Customization', 'wrapperRender')}
        target="_self"
      >
        wrapperRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация общего контейнера для кнопок',
  },
];
