import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const BoundingContainerRef = {
  liveDemo: `
const BoundingContainerRef = () => {
  const containerRef = React.useRef(null);

  const handleChange = (ev) => {
    const { value } = ev.component;
    
    console.log('Value', value);
  };

  return (
    <L.Div
      style={{
        padding: '200px 20px 20px 20px',
        border: '1px solid green',
      }}
      ref={containerRef}
    >
      <L.DropDownSelect
        boundingContainerRef={containerRef}
        onChange={handleChange}
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
    </L.Div>
  );
};

render(<BoundingContainerRef />);
`,
  text: (
    <L.Div _block>
      <p>
        Выпадающий список автоматически открывается вверх или вниз в зависимости от того, есть ли для него достаточно места под компонентом.
        По умолчанию для этого учитывается расстояние до нижней границы экрана.
      </p>
      <p>
        С помощью <b>boundingContainerRef</b> можно задать элемент,
        который <b>DropDownSelect</b> будет считать своим контейнером и соответственно позиционировать выпадающий список.
        В примере это элемент <b>div</b> с зелёными границами.
      </p>
    </L.Div>
  ),
  source: componentSrc,
};
