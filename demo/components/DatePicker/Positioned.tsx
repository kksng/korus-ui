import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

export const Positioned = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});
  const containerRef = React.useRef(null);

  return (
    <L.Div _box _inner _demoBg>
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
          <L.DatePicker
            boundingContainerRef={containerRef}
            _right
            {...props}
            data-test="datepicker"
          />
        </L.Div>
      </L.Div>
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Default',
            props: { },
          },
          {
            text: 'isDisabled',
            props: { isDisabled: true },
          },
          {
            text: 'isOpen',
            props: { isOpen: true },
          },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
