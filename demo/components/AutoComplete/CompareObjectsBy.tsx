import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

const data = [
  { id: 0, attr: 'value0', city: 'Moscow' },
  { id: 0, attr: 'value0', city: 'Minsk' },
  { id: 1, attr: 'value1', city: 'London' },
  { id: 2, attr: 'value2', city: 'Berlin' },
  { id: 3, attr: 'value3', city: 'Paris' },
  { id: 4, attr: 'value4', city: 'Stockholm' },
  { id: 5, attr: 'value5', city: 'Madrid' },
  { id: 6, attr: 'value6', city: 'Madrid' },
];

export const CompareObjectsBy = (StoryProps: StoryProps): React.ReactElement => {
  const [value, setValue] = React.useState<string | null>();

  return (
    <L.Div _box _inner _demoBg>
      <div>
        controlled
      </div>
      <br />
      <div>
        <L.AutoComplete
          data={data}
          textField="city"
          value={value}
          compareObjectsBy="id"
          minSearchLength={0}
          onChange={(event) => {
            console.log('event.component.value', event.component.value, event.component.suggestion)
            setValue(event.component.value);
          }}
          hasClearButton
        />
      </div>
      <br />
      <div>
        <L.Button
          onClick={() => {
            setValue('Berlin');
          }}
        >
          set value
        </L.Button>
      </div>
      <br />
      <div>
        uncontrolled
      </div>
      <br />
      <div>
        <L.AutoComplete
          data={data}
          textField="city"
          compareObjectsBy={(item) => item.id}
          minSearchLength={0}
          onChange={(event) => {
            console.log(event.component.value, event.component.suggestion);
          }}
        />
      </div>
    </L.Div>
  );
};
