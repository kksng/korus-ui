import * as React from 'react';
import * as L from '~';
import { Value } from '~/components/DropDownLink/types';

const data = [
  { id: 0, attr: 'value0', city: 'Moscow' },
  { id: 0, attr: 'value0', city: 'Minsk' },
  { id: 1, attr: 'value1', city: 'London' },
  { id: 2, attr: 'value2', city: 'Berlin' },
  { id: 3, attr: 'value3', city: 'Paris' },
  { id: 4, attr: 'value4', city: 'Stockholm' },
  { id: 5, attr: 'value5', city: 'Madrid' },
];

// eslint-disable-next-line
export const CompareObjectsBy = (anyProps: any): React.ReactElement => {
  const [value, setValue] = React.useState<Value>('');

  return (
    <L.Div _box _inner _demoBg>
      <L.P>
        controlled
      </L.P>
      <L.P>
        <L.DropDownLink
          data={data}
          textField="city"
          value={value}
          onChange={(event) => {
            setValue(event.component.value);
          }}
        />
      </L.P>
      <L.P>
        <L.Button
          onClick={() => {
            setValue('Berlin');
          }}
        >
          set value
        </L.Button>
      </L.P>
    </L.Div>
  );
};
