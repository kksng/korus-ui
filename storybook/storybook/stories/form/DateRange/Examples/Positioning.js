import * as React from 'react';
import * as L from '@korus/leda';

export const Positioning = {
  text: (
    <L.Div _block>
      <L.P>С помощью атрибута <b>boundingContainerRef</b> можно спозиционировать календарь относительно контейнера</L.P>
      <L.P>
        Пример использования:
      </L.P> 
    </L.Div>
  ),
  liveDemo:`
const Positioned = () => {
  const containerRef = React.useRef(null);

  return (
    <L.Div
      style={{
        height: '300px',
        position: 'relative',
        border: '1px solid red',
        width: '400px',

      }}
      ref={containerRef}
    >
      <L.Div
      style={{
        width: '150px',
        position: 'absolute',
        right: 0,
        bottom: 0,
      }}
      >
        <L.DateRange
          boundingContainerRef={containerRef}
          _right
          data-test="datepicker"
        />
      </L.Div>
    </L.Div>
  )
};

render(<Positioned />);
`,
};