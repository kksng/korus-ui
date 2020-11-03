import * as React from 'react';
import * as L from '../../../leda';

export const Minimal = (props: { title: string }): React.ReactElement => {
  const [value, setValue] = React.useState('');

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
        value={value}
        onChange={(ev) => {
          setValue(ev.component.value);
          console.log('ev.component', ev.component);
        }}
      />
    </L.Div>
  );
};
