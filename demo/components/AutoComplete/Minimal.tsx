import * as React from 'react';
import * as L from '../../../leda';

export const Minimal = (props: { title: string }): React.ReactElement => {
  return (
    <L.Div>
      <L.AutoComplete
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
        onChange={(ev) => {
          console.log('ev.component', ev.component);
        }}
      />
    </L.Div>
  );
};
