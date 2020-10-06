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
    name: 'canSelectAll',
    type: 'boolean',
    required: false,
    description: (
      <div>
        <p>
          Выбор всех значений в списке одним кликом (пункт "Выбрать все" в выпадющем списке).
        </p>
      </div>
    ),
  },
  {
    name: 'compareObjectsBy',
    type: (
      <L.Span>
        {'string | (suggestionListItem: '}
        <L.Tooltip
          position="bottom"
          title="object"
        >
          <L.Span _txt-success>Value</L.Span>
        </L.Tooltip>
        {') => any'}
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Иногда объекты <b>value</b>/<b>defaultValue</b> и объекты <b>data</b> для правильного выделения элементов в выпадающем списке нужно сравнивать не по ссылке, а как-то иначе.
          Например, по произвольному полю объекта <i>id</i>, <i>name</i> итд.
        </p>
        <p>
           Передайте в <b>compareObjectsBy</b> имя этого поля в виде строки .
        </p>
        <p>
          Более сложный вариант - функция, которая будет вызвана для каждого объекта <b>data</b>.
          Функция должна возвращать какую-либо часть объекта, по которой будет производиться сравнение с аналогичной частью объекта <b>value</b>/<b>defaultValue</b>.
        </p>
      </div>
    ),
  },
  {
    name: 'data',
    type: (
      <L.Span>
        Array&lt;string&gt; |
        {' '}
        Array&lt;
        <L.Tooltip
          position="bottom"
          title="{ [string]: string | number }"
        >
          <L.Span _txt-success>DataObject</L.Span>
        </L.Tooltip>
        &gt;
      </L.Span>
    ),
    required: true,
    description: 'Данные для отображения в выпадающем списке. Если передаётся массив обьектов, обязательно используйте textField (имя поля обьекта, которое содержит текст для вывода в списке).',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|MultiSelect|Props', 'filterRule')}
        target="_self"
      >
        filterRule
      </L.A>
    ),
    type: '\'smart\' | \'startsWith\' | \'includes\'',
    required: false,
    description: 'Правило фильтрации выпадающего списка. Дефолтное значение - smart, "умный" поиск ищет в строке вхождения всех слов из инпута, не зависимо от их порядка, startsWith - фильтр по началу строку в инпуте, includes - поиск по вхождению строки.',
  },
  // {
  //   name: 'groupBy',
  //   type: (
  //     <L.Span>
  //       {'('}
  //       <L.Tooltip
  //         position="bottom"
  //         title={'{ [string]: string | number }'}
  //       >
  //         <L.Span _txt-success>DataObject</L.Span>
  //       </L.Tooltip>
  //       {') => string | undefined'}
  //     </L.Span>
  //   ),
  //   required: false,
  //   description: (
  //     <div>
  //       <p>
  //         Элементы в выпадающем списке можно группировать. Для этого каждый элемент в <b>data</b> должен иметь поле, которое позволяет его отнести к какой-либо группе.
  //       </p>
  //       <p>
  //         Например: <i>data={`{[{ city: 'Berlin', country: 'Germany' }, { city: 'Paris', country: 'France' }]}`}</i>
  //       </p>
  //       <p>
  //         Атрибут <b>groupBy</b> принимает функцию, которая будет выполнена для каждого элемента из <b>data</b>. Аргументом этой функции будет сам элемент.
  //         Верните из функции то поле элемента, которое должно использоваться для группировки: <i>groupBy={`{item => item.country}`}</i>.
  //       </p>
  //       <p>
  //         Если какие-то элементы <b>data</b> не содержат поле для группировки, они окажутся несгруппированными внизу выпадающего списка.
  //       </p>
  //     </div>
  //   ),
  // },
  {
    name: 'hasCheckBoxes',
    type: 'boolean',
    required: false,
    description: 'Чекбоксы в выпадающем списке.',
  },
  {
    name: 'hasClearButton',
    type: 'boolean',
    required: false,
    description: 'Отображение кнопки для очистки значения в поле ввода.',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Отключить компонент.',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    required: false,
    description: 'Показ лоадера в выпадающем списке - полезно при подгрузке данных для списка с сервера.',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: false,
    description: 'Принудительное открытие/закрытие выпадающего списка.',
  },
  {
    name: 'inputRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация поля ввода.',
  },
  {
    name: 'itemRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация элемента выпадающего списка.',
  },
  {
    name: 'listRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация контейнера для выпадающего списка.',
  },
  {
    name: 'maxSelected',
    type: 'number',
    required: false,
    description: 'Ограничение на количество выбранных элементов. После достижения лимита выпадающее окно перестает появляться.',
  },
  {
    name: 'maxTags',
    type: 'number',
    required: false,
    description: 'Количество тегов, после которого они будут объединены в один "выбрано n значений".',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Имя поля ввода для использования в формах и валидации.',
  },
  {
    name: 'noSuggestionsRender',
    type: '() => React.Node',
    required: false,
    description: 'Текст или компонент React, которые отображаются в выпадающем списке, если не найдено подходящих соответствий тексту в поле ввода.',
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
interface FocusEvent<T = Value> extends React.FocusEvent<T> {
  component: {
    value: T,
    name?: string,
  },
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.MultiSelectTypes.FocusEvent</L.Span>
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
        onClick={linkTo('Form|MultiSelect|Props', 'onChange')}
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
interface ChangeEvent<T = Value> extends React.ChangeEvent<T> {
  component: {
    deselectedValues?: T[],
    name?: string,
    selectedValue?: T,
    value: T[],
  },
}        
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.MultiSelectTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события изменения выбранных значений.',
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
interface FocusEvent<T = Value> extends React.FocusEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: T[],
  },
}              
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.MultiSelectTypes.FocusEvent</L.Span>
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
MultiSelectRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>MultiSelectRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'selectAllItemRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация текста "Выбрать все" в выпадающем списке.',
  },
  {
    name: 'shouldHideInput',
    type: 'boolean',
    required: false,
    description: (
      <div>
        <p>
          Отображать компонент без фильтра.
        </p>
      </div>
    ),
  },
  {
    name: 'shouldKeepSuggestions',
    type: 'boolean',
    required: false,
    description: (
      <div>
        <p>
          При выборе элементов в выпадающем списке они из него исчезают - это стандартное поведение.
        </p>
        <p>
          Если вы хотите, чобы при выборе элементы не исчезали, а подсвечивались, как выбранные, передайте <b>shouldKeepSuggestions</b>.
        </p>
        <p>
          С помощью <b>shouldKeepSuggestions</b> можно реализовать чекбоксы в выпадающем списке, см. пример.
        </p>
      </div>
    ),
  },
  {
    name: 'shouldSelectedGoFirst',
    type: 'boolean',
    required: false,
    description: (
      <div>
        <p>
          Включает сортировку элементов выпадающего списка так, чтобы все выбранные элементы находились в начале списка.
        </p>
      </div>
    ),
  },
