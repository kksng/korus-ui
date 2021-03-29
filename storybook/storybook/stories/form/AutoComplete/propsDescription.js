import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import {
  isRequired,
  form,
  invalidMessage,
  isValid,
  name,
  requiredMessage,
  shouldValidateUnmounted,
  invalidMessageRender,
  validator,
} from '../../basics/6_validation/propsDescription';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'autoComplete',
    type: 'string',
    required: false,
    description: 'Браузерное автозаполнение поля ввода, по умолчанию "off".',
  },
  {
    name: 'compareObjectsBy',
    type: '((suggestionListItem: T) => any) | string : never',
    required: false,
    description: 'Сравнение объектов по произвольному полю, а не по ссылке.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|AutoComplete|Props', 'data: string[]')}
        target="_self"
      >
        data
      </L.A>
    ),
    type: (
      <L.Span>
        {'Array<string | '}
        <L.Tooltip
          position="bottom"
          title={'{ [string]: string | number }'}
        >
          <L.Span _txt-success>DataObject</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: true,
    description: 'Данные для отображения в выпадающем списке.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|AutoComplete|Props', 'filterRule')}
        target="_self"
      >
        filterRule
      </L.A>
    ),
    type: '\'smart\' | \'startsWith\' | \'includes\'',
    required: false,
    description: 'Правило фильтрации выпадающего списка. Дефолтное значение - smart, "умный" поиск ищет в строке вхождения всех слов из инпута, не зависимо от их порядка, startsWith - фильтр по началу строку в инпуте, includes - поиск по вхождению строки.',
  },
  {
    name: 'footerRender',
    type: '() => React.ReactNode',
    required: false,
    description: 'Футер под значениями в выпадающем списке.',
  },
  {
    name: 'groupBy',
    type: (
      <L.Span>
        {'('}
        <L.Tooltip
          position="bottom"
          title={'{ [string]: string | number }'}
        >
          <L.Span _txt-success>DataObject</L.Span>
        </L.Tooltip>
        {') => string | undefined'}
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Элементы в выпадающем списке можно группировать. Для этого каждый элемент в <b>data</b> должен иметь поле, которое позволяет его отнести к какой-либо группе.
        </p>
        <p>
          Например: <i>data={`{[{ city: 'Berlin', country: 'Germany' }, { city: 'Paris', country: 'France' }]}`}</i>
        </p>
        <p>
          Атрибут <b>groupBy</b> принимает функцию, которая будет выполнена для каждого элемента из <b>data</b>. Аргументом этой функции будет сам элемент.
          Верните из функции то поле элемента, которое должно использоваться для группировки: <i>groupBy={'{item => item.country}'}</i>.
        </p>
        <p>
          Если какие-то элементы <b>data</b> не содержат поле для группировки, они окажутся несгруппированными внизу выпадающего списка.
        </p>
      </div>
    ),
  },
  {
    name: 'hasClearButton',
    type: 'boolean',
    required: false,
    description: 'Отображение кнопки для очистки значения в поле ввода.',
  },
  {
    name: 'headerRender',
    type: '() => React.ReactNode',
    required: false,
    description: 'Хедер над значениями в выпадающем списке.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|AutoComplete', 'Кастомизация')}
        target="_self"
      >
        inputRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Настройка внешнего вида поля ввода.',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Перевести компонент в состояние disabled.',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    required: false,
    description: 'Вместо выпадающего списка в момент загрузки будет отображаться лоадер - полезно при подгрузке данных для списка с сервера.',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: false,
    description: 'Рендерить компонент с открытым выпадающим списком.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|AutoComplete', 'Кастомизация')}
        target="_self"
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
    description: 'Настройка внешнего вида элемента выпадающего списка.',
  },
  {
    name: 'listRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация контейнера выпадающего списка.',
  },
  {
    name: 'minSearchLength',
    type: 'number',
    required: false,
    description: 'Минимальное количество символов в инпуте для появления выпадающего списка.',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Имя поля ввода для использования в формах и валидации.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|AutoComplete', 'Кастомизация')}
        target="_self"
      >
        noSuggestionsRender
      </L.A>
    ),
    type: '() => React.Node',
    required: false,
    description: 'Текст или компонент React, которые отображаются в выпадающем списке, если не найдено подходящих значений.',
  },
  {
    name: 'onBlur',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface FocusEvent<T = any> extends React.FocusEvent<T> {
  component: {
    value: string,
    name?: string,
    isValid?: boolean,
  },
}              
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.AutoCompleteTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события потери фокуса.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|AutoComplete|Props', 'onChange')}
        target="_self"
      >
        onChange
      </L.A>
    ),
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface ChangeEvent<T extends Suggestion> extends React.ChangeEvent<T> {
  component: {
    value: string,
    method: 'clear' | 'click' | 'enter' | 'trigger' | 'type', 
    name?: string,
    suggestion?: string | DataObject | null,
  },
}        
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.AutoCompleteTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик события изменения значения в поле ввода.',
  },
  {
    name: 'onEnterPress',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: string,
  },
}              
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.AutoCompleteTypes.EnterPressEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик нажатия на enter.',
  },
  {
    name: 'onFocus',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: string,
  },
}              
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.AutoCompleteTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события фокуса.',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: 'Плейсхолдер.',
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
interface AutoCompleteRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>AutoCompleteRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'searchFields',
    type: 'string[]',
    required: false,
    description: 'Кроме поля, указанного в textField, можно искать вхождения и в других полях объекта data, перечислите в массиве имена этих полей.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|AutoComplete|Props', 'shouldCorrectValue')}
        target="_self"
      >
        shouldCorrectValue
      </L.A>
    ),
    type: 'boolean',
    required: false,
    description: 'При потере фокуса проверяет введенное значение на соответствие значениям в data и подставляет последнее выбранное значение или пустое, если ничего не было выбрано.',
  },
  {
    name: 'shouldShowAllSuggestions',
    type: 'boolean',
    required: false,
    description: 'Показывать все элементы из data, не фильтруя.',
  },
  {
    name: 'sortSuggestions',
    type: (
      <L.Span>
        {'(a: '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {
                `
DataObject | string | number | null
              `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>Item</L.Span>
        </L.Tooltip>
        {', b: '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {
                `
 DataObject | string | number | null                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>Item</L.Span>
        </L.Tooltip>
        {') => number'}
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Сортировка выпадающего списка.
        </p>
        <p>
          Для сортировки используйте функцию в формате
          {' '}
          <a
            href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
            target="_blank"
            rel="noopener noreferrer"
          >
            compareFunction
          </a>.
        </p>
        <p>
          Например: <i>sortSuggestions=&#123;(a, b) => (a.text > b.text ? 1 : -1)&#125;</i>.
        </p>
      </div>
    ),
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|AutoComplete|Props', 'data: Array<DataObject>')}
        target="_self"
      >
        textField
      </L.A>
    ),
    type: 'string',
    required: false,
    description: 'Используется, если в data передан массив объектов, для указания поля, из которого брать текст для отображения в списке.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  closeIcon:                  string,
  input:                      string,
  inputWrapperDisabled:       string,
  inputWrapperFocused:        string,
  inputWrapperInvalid:        string,
  sectionContainer:           string,
  sectionContainerFirst:      string,
  sectionTitle:               string,
  suggestion:                 string,
  suggestionFirst:            string,
  suggestionHighlighted:      string,
  suggestionsContainer:       string,
  suggestionsContainerOpened: string,
  suggestionsList:            string,
  wrapper:                    string,
  wrapperOpened:              string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultAutoCompleteTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'value',
    type: 'string | null',
    required: false,
    description: 'Текст для отображения в поле ввода.',
  },
];

export const validationPropsDesc = [
  isRequired,
  form,
  // invalidMessage,
  isValid,
  name,
  requiredMessage,
  shouldValidateUnmounted,
  // invalidMessageRender,
  // validator,
];
