import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const AllSuggestions = (StoryProps: StoryProps) => {
  const [value, setValue] = React.useState('');

  return (
    <L.Div _box _inner _demoBg>
      <L.AutoComplete
        name="ACfocus1"
        form="AwesomeForm"
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
        value={value}
        minSearchLength={2}
        shouldShowAllSuggestions
        onChange={(ev) => {
          setValue(ev.component.value);
          console.log('ev.component', ev.component);
        }}
        _width30
      />
    </L.Div>
  );
};
