import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const Customization = {
  liveDemo: `
const Customization = () => {
  const textField = 'name';
  const [value, setValue] = React.useState('');


  const handleChange = ev => setValue(ev.component.value);

  const itemRender = ({ Element, elementProps, componentProps }) => {
    const { item, textField } = componentProps;

    return (
      <Element
        {...elementProps}
        _txt-success={item.region === 'Asia'}
        _txtBold={item.region === 'Europe'}
      >
        {item[textField]} (region: {item.region})
      </Element>
    );
  }

  const noSuggestionsRender = () => <L.Div _txtCenter _inner>noSuggestionsRender</L.Div>;

  return (
    <L.AutoComplete
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
      onChange={ev => handleChange(ev)}
      value={value}
      textField={textField}
      itemRender={itemRender}
      noSuggestionsRender={noSuggestionsRender}
      _width50
    />
  )
};

render(<Customization />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Для настройки внешнего вида частей компонента используйте методы с суффиксом Render:
      </L.P>
      <L.Ul _txt-list>
        <li>
          <strong>itemRender</strong> - элемент выпадающего списка
        </li>
        <li>
          <L.P><strong>noSuggestionsRender</strong> - уведомление о том, что подходящих совпадений в выпадающем списке
            не
            найдено.
          </L.P>
          <L.P>По умолчанию выводится текст "НИЧЕГО НЕ НАЙДЕНО"</L.P>
          <L.P>Для отключения текста по умолчанию передайте <i>() => null</i></L.P>
        </li>
      </L.Ul>
    </L.Div>
  ),
  source: componentSrc,
};
