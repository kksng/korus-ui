import * as React from 'react';
import * as L from '../../../leda';
import { SomeObject } from '../../../leda/commonTypes';

// eslint-disable-next-line
export const CompareObjectsBy = (args: SomeObject): React.ReactElement => {
  const [value, setValue] = React.useState<SomeObject>({ id: 1, attr: 'value1', city: 'London' });

  return (
    <L.Div _box _inner _demoBg>
      <L.DropDownSelect
        data={[
          { id: 1, attr: 'value1', city: 'London' },
          { id: 2, attr: 'value2', city: 'Berlin' },
          { id: 3, attr: 'value3', city: 'Paris' },
          { id: 4, attr: 'value4', city: 'Stockholm' },
          { id: 5, attr: 'value5', city: 'Madrid' },

        ]}
        textField="city"
        value={value}
        placeholder="Choose a city"
      />
      <br />
      <br />
      <L.Button
        onClick={() => {
          setValue({ id: 2, attr: 'value2', city: 'Berlin' });
        }}
      >
        Set Berlin
      </L.Button>
    </L.Div>
  );
};
