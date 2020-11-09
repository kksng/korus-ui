import * as React from 'react';
import * as L from '../../../leda';
import { SomeObject } from '../../../leda/commonTypes';

const data = [
  { id: 0, city: 'Moscow' },
  { id: 0, city: 'Minsk' },
  { id: 1, city: 'London' },
  { id: 2, city: 'Berlin' },
  { id: 3, city: 'Paris' },
  { id: 4, city: 'Stockholm' },
  { id: 5, city: 'Madrid' },
  { id: 6, city: 'Madrid' },
];

// eslint-disable-next-line
export const CompareObjectsBy = (args: SomeObject): React.ReactElement => {
  const [value, setValue] = React.useState<SomeObject>({ id: 1, city: 'London' });

  return (
    <L.Div _box _inner _demoBg>
      <L.DropDownSelect
        data={data}
        textField="city"
        value={value}
        placeholder="Choose a city"
        compareObjectsBy="id"
        onChange={(ev) => {
          setValue(ev.component.value);
        }}
      />
      <br />
      <br />
      <L.Button
        onClick={() => {
          setValue({ id: 2, city: 'Berlin' });
        }}
      >
        Set Berlin
      </L.Button>
      <br />
      <br />
      <L.P>
        Uncontrolled with defaultValue
      </L.P>
      <L.DropDownSelect
        data={data}
        defaultValue={{ id: 2, city: 'Berlin' }}
        textField="city"
        compareObjectsBy={(item) => item.id}
        onChange={(ev) => {
          console.log('ev.component.value', ev.component.value);
        }}
      />
    </L.Div>
  );
};
