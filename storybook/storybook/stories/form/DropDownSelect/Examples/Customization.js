import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const Customization = {
  liveDemo: `
const Customization = () => {
  const textField = 'name';
  const [value, setValue] = React.useState(null);

  const handleChange = ev => setValue(ev.component.value);
  
  const itemRender = ({ Element, elementProps, componentProps }) => {    
    const { isPlaceholder, item, textField } = componentProps;
    
    return (
      <Element
        {...elementProps}
        _txt-success={item.region === 'Asia'}
        _txt-bold={item.region === 'Europe'}
      >
        {item[textField]} (region: {item.region})
      </Element>
    );
  }

  const noSuggestionsRender = () => <L.Div _txt-center _inner>noSuggestionsRender</L.Div>;

  return (
    <L.DropDownSelect
      shouldFilterValues
      data={[
        { name: 'Paris', region: 'Europe' },
        { name: 'Berlin', region: 'Europe' },
        { name: 'Prague', region: 'Europe' },
        { name: 'Rome', region: 'Europe' },
        { name: 'London', region: 'Europe' },
        { name: 'Bangkok', region: 'Asia' },
        { name: 'Tokyo', region: 'Asia' },
        { name: 'Delhi', region: 'Asia' },
      ]}
      placeholder="Choose a city"
      onChange={handleChange}
      value={value}
      textField={textField}
      itemRender={itemRender}
      noSuggestionsRender={noSuggestionsRender}
      _width-30
    />
  )
};

render(<Customization />);
`,
  text: (
    <L.Div>
      <L.P>
        Для настройки внешнего вида частей компонента используйте методы с суффиксом Render:
      </L.P>
      <L.Ul _txt-list>
        <li>
          <b>itemRender</b> - элемент выпадающего списка, в метод приходит значение для элемента и флаг isPlaceholder.
        </li>
        <li>
          <L.P>
            <b>noSuggestionsRender</b> - уведомление о том, что подходящих совпадений в выпадающем списке
            не найдено (если используется фильтр).
          </L.P>
          <L.P>
            По умолчанию выводится текст "НИЧЕГО НЕ НАЙДЕНО"
          </L.P>
          <L.P>
            Для отключения текста по умолчанию передайте <i>() => null</i>
          </L.P>
        </li>
      </L.Ul>
    </L.Div>
  ),
  source: componentSrc,
};
