import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const Customization = {
  liveDemo: `
const Customization = () => {
  const [ value, setValue ] = React.useState('Saint Petersburg');
  
  return (
    <L.DropDownLink
      name="DropDownLink"
      onChange={() => {
        update('Change', ev);
        setValue(ev.component.value);
      }}
      value={value}
      data={[
        'London',
        'Islamabad',
        'Berlin',
        'Washington',
        'Paris',
        'Rome',
        'Tokyo',
        'Budapest',
        'Ottawa',
        'Moscow',
      ]}
    />
  );
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
          <b>itemRender</b> - функция для кастомизации значения и внешнего вида элемента выпадающего списка. Вызывается когда элемент собирается кастомизаироваться.
        </li>
        <li>
          <L.P>
            <b>titleRender</b> - функция для кастомизации текущего значения.
          </L.P>
        </li>
      </L.Ul>
    </L.Div>
  ),
  source: componentSrc,
};
