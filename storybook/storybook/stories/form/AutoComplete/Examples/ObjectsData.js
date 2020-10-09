import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const ObjectsData = {
  liveDemo: `
const ObjectsData = () => {
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((ev) => {
    const { suggestion, value } = ev.component;
    
    setValue(value);
    
    if (suggestion) {
      console.log('You have chosen', value);
    }
  }, [setValue]);

  return (
    <L.AutoComplete
      data={[
        { city: 'Moscow', id: 1, attr: 'value1' },
        { city: 'Saint-Petersburg', id: 2, attr: 'value2' },
        { city: 'Ekaterinburg', id: 3, attr: 'value3' },
        { city: 'Novosibirsk', id: 4, attr: 'value4' },
      ]}
      onChange={handleChange}
      textField="city"
      value={value}
    />
  );
};

render(<ObjectsData />);
`,
  text: (
    <L.Div _block>
      <L.P>Если в data передан массив объектов, то:</L.P>
      <L.Ul _txt-list>
        <li>
          в <b>textField</b> передаётся строка с именем поля в объектах data, из которого нужно брать значение для отображения в выпадающем списке
        </li>
        <li>
          в value <b>onChange</b> будет приходить событие в формате: ChangeEvent
        </li>
        <li>
          если текст в поле ввода совпадает с текстом одного из элементов выпадающего списка, то в ChangeEvent будет добавлено поле suggestion, которое содержит соответствующий объект из массива data
        </li>
      </L.Ul>
    </L.Div>
  ),
  source: componentSrc,
};
