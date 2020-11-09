import * as React from 'react';
import * as L from '../../../leda';
import { SomeObject } from '../../../leda/commonTypes';

// eslint-disable-next-line
export const BoundingElementRef = (args: SomeObject): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>();
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string | number | SomeObject | null>(null);

  const containerRef = React.useRef(null);

  return (
    <L.Div _box _inner _demoBg>
      <L.Div
        style={{
          padding: '200px 20px 20px 20px',
          border: '1px solid green',
        }}
        ref={containerRef}
      >
        <L.DropDownSelect
          boundingContainerRef={containerRef}
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
          hasClearButton
          data-test="dropdownselect"
          defaultValue="London"
          _width40
          isOpen={isOpen}
          isLoading={isLoading}
          isDisabled={isDisabled}
          value={value}
          onChange={(ev) => {
            console.log('ev.component', ev.component);
            setValue(ev.component.value);
          }}
          onBlur={(ev) => {
            console.log('ev.component.value', ev.component.value);
          }}
        />
      </L.Div>
      <br />
      <br />
      <L.Button _warning={isDisabled} onClick={() => setIsDisabled(!isDisabled)}>Toggle isDisabled</L.Button>
      {' '}
      <L.Button _warning={isLoading} onClick={() => setIsLoading(!isLoading)}>Toggle isLoading</L.Button>
      {' '}
      <L.Button _warning={isOpen} onClick={() => setIsOpen(isOpen ? undefined : true)}>Toggle isOpen</L.Button>
    </L.Div>
  );
};