//   {
//     name: 'sortSuggestions',
//     type: (
//       <L.Span>
//         {'(a: '}
//         <L.Tooltip
//           position="bottom"
//           title={(
//             <pre>
//               {
//                 `
// interface Item {
//   isScrollTarget: boolean,
//   isPlaceholder: boolean,
//   isHighlighted?: boolean,
//   isSelected?: boolean,
//   item: string | number | SomeObject | null,
//   key: string,
//   text: string | number,
// }                `
//               }
//             </pre>
//           )}
//         >
//           <L.Span _txt-success>Item</L.Span>
//         </L.Tooltip>
//         {', b: '}
//         <L.Tooltip
//           position="bottom"
//           title={(
//             <pre>
//               {
//                 `
// interface Item {
//   isScrollTarget: boolean,
//   isPlaceholder: boolean,
//   isHighlighted?: boolean,
//   isSelected?: boolean,
//   item: string | number | SomeObject | null,
//   key: string,
//   text: string | number,
// }                `
//               }
//             </pre>
//           )}
//         >
//           <L.Span _txt-success>Item</L.Span>
//         </L.Tooltip>
//         {') => number'}
//       </L.Span>
//     ),
//     required: false,
//     description: (
//       <div>
//         <p>
//           Сортировка выпадающего списка.
//         </p>
//         <p>
//           Для сортировки используйте функцию в формате
//           {' '}
//           <a
//             href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             compareFunction
//           </a>.
//         </p>
//         <p>
//           Например: <i>sortSuggestions=&#123;(a, b) => (a.text > b.text ? 1 : -1)&#125;</i>
//         </p>
//       </div>
//     ),
//   },
  {
    name: (
      <L.A
        onClick={linkTo('Form|MultiSelect|Props', 'data: Array<DataObject>')}
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
          Если вы передаёте в <b>data</b> массив объектов, укажите в <b>textField</b>, какое поле этого объекта содержит текст для элементов в выпадающем списке.
        </p>
      </div>
    ),
  },
  {
    name: 'tagRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация тега.',
  },
  {
    name: 'tagsUnionRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Кастомизация сообщения <i>"Выбрано n значений"</i>, если выбрано элементов больше, чем <b>maxTags</b>.
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
  clearIcon:              string,
  input:                  string,
  inputFocused:           string,
  inputWrapper:           string,
  inputWrapperFocused:    string,
  inputWrapperDisabled:   string,
  inputWrapperInvalid:    string,
  wrapper:                string,
  tagsContainer:          string,
  tagsUnion:              string,
  
  // suggestions list theme
  container:              string,
  containerVisible:       string,
  containerTop:           string,
  group:                  string,
  groupLabel:             string,
  item:                   string,
  itemHighlighted:        string,
  itemPlaceholder:        string,
  itemSelected:           string,
  list:                   string,
  noSuggestions:          string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultMultiSelectTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'value',
    type: 'T',
    required: false,
    description: (
      <div>
        <p>
          Выбранные элементы. Тип автоматически выводится из типов элементов <b>data</b>.
        </p>
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
    description: 'Кастомизация враппера компонента.',
  },
];
