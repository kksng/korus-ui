import * as React from 'react';
import * as L from '../../../korus-ui';
import { SomeObject } from '../../../korus-ui/commonTypes';
import { StoryProps } from '../../types';

export const CompareObjectsBy = (storyProps: StoryProps): React.ReactElement => {
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
