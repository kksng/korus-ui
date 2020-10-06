import React from 'react';
import * as L from '@korus/leda';

import { componentSrc } from './index';

export const PrimitivesData = {
  liveDemo: `
const PrimitivesData = () => {
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((event) => {
    setValue(event.component.value);
  }, [setValue]);

  return (
    <L.AutoComplete
      data={['Moscow', 'Saint-Petersburg', 'Ekaterinburg', 'Novosibirsk']}
      onChange={handleChange}
      value={value}
    />
  );
};

render(<PrimitivesData />);
`,
  text: (
    <L.Div _block>
      <L.P>Если в <b>data</b> передан массив строк, то:</L.P>
      <L.Ul _txt-list>
        <L.Li>
          <b>event.component.value</b> в <b>onChange</b> будет содержать строку,
        </L.Li>
        <L.Li>
          атрибут <b>textField</b> не используется.
        </L.Li>
      </L.Ul>
    </L.Div>
  ),
  source: componentSrc,
};
