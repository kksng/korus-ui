import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

// eslint-disable-next-line
export const EmptyValues = (storyProps: StoryProps): React.ReactElement => (
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
