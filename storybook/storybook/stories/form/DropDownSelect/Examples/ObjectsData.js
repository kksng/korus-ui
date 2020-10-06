import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const ObjectsData = {
  liveDemo: `
const ObjectsData = () => {
  const [value, setValue] = React.useState(null);

  const handleChange = React.useCallback((ev) => {
    const { value } = ev.component;
    
    setValue(value);
    
    console.log('You have chosen', value);
  }, [setValue]);

  return (
    <L.DropDownSelect
      data={[
        { city: 'Moscow', id: 1, attr: 'value1' },
        { city: 'Saint-Petersburg', id: 2, attr: 'value2' },
        { city: 'Ekaterinburg', id: 3, attr: 'value3' },
        { city: 'Novosibirsk', id: 4, attr: 'value4' },
      ]}
      onChange={handleChange}
      textField="city"
      value={value}
      placeholder="Choose a city"
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
          в <b>textField</b> обязательно передаётся строка с именем поля в оъектах <b>data</b>, из которого нужно брать значение для отображения в выпадающем списке
        </li>
        <li>
          в <b>value</b> <b>onChange</b> будет приходить событие в формате:
          {' '}
          <L.Tooltip
            title={(
              <pre>
                {`
type CustomChangeEvent = {
  ...SyntheticEvent&lt;EventTarget&gt;,
  component: {
    ...EventTarget,
    value: DataObject,
    name?: string,
  },
};          
                `}
              </pre>
            )}
            position="bottom"
          >
            <L.Span _txt-success>CustomPrimitivesChangeEvent</L.Span>
          </L.Tooltip>
          , где <b>DataObject</b> - один из объектов из массива <b>data</b>.
        </li>
      </L.Ul>
    </L.Div>
  ),
  source: componentSrc,
};
