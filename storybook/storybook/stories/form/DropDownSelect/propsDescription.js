import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
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
    name: (
      <L.A
        onClick={linkTo('Form|DropDownSelect.Props', 'boundingContainerRef')}
        target="_self"
      >
        boundingContainerRef
      </L.A>
    ),
    type: 'React.RefObject<HTMLElement | { wrapper: HTMLElement | null }>',
    required: false,
    description: (
      <div>
        <p>
          Ref контейнера, относительно границ которого компонент определяет, в каком направлении открывать выпадающий список: вверх или вниз.
        </p>
      </div>
    ),
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DropDownSelect.Props', 'compareObjectsBy')}
        target="_self"
      >
        compareObjectsBy
      </L.A>
    ),
    type: (
      <L.Span>
        {'string | (suggestionListItem: '}
        <L.Tooltip
          position="bottom"
          title={'{ [x: string]: any }'}
        >
          <L.Span _txt-success>DataObject</L.Span>
        </L.Tooltip>
        {') => any'}
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Ключ, по которому сравниваются объекты <b>data</b>. Если не задано, объекты сравниваются по ссылке.
        </p>
      </div>
    ),
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DropDownSelect.Props', 'data: Array<string>')}
        target="_self"
      >
        data
      </L.A>
    ),
    type: (
      <L.Span>
        {'Array<string | number | null | '}
        <L.Tooltip
          position="bottom"
          title={'{ [x: string]: any }'}
        >
          <L.Span _txt-success>DataObject</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: true,
    description: (
      <div>
        <p>
          Данные для отображения в выпадающем списке. Если передан массив объектов, передайте название поля с текстом через атрибут <b>textField</b>.
        </p>
      </div>
    ),
  },
  {
    name: 'defaultValue',
    type: (
      <L.Span>
      string | number | null | 
      {' '}
      <L.Tooltip
        position="bottom"
        title={'{ [x: string]: any }'}
      >
        <L.Span _txt-success>DataObject</L.Span>
      </L.Tooltip>
    </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Значение по умолчанию, используется в неконтролируемом режиме (игнорируется, если есть <b>value</b>).
        </p>
      </div>
    ),
  },
  {
    name: 'filterRule',
    type: <div>'smart' | 'startsWith' | 'includes'</div>,
    required: false,
    description: (
      <div>
        <p>
          Правила фильтрации:
        </p>
        <ul>
          <li>
            <i>startsWith</i> - сравнивает строку из фильтра только с началом строк выпадающего списка;
          </li>
          <li>
            <i>includes</i> - ищет вхождения строки из фильтра в строках выпадающего списка;
          </li>
          <li>
            <i>smart</i> - "умный поиск", ищет вхождения слов, которые пользователь ввёл в фильтре, в любом порядке (может использоваться для поиска адресов).
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DropDownSelect.Props', 'shouldFilterValues')}
        target="_self"
      >
        filterValue
      </L.A>
    ),
    type: 'string',
    required: false,
    description: (
      <div>
        <p>
          На тот случай, если вы хотите контролировать значение в поле ввода (работает в режиме фильтрации <b>shouldFilterValues</b>).
        </p>
      </div>
    ),
  },
  {
    name: 'groupBy',
    type: (
      <L.Span>
        {'(suggestionListItem: '}
        <L.Tooltip
          position="bottom"
          title={'{ [x: string]: any }'}
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
          Например: <i>data={'{[{ city: \'Berlin\', country: \'Germany\' }, { city: \'Paris\', country: \'France\' }]}'}</i>
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
    description: (
      <div>
        Наличие иконки для очистки поля ввода (работает в режиме фильтрации <b>shouldFilterValues</b>).
      </div>
    ),
  },
  {
    name: 'iconRender',
    type: (
      <L.Div>
        <RenderEvent /> => React.ReactNode
      </L.Div>
    ),
    required: false,
    description: (
      <div>
        Кастомизация иконки для очистки поля ввода (работает в режиме фильтрации <b>shouldFilterValues</b>).
      </div>
    ),
  },
  {
    name: 'inputRender',
    type: (
      <L.Div>
        <RenderEvent /> => React.ReactNode
      </L.Div>
    ),
    required: false,
    description: (
      <div>
        Кастомизация поля ввода (работает в режиме фильтрации <b>shouldFilterValues</b>).
      </div>
    ),
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Перевести компонент в состояние disabled.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DropDownSelect', 'Debounce')}
        target="_self"
      >
        isLoading
      </L.A>
    ),
    type: 'boolean',
    required: false,
    description: (
      <div>
        <p>
          Если значение <b>isLoading</b> - <i>true</i>, то в выпадающем списке будет отображаться лоадер.
        </p>
        <p>
          Это может быть полезно, если, например, происходит загрузка данных для выпадющего списка.
        </p>
      </div>
    ),
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: false,
    description: 'Принудительное открытие выпадающего списка.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DropDownSelect', 'Кастомизация')}
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
    description: 'Настройка внешнего вида для контейнера выпадающего списка.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DropDownSelect', 'Кастомизация')}
        target="_self"
      >
        noSuggestionsRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Кастомизация элемента, который отображается в выпадающем списке, если не найдено совпадений с тем, что введено в фильтре (работает в режиме фильтрации <b>shouldFilterValues</b>).
        </p>
      </div>
    ),
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
interface FocusEvent<Value> {
  component: {
    value: Value,
    name?: string,
    isValid?: boolean,
  },
}              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.DropDownSelectTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Обработчик события потери фокуса (работает в режиме фильтрации <b>shouldFilterValues</b>).
        </p>
      </div>
    ),
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
interface ChangeEvent<Value> {
  component: {
    value: Value,
    name?: string,
  },
}        
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.DropDownSelectTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик события изменения значения компонента.',
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
          <L.Span _txt-success>EnterPressEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик нажатия на Enter',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DropDownSelect.Props', 'shouldFilterValues')}
        target="_self"
      >
        onFilterChange
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
interface ChangeEvent<string> {
  component: {
    value: string,
    name?: string,
  },
}        
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.DropDownSelectTypes.ChangeEvent&lt;string&gt;</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Обработчик события изменения значения в поле ввода (работает в режиме фильтрации <b>shouldFilterValues</b>).
        </p>
      </div>
    ),
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
interface FocusEvent<Value> {
  component: {
    value: Value,
    name?: string,
  },
}              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.DropDownSelectTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Обработчик события фокуса (работает в режиме фильтрации <b>shouldFilterValues</b>).
        </p>
      </div>
    ),
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: 'Плейсхолдер',
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
DropDownSelectRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>DropDownSelectRefCurrent</L.Span>
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
    description: (
      <div>
        <p>
          Кроме поля, указанного в textField, можно искать вхождения и в других полях объекта data, перечислите в массиве имена этих полей (работает в режиме фильтрации <b>shouldFilterValues</b>).
        </p>
      </div>
    ),
  },
  {
    name: 'shouldAllowEmpty',
    type: 'boolean',
    required: false,
    description: 'Можно ли выбирать пустое значение (плейсхолдер) в выпадающем списке.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DropDownSelect.Props', 'shouldFilterValues')}
        target="_self"
      >
        shouldFilterValues
      </L.A>
    ),
    type: 'boolean',
    required: false,
    description: 'Возможность фильтрации значений в выпадающем списке.',
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
string | number | null | DataObject
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
string | number | null | DataObject
                `
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
        onClick={linkTo('Form|AutoComplete.Props', 'data: Array<DataObject>')}
        target="_self"
      >
        textField
      </L.A>
    ),
    type: 'string',
    required: false,
    description: (
      <div>
        <p>
          Обязательно, если в <b>data</b> передан массив объектов. <b>textField</b> - имя поля в объектах <b>data</b>, которое содержит текст для отображения в выпадающем списке.
        </p>
        <p>
          Не используется, если data - массив примитивов.
        </p>
      </div>
    ),
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  clearIcon:                  string,
  input:                      string,
  inputWrapper:               string,
  inputWrapperDisabled:       string,
  inputWrapperFocused:        string,
  inputWrapperInvalid:        string,
  selectIcon:                 string,
  selectIconClosed:           string,
  selectIconOpened:           string,
  wrapper:                    string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultDropDownSelectTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'value',
    type: (
      <L.Span>
        string | number | null | 
        {' '}
        <L.Tooltip
          position="bottom"
          title={'{ [x: string]: any }'}
        >
          <L.Span _txt-success>DataObject</L.Span>
        </L.Tooltip>
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        Значение компонента, совпадает с типом данных элементов <b>data</b>.
      </div>
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
    description: 'Настройка внешнего вида для контейнера всего компонента.',
  },
];
