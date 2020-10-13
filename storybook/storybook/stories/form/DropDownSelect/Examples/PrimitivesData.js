import React from 'react';
import * as L from '@korus/leda';

import { componentSrc } from './index';

export const PrimitivesData = {
  liveDemo: `
const PrimitivesData = () => {
  const [value, setValue] = React.useState(null);

  const handleChange = React.useCallback((event) => {
    const { value } = event.component;
    setValue(value);
    console.log(value);
  }, [setValue]);

  return (
    <L.DropDownSelect
      data={['Moscow', 'Saint-Petersburg', 'Ekaterinburg', 'Novosibirsk']}
      onChange={handleChange}
      value={value}
      placeholder="Choose a city"
    />
  );
};

render(<PrimitivesData />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Если в data передан массив строк, то:
      </L.P>
      <L.Ul _txt-list>
        <L.Li>
          в <b>onChange</b> будет приходить эвент в формате:
          {' '}
          <L.Tooltip
            title={(
              <pre>
                {`
  type CustomChangeEvent = {
    component: {
      ...EventTarget,
      value: string,
      name?: string,
    },
    ...SyntheticEvent&lt;EventTarget&gt;,
  };          
                `}
              </pre>
            )}
            position="bottom"
          >
            <L.Span _txt-success>CustomPrimitivesChangeEvent</L.Span>
          </L.Tooltip>
          , где <b>value</b> - строка.
        </L.Li>
        <L.Li>
          поле <b>textField</b> не используется
        </L.Li>
      </L.Ul>
    </L.Div>
  ),
  source: componentSrc,
};
