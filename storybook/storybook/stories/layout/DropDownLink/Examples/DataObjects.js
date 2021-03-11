import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const DataObjects = {
  liveDemo: `
const DataObjects = () => {
  const [value, setValue] = React.useState({ txt: 'Saint Petersburg', val: 7 });

  return (
    <L.DropDownLink
      name="DropDownLink"
      onChange={() => {
        update('Change', ev);
        setValue(ev.component.value);
      }}
      value={value}
      data={[
        { txt: 'London', val: 1 },
        { txt: 'Islamabad', val: 2 },
        { txt: 'Berlin', val: 3 },
        { txt: 'Washington', val: 4 },
        { txt: 'Paris', val: 5 },
        { txt: 'Rome', val: 6 },
        { txt: 'Saint Petersburg', val: 7 },
      ]}
      textField="txt"
    />
  );
};
render(<DataObjects />);
`,
  text: (
    <L.Div _block>
      <L.P>Если в data передан массив объектов, то:</L.P>
      <L.Ul _txt-list>
        <li>
          нужно указать <b>textField</b> поле обьекта, которое содержит данные
          для вывода в <b>data</b>, из которого нужно брать значение для
          отображения в выпадающем списке
        </li>
        <li>
          также указать <b>valueField</b> (не обязательно), если в{' '}
          <b>onChange</b> нужно передавать данные другого поля обьекта (например
          id).
        </li>
      </L.Ul>
    </L.Div>
  ),
  source: componentSrc,
};
