import * as React from 'react';
import * as L from '~';
import { SomeObject } from '~/commonTypes';

// eslint-disable-next-line
export const EmptyValues = (args: SomeObject): React.ReactElement => (
  <L.Div _box _inner _demoBg>
    <L.DropDownSelect
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
      placeholder="Choose a city..."
      shouldAllowEmpty
      _width40
    >
    </L.DropDownSelect>
  </L.Div>
);
